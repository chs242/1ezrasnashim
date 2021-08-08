const Axios = require('axios');

const LIVE = true
const sandboxToken = 'TOKEN_HERE'
const liveToken = 'LIVE_TOKEN_HERE'

let token = LIVE ? liveToken : sandboxToken

const client = Axios.create({
  baseURL: LIVE ? 'https://api.paypal.com/v1/' : 'https://api.sandbox.paypal.com/v1/',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

const listPlans = async () => {
  const { data } = await client.get('billing/plans/', {
    params: {
      page_size: 20,
    }
  })
  // console.log(data.plans)
  return data.plans
}

const createPlan = async (name, description, intervalUnit, intervalCount, totalCycles, currency) => {
  const { data } = await client.post(`billing/plans/`, {
    "product_id": "PROD-2H0168269N151792A",
    "name": name,
    "description": description,
    "quantity_supported": true,
    "billing_cycles": [
      {
        "frequency": {
          "interval_unit": intervalUnit, // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
          "interval_count": intervalCount
        },
        "tenure_type": "REGULAR",
        "sequence": 1,
        "total_cycles": 0, // infinite [until cancelled]
        "pricing_scheme": {
          "fixed_price": {
            "value": "1",
            "currency_code": currency
          }
        }
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "value": "0",
        "currency_code": currency
      },
      "setup_fee_failure_action": "CONTINUE",
      "payment_failure_threshold": 0
    }
  })
  // console.log(data)
  return data
}

const showPlan = async (id) => {
  const { data } = await client.get(`billing/plans/${id}`)
  // console.log(data)
  return data
}

const deactivatePlan = async (id) => {
  const { data } = await client.post(`billing/plans/${id}/deactivate`)
  return data
}

const oldPlans = [
  'P-36H45967138134333L2EYDWI',
  'P-52T23091AV280332KL2EYDNA',
  'P-53V65927J7453921AL2EYDCA',
  'P-4RP35237P2872091XL2EYD7A',
  'P-706593662R139444HL2EYEII',
  'P-98R76062CP011270CL2K2DDQ',
  'P-1NA69093FU109733EL2K2DSI',
  'P-0V027413CA3925926L2K2DYQ',
  'P-8J418447YE4603003L2K2D5I',
  'P-4N366725NF3479213L2K2EDA',
  'P-0C412737L6895720AL2K2EJQ',
  'P-0EJ89532KS825774NL2K2ENQ',
  'P-67883046X3406591ML2K2EQY',
  'P-73B28517GT826974BL2K2EUY',
  'P-9291255963919054FL2K2E3I',
  'P-7T2467823K5922435L2K2FBY',
  'P-0YG376172T075015CL2K2FFY',
  'P-61846199JC389184SL2K2FJQ',
  'P-58398628BA388270DL2K2FNA',
  'P-86F69602H0101442WL2K2FSA',
  'P-5TK81494YX8941412L2K2FYI',
  'P-39V13516JW380591BL2K2F4I',
  'P-58N12866R9099515ML2K2F7Q',
  'P-8X363223HB439653TL2K2GDI',
  'P-1TB44025MM499341JL2K2GHI',
]

const currencies = [
  'USD',
  'CAD',
  'EUR',
  'GBP',
  'ILS',
]

const PLAN_INTERVALS = {
  DAILY: 1,
  WEEKLY: 2,
  MONTHLY: 3,
  QUARTELY: 4,
  YEARLY: 5,
}

const PLAN_NAMES = {
  "1": "Daily",
  "2": "Weekly",
  "3": "Monthly",
  "4": "Quarterly",
  "5": "Yearly"
}

const INTERVAL_UNITS = {
  '1': 'DAY',
  '2': 'WEEK',
  '3': 'MONTH',
  '4': 'MONTH',
  '5': 'YEAR',
}

const INTERVAL_COUNTS = {
  '1': 1, // 1 day
  '2': 1, // 1 week
  '3': 1, // 1 month
  '4': 3, // 3 months == quarterly
  '5': 1, // 1 year
}

const TOTAL_CYCLES = {
  '1': 365, // 1 day
  '2': 52, // 1 week
  '3': 12, // 1 month
  '4': 4, // 3 months == quarterly
  '5': 1, // 1 year
}


const deactivateOldPlans = async () => {
  oldPlans.forEach(async planId => {
    try {
      let plan = await showPlan(planId)
      if (plan.status == 'ACTIVE') {
        deactivatePlan(planId)
      }
      console.log(plan.status);
    } catch (error) {
      console.log(error);
    }
  })
}

const generateNewPlans = async () => {
  let newPlans = {}
  currencies.forEach(async currency => {
    newPlans[currency] = {}
    Object.keys(PLAN_INTERVALS).forEach(async interval => {
      let intervalNumber = PLAN_INTERVALS[interval]
      let planName = PLAN_NAMES[intervalNumber]
      let plan = await createPlan(
        planName,
        `${planName} donation`,
        INTERVAL_UNITS[intervalNumber], // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
        INTERVAL_COUNTS[intervalNumber],
        TOTAL_CYCLES[intervalNumber],
        currency
      )
      newPlans[currency][intervalNumber] = plan.id
      console.log(newPlans);
    })
  })
}

async function main() {
  // await deactivateOldPlans()
  // await generateNewPlans()
  let plan;
  let currency = 'ILS'
  plan = await createPlan(
    'Daily',
    `Daily donation`,
    'DAY', // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
    1,
    0,
    currency
  )
  console.log(plan.id);
  plan = await createPlan(
    'Weekly',
    `Weekly donation`,
    'WEEK', // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
    1,
    0,
    currency
  )
  console.log(plan.id);
  plan = await createPlan(
    'Monthly',
    `Monthly donation`,
    'MONTH', // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
    1,
    0,
    currency
  )
  console.log(plan.id);
  plan = await createPlan(
    'Quarterly',
    `Quarterly donation`,
    'MONTH', // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
    3,
    0,
    currency
  )
  console.log(plan.id);
  plan = await createPlan(
    'YEARLY',
    `YEARLY donation`,
    'YEAR', // options: ['DAY', 'WEEK', 'MONTH', 'YEAR']
    1,
    0,
    currency
  )
  console.log(plan.id);
}

main()
