/*
  payments-config.example.js

  Copia este archivo a `payments-config.js` y añade tus claves/endpoints.
  Ejemplo de estructura:

  window.PAYMENT_CONFIG = {
    endpoints: {
      createPayment: 'https://tu-servidor.com/create-payment'
    },
    wompi: {
      publicKey: 'pub_test_xxx'
    },
    mercadopago: {
      publicKey: 'TEST-xxxxx'
    }
  }

  Nota: por seguridad la creación de transacciones y claves secretas deben
  realizarse en servidor. `createPayment` es un endpoint que tu servidor
  implementa y que crea la transacción (por Wompi/MercadoPago/PayU) y
  devuelve un `checkout_url` para redirigir al usuario.
*/

window.PAYMENT_CONFIG = {
  endpoints: {
    // Crear pago en servidor y devolver { checkout_url }
    // Ejemplo local: 'http://localhost:3000/create-payment'
    createPayment: 'http://localhost:3000/create-payment'
  },
  wompi: { publicKey: '' },
  mercadopago: { publicKey: '' }
};
