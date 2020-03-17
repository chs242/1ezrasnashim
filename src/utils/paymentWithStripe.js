import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default async function (data) {
  console.log({ data });

  try {
    const res = await axios.post("http://localhost:8888/.netlify/functions/stripe", {
      user: data.user,
      amount: 20000, //it expects the price in cents, as an integer
      token: data.token.id,
      idempotencyKey: uuidv4(),
      description: 'Donation to Ezras Nashim',
      recurring: data.recurring
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }
    )

    return res;
  } catch (err) {
    return err;
  }
}
