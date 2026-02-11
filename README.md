# Servidor ejemplo — Integración de pagos

Este pequeño servidor muestra cómo exponer un endpoint `/create-payment`
que la app cliente (`js/payments.js`) puede llamar para crear transacciones
con pasarelas reales (ej. MercadoPago). Incluye un ejemplo funcional para
MercadoPago y placeholders para Wompi.

Instalación

```bash
cd server
npm install
cp .env.example .env
# Rellenar .env con tus claves (MP_ACCESS_TOKEN, WOMPI_PRIVATE_KEY si aplica)
npm start
```

Endpoint

- `POST /create-payment` — body JSON: `{ method, amount, cart }`.

Ejemplo curl (simulación):

```bash
curl -X POST http://localhost:3000/create-payment \
  -H "Content-Type: application/json" \
  -d '{"method":"mercadopago","amount":12000,"cart":[]}'
```

Respuesta esperada (MercadoPago configurado):

```json
{ "checkout_url": "https://www.mercadopago.com/checkout/v1/redirect?...." }
```

Notas

- Por seguridad, las claves privadas deben residir en el servidor.
- Para Wompi y PayU se requiere implementar la llamada a sus APIs siguiendo
  la documentación oficial. El servidor de ejemplo devuelve una respuesta
  simulada si las claves no están configuradas.
