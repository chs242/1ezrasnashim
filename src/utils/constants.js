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

export const PAYPAL_PLANS_IDS = {
  "1": 'P-5DJ44986HR623584NLZZBBJA', // Daily
  "2": 'P-10B37731DE340853VLZZBDLQ', // Weekly
  "3": 'P-6M918566SU160641XLZYPNEA', // Monthly
  "4": 'P-2RW97415DN003550GLZZBDZI', // Quarterly
  "5": 'P-8FR893511U324742ULZZBEBY', // Yearly
}

export const STATES = {
  IDLE: 0,
  PROCESSING: 1,
  SUCCESS: 2,
  ERROR: 3
}
