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
    "1": 'P-8BR65618NG362520JMEIGGNQ', // Daily -
    "2": 'P-2H566191W87222818MEIGH3I', // Weekly -
    "3": 'P-3P589682261985541MEIGH3Q', // Monthly -
    "4": 'P-2KY29368A1140344UMEIGH3Y', // Quarterly -
    "5": 'P-0P4851666L6007052MEIGH4A', // Yearly -
  },
  CAD: {
    "1": 'P-8AG04350H0178884HMEIGIOA', // Daily -
    "2": 'P-65N74712HP316324CMEIGIOI', // Weekly -
    "3": 'P-0BK66566HN996500MMEIGIOQ', // Monthly -
    "4": 'P-2AP10377G2887142SMEIGIOY', // Quarterly -
    "5": 'P-9AS64292LG4100541MEIGIOY', // Yearly -
  },
  EUR: {
    "1": 'P-9BJ36004PP102144EMEIGI5Q', // Daily -
    "2": 'P-57P25999ES357372YMEIGI5Y', // Weekly -
    "3": 'P-3VP281689W791054TMEIGI6A', // Monthly -
    "4": 'P-7HR89882FJ130491EMEIGI6I', // Quarterly -
    "5": 'P-8Y0221385V451093UMEIGI6Q', // Yearly -
  },
  GBP: {
    "1": 'P-3N564801P0507291YMEIGJGA', // Daily -
    "2": 'P-5WH83087LB5267412MEIGJGI', // Weekly -
    "3": 'P-5B473500E60838711MEIGJGQ', // Monthly -
    "4": 'P-2WH834806Y667964PMEIGJGY', // Quarterly -
    "5": 'P-9LU345526X8302208MEIGJGY', // Yearly -
  },
  ILS: {
    "1": 'P-1DY065845X561360DMEIGJRA', // Daily -
    "2": 'P-8A7743085A115782VMEIGJRI', // Weekly -
    "3": 'P-1BN99737B4503522BMEIGJRQ', // Monthly -
    "4": 'P-1WX09920P7997632BMEIGJRY', // Quarterly -
    "5": 'P-3ET32577AH6305036MEIGJSA', // Yearly -
  },
}

export const STATES = {
  IDLE: 0,
  PROCESSING: 1,
  SUCCESS: 2,
  ERROR: 3
}
