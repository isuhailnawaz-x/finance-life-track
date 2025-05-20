
export const mockTransactions = [
  {
    id: '1',
    description: 'Grocery Shopping',
    amount: 85.45,
    type: 'expense',
    category: 'Food & Dining',
    account: 'Main Checking',
    date: 'May 18, 2025',
    notes: 'Weekly grocery run'
  },
  {
    id: '2',
    description: 'Netflix Subscription',
    amount: 15.99,
    type: 'expense',
    category: 'Entertainment',
    account: 'Credit Card',
    date: 'May 15, 2025',
    notes: 'Monthly subscription'
  },
  {
    id: '3',
    description: 'Salary Deposit',
    amount: 3200.00,
    type: 'income',
    category: 'Salary & Wages',
    account: 'Main Checking',
    date: 'May 15, 2025',
    notes: 'Monthly salary'
  },
  {
    id: '4',
    description: 'Gas Station',
    amount: 45.75,
    type: 'expense',
    category: 'Transportation',
    account: 'Credit Card',
    date: 'May 14, 2025',
    notes: ''
  },
  {
    id: '5',
    description: 'Freelance Payment',
    amount: 650.00,
    type: 'income',
    category: 'Freelance Income',
    account: 'Main Checking',
    date: 'May 12, 2025',
    notes: 'Website design project'
  },
  {
    id: '6',
    description: 'Restaurant Dinner',
    amount: 78.50,
    type: 'expense',
    category: 'Food & Dining',
    account: 'Credit Card',
    date: 'May 11, 2025',
    notes: 'Dinner with friends'
  },
  {
    id: '7',
    description: 'Electric Bill',
    amount: 124.35,
    type: 'expense',
    category: 'Bills & Utilities',
    account: 'Main Checking',
    date: 'May 10, 2025',
    notes: 'Monthly electricity bill'
  }
];

export const mockBalanceData = [
  { month: 'Jan', balance: 9800 },
  { month: 'Feb', balance: 10100 },
  { month: 'Mar', balance: 10500 },
  { month: 'Apr', balance: 11200 },
  { month: 'May', balance: 12580 },
  { month: 'Jun', balance: 13100 }
];

export const mockSpendingData = [
  { name: 'Food', value: 560, color: '#3b82f6' },
  { name: 'Housing', value: 1200, color: '#10b981' },
  { name: 'Transport', value: 340, color: '#f59e0b' },
  { name: 'Utilities', value: 280, color: '#8b5cf6' },
  { name: 'Entertainment', value: 240, color: '#ef4444' },
  { name: 'Others', value: 320, color: '#64748b' }
];

export const mockCategorySummary = [
  { category: 'Food & Dining', amount: 560, percent: 19 },
  { category: 'Housing', amount: 1200, percent: 40 },
  { category: 'Transportation', amount: 340, percent: 11 },
  { category: 'Bills & Utilities', amount: 280, percent: 9 },
  { category: 'Entertainment', amount: 240, percent: 8 },
  { category: 'Other', amount: 320, percent: 13 }
];

export const mockMonthlyComparison = [
  { 
    month: 'Jan',
    income: 3800,
    expenses: 3200
  },
  { 
    month: 'Feb',
    income: 3850,
    expenses: 3300
  },
  { 
    month: 'Mar',
    income: 3900,
    expenses: 3250
  },
  { 
    month: 'Apr',
    income: 4100,
    expenses: 3450
  },
  { 
    month: 'May',
    income: 4300,
    expenses: 3500
  },
];
