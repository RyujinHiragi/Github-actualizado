const express = require('express');
const axios = require('axios');
const cors = require('cors');
// Cargar variables de entorno opcionalmente si está instalado `dotenv`
try{
  const dotenv = require('dotenv');
  dotenv.config();
}catch(e){
  // dotenv no está instalado; continuar sin lanzar excepción.
}

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Endpoint de ejemplo: crea una preferencia en MercadoPago (si está configurado)
// o devuelve una respuesta simulada.
app.post('/create-payment', async (req, res) => {
  const { method, amount, cart } = req.body;
  if (!method || !amount) return res.status(400).json({ error: 'method and amount required' });

  try {
    if (method === 'mercadopago') {
      const token = process.env.MP_ACCESS_TOKEN;
      if (!token) {
        return res.json({ simulated: true, message: 'MP_ACCESS_TOKEN not configured', checkout_url: null });
      }

      // Mapear ítems (si vienen) o crear uno solo con el total
      const items = (cart && cart.length) ? cart.map(i => ({
        title: `${i.name} ${i.presentation || ''}`.trim(),
        quantity: i.qty || 1,
        unit_price: (i.unitPrice || Math.round((amount || 0) / (i.qty||1)))
      })) : [{ title: 'Compra Gosén', quantity: 1, unit_price: amount }];

      const payload = {
        items,
        currency_id: 'COP'
      };

      const resp = await axios.post('https://api.mercadopago.com/checkout/preferences', payload, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
      });

      // MercadoPago devuelve init_point
      return res.json({ checkout_url: resp.data.init_point, raw: resp.data });
    }

    if (method === 'wompi') {
      // Integración Wompi (sandbox/producción)
      const key = process.env.WOMPI_PRIVATE_KEY;
      if (!key) return res.json({ simulated: true, message: 'WOMPI_PRIVATE_KEY not configured', checkout_url: null });

      // Construir payload mínimo para Wompi
      const redirectUrl = process.env.WOMPI_REDIRECT_URL || (req.body.redirect_url || 'http://localhost:8000');
      const reference = `gosen_${Date.now()}`;
      const amount_in_cents = Math.round((amount || 0) * 100);

      const payload = {
        amount_in_cents,
        currency: 'COP',
        customer_email: (cart && cart.length && cart[0].email) ? cart[0].email : (req.body.customer_email || 'cliente@ejemplo.com'),
        reference,
        redirect_url: redirectUrl
      };

      try{
        const endpoint = process.env.WOMPI_ENV === 'prod' ? 'https://production.wompi.co/v1/transactions' : 'https://sandbox.wompi.co/v1/transactions';
        const wresp = await axios.post(endpoint, payload, { headers: { Authorization: `Bearer ${key}`, 'Content-Type':'application/json' } });
        // Intentar extraer una URL de checkout conocida en la respuesta
        const data = wresp.data || {};
        // Wompi sandbox may return different shapes; try common places
        let checkout_url = null;
        if (data.data && data.data.attributes && data.data.attributes.redirect_url) checkout_url = data.data.attributes.redirect_url;
        if (!checkout_url && data.data && data.data.payment_method && data.data.payment_method.payment_url) checkout_url = data.data.payment_method.payment_url;
        if (!checkout_url && data.data && data.data.checkout_url) checkout_url = data.data.checkout_url;
        // Devolver lo que encontremos
        return res.json({ checkout_url, raw: data });
      }catch(err){
        console.error('wompi error', err.response ? err.response.data : err.message);
        return res.status(500).json({ error:'wompi_error', detail: err.response ? err.response.data : err.message });
      }
    }

    // Otros métodos: PayU, PSE, etc. Se pueden implementar de forma similar.
    return res.json({ simulated: true, message: 'Método no integrado. Respuesta simulada.', checkout_url: null });
  } catch (err) {
    console.error('error create-payment', err.response ? err.response.data : err.message);
    return res.status(500).json({ error: 'internal_error', detail: err.message });
  }
});

app.get('/', (req, res) => res.send('Servidor de ejemplo para pagos — POST /create-payment'));

app.listen(PORT, () => console.log(`Payments example server listening on http://localhost:${PORT}`));
