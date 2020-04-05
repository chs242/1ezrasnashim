export const PAYMENT_METHODS = {
  CC: 0,
  PAYPAL: 1,
  CHEQUE: 2
}

export const PLANS = {
  ONCE: 0,
  DAILY: 1,
  WEEKLY: 2,
  MONTHLY: 3,
  QUARTELY: 4,
  YEARLY: 5,
}

export const PLAN_NAMES = {
  "1": "Daily",
  "2": "Weekly",
  "3": "Monthly",
  "4": "Quarterly",
  "5": "Yearly"
}

// product ID: `PROD-2H0168269N151792A`
// live Donation Plan IDs
export const PAYPAL_PLANS_IDS = {
  "1": 'P-36H45967138134333L2EYDWI', // Daily -
  "2": 'P-52T23091AV280332KL2EYDNA', // Weekly -
  "3": 'P-53V65927J7453921AL2EYDCA', // Monthly -
  "4": 'P-4RP35237P2872091XL2EYD7A', // Quarterly -
  "5": 'P-706593662R139444HL2EYEII', // Yearly -
}

export const STATES = {
  IDLE: 0,
  PROCESSING: 1,
  SUCCESS: 2,
  ERROR: 3
}
