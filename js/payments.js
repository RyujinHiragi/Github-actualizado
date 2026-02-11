// payments.js — módulo de integración de pasarelas (stubs)
// Intención: si el proyecto añade `js/payments-config.js` con endpoints/keys,
// este módulo intentará crear el pago llamando al endpoint configurado.

(function(window){
  async function process(method, amount, cart){
    // amount: número (en COP) — asumimos monto total
    const cfg = window.PAYMENT_CONFIG || null;
    if(!cfg || !cfg.endpoints || !cfg.endpoints.createPayment){
      // No hay configuración — indicar que no hay integración y simular
      return Promise.resolve({ simulated: true, message: 'No payment config — fallback a simulación' });
    }

    // llamar al endpoint del servidor para crear pago real
    try{
      const res = await fetch(cfg.endpoints.createPayment, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({method, amount, cart})
      });
      const body = await res.json();
      // el endpoint debe devolver {checkout_url} o {success:true}
      if(body.checkout_url) return {redirect: body.checkout_url};
      return body;
    }catch(err){
      return Promise.reject(new Error('Error comunicando con el servidor de pagos: '+err.message));
    }
  }

  // Exponer API mínima
  window.Payments = {
    process
  };
})(window);
