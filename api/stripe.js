const stripeSdk = require('stripe')
const stripe = stripeSdk(process.env.STRIPE_SECRET_KEY)

async function getStripeCustomer(data) {
  let customer = null;
  let existingCustomers = await stripe.customers.list({ email: data.user.email });
  if (existingCustomers.data.length) {
    // use existing customer
    customer = existingCustomers.data[0];
    console.log(`found existing customer:`, customer)
  } else {
    // create new customer
    try {
      customer = await stripe.customers.create({
        name: `${data.user.firstName} ${data.user.lastName}`,
        email: data.user.email,
        phone: data.user.phone,
        address: {
          line1: data.user.address,
          city: data.user.city,
          state: data.user.state,
          postal_code: data.user.zip,
        },
        source: data.token
      })
    } catch (err) {
      console.log(`error creating customer: ${err}`)
    }
    // console.log(`successfully created customer:`, customer)
  }
  return customer;
}

async function createCharge(customer, data) {
  try {
    let charge = await stripe.charges.create({
      currency: 'usd',
      amount: data.amount,
      receipt_email: data.email,
      customer: customer.id,
      description: data.description,
      metadata: {
        'comment': data.user.comment
      }
    }, {
      idempotencyKey: data.idempotencyKey
    })
    console.log(`successfully created charge:`, charge)
    return charge;
  } catch (err) {
    console.log(`error creating charge: ${err}`)
  }
}

async function createSubscription(customer, data) {
  try {

    let plan = getPlanId(data.recurring);

    let subscription = await stripe.subscriptions.create(
      {
        customer: customer.id,
        items: [{
          plan: plan,
          quantity: data.amount / 100, // amount to charge per period
          metadata: {
            'comment': data.user.comment
          }
        }],
      }, {
      idempotencyKey: data.idempotencyKey
    })
    console.log('successfully created subscription', subscription);
    return subscription;
  } catch (err) {
    console.log('error creating subscription', err);
    return false;
  }
}

function getPlanId(id) {
  switch (id) {
    case 1:
      return 'monthly';
    case 2:
      return 'daily';
    case 3:
      return 'weekly';
    case 4:
      return 'quarterly';
    case 5:
      return 'yearly';
  }
}

exports.handler = async (event, context) => {

  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        status: 'invalid-method'
      })
    }
  }

  const data = JSON.parse(event.body)
  console.log(data);

  if (!data.token || !data.amount || !data.idempotencyKey) {
    console.error('Required information is missing.')

    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        status: 'missing-information'
      })
    }
  }

  /* Do stripe payment processing */
  let customer = await getStripeCustomer(data);
  let charge;

  if (data.recurring == 0) { // one time donation

    charge = await createCharge(customer, data);

  } else { // recurring donation

    charge = await createSubscription(customer, data);

  }

  const status = (!charge || (charge.status !== 'succeeded' && charge.status !== 'active')) ? 'failed' : charge.status

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify({
      status: status,
      customer: {
        email: customer.email
      }
    })
  }

}
