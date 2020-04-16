import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default async function (data) {
  // console.log({ data });

  try {
    const res = await axios.post("/.netlify/functions/stripe", {
      user: data.user,
      amount: data.amount * 100, //it expects the price in cents, as an integer
      currency: data.currency.toLowerCase(),
      recurring: data.recurring,
      plan: data.plan,
      token: data.token,
      idempotencyKey: uuidv4(),
      description: 'Donation to Ezras Nashim',
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    return res;
  } catch (err) {
    return err;
  }
}
