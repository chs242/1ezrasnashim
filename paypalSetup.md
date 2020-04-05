#### @ChaimStern, this is just for my future reference. @Yehuda.

(Paypal API docs)[https://developer.paypal.com/docs/api/subscriptions/v1/#plans_create]

## 1: get a BEARER_TOKEN

```bash
curl -v POST https://api.sandbox.paypal.com/v1/oauth2/token \
-H "Accept: application/json" \
-H "Accept-Language: en_US" \
-u "CLIENT_ID:SECRET" \ // replace with <CLIENT_ID>:<SECRET>
-d "grant_type=client_credentials"
```


## 2: create a product

```bash
curl -v -X POST https://api.sandbox.paypal.com/v1/catalogs/products \
-H "Content-Type: application/json" \
-H "Authorization: Bearer PAYPAL_BEARER_TOKEN" \
-d '{
"name": "Ezras Nashim Donation",
  "description": "Testing paypal donations",
    "type": "SERVICE",
      "category": "CHARITY"
  }'
```

## 3: create a plan

```bash
curl -v -k -X POST https://api.sandbox.paypal.com/v1/billing/plans \
-H "Accept: application/json" \
-H "Authorization: Bearer PAYPAL_BEARER_TOKEN" \
-H "Prefer: return=representation" \
-H "Content-Type: application/json" \
-d '{
"product_id": "PROD-1PN50220WK954545H",
  "name": "Monthly",
  "description": "Monthly donation",
  "quantity_supported": true,
  "billing_cycles": [
    {
      "frequency": {
        "interval_unit": "MONTH", // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
        "interval_count": 1
      },
      "tenure_type": "REGULAR", "sequence": 1,
      "pricing_scheme": {
        "fixed_price": {
          "value": "1",
          "currency_code": "USD"
        }
      }
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
      "setup_fee": {
      "value": "0",
      "currency_code": "USD"
    },
    "setup_fee_failure_action": "CONTINUE",
    "payment_failure_threshold": 0
  }
}'
```
