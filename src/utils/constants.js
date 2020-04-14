export const PAYMENT_METHODS = {
  CC: 0,
  PAYPAL: 1,
  CHEQUE: 2
}

export const CURRENCIES = {
  USD: 0,
  CAD: 1,
  EUR: 2,
  GBP: 3,
  ILS: 4,
}

export const CURRENCY_SYMBOLS = [
  '$',
  '$',
  '€',
  '£',
  '₪',
]

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
  USD: {
    "1": 'P-36H45967138134333L2EYDWI', // Daily -
    "2": 'P-52T23091AV280332KL2EYDNA', // Weekly -
    "3": 'P-53V65927J7453921AL2EYDCA', // Monthly -
    "4": 'P-4RP35237P2872091XL2EYD7A', // Quarterly -
    "5": 'P-706593662R139444HL2EYEII', // Yearly -
  },
  CAD: {
    "1": 'P-98R76062CP011270CL2K2DDQ', // Daily -
    "2": 'P-1NA69093FU109733EL2K2DSI', // Weekly -
    "3": 'P-0V027413CA3925926L2K2DYQ', // Monthly -
    "4": 'P-8J418447YE4603003L2K2D5I', // Quarterly -
    "5": 'P-4N366725NF3479213L2K2EDA', // Yearly -
  },
  EUR: {
    "1": 'P-0C412737L6895720AL2K2EJQ', // Daily -
    "2": 'P-0EJ89532KS825774NL2K2ENQ', // Weekly -
    "3": 'P-67883046X3406591ML2K2EQY', // Monthly -
    "4": 'P-73B28517GT826974BL2K2EUY', // Quarterly -
    "5": 'P-9291255963919054FL2K2E3I', // Yearly -
  },
  GBP: {
    "1": 'P-7T2467823K5922435L2K2FBY', // Daily -
    "2": 'P-0YG376172T075015CL2K2FFY', // Weekly -
    "3": 'P-61846199JC389184SL2K2FJQ', // Monthly -
    "4": 'P-58398628BA388270DL2K2FNA', // Quarterly -
    "5": 'P-86F69602H0101442WL2K2FSA', // Yearly -
  },
  ILS: {
    "1": 'P-5TK81494YX8941412L2K2FYI', // Daily -
    "2": 'P-39V13516JW380591BL2K2F4I', // Weekly -
    "3": 'P-58N12866R9099515ML2K2F7Q', // Monthly -
    "4": 'P-8X363223HB439653TL2K2GDI', // Quarterly -
    "5": 'P-1TB44025MM499341JL2K2GHI', // Yearly -
  },
}

export const STATES = {
  IDLE: 0,
  PROCESSING: 1,
  SUCCESS: 2,
  ERROR: 3
}
