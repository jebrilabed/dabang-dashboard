// Today's Stats
export const todayStats = [
  {
    id: 1,
    label: 'Total Sales',
    value: '$1k',
    change: '+8% from yesterday',
    positive: true,
    color: 'bg-pink-50',
    iconBg: 'bg-pink-400',
    icon: 'dollar',
  },
  {
    id: 2,
    label: 'Total Order',
    value: '300',
    change: '+5% from yesterday',
    positive: true,
    color: 'bg-orange-50',
    iconBg: 'bg-orange-400',
    icon: 'cart',
  },
  {
    id: 3,
    label: 'Product Sold',
    value: '5',
    change: '+1.2% from yesterday',
    positive: true,
    color: 'bg-green-50',
    iconBg: 'bg-green-400',
    icon: 'check',
  },
  {
    id: 4,
    label: 'New Customers',
    value: '8',
    change: '0.5% from yesterday',
    positive: false,
    color: 'bg-purple-50',
    iconBg: 'bg-purple-400',
    icon: 'users',
  },
]

// Revenue Chart
export const revenueData = [
  { day: 'Monday', online: 12000, offline: 8000 },
  { day: 'Tuesday', online: 15000, offline: 10000 },
  { day: 'Wednesday', online: 9000, offline: 18000 },
  { day: 'Thursday', online: 13000, offline: 7000 },
  { day: 'Friday', online: 8000, offline: 12000 },
  { day: 'Saturday', online: 14000, offline: 9000 },
  { day: 'Sunday', online: 17000, offline: 11000 },
]

// Visitor Insights
export const visitorData = [
  { month: 'Jan', loyal: 200, new: 320, unique: 150 },
  { month: 'Feb', loyal: 280, new: 250, unique: 200 },
  { month: 'Mar', loyal: 180, new: 300, unique: 280 },
  { month: 'Apr', loyal: 320, new: 200, unique: 220 },
  { month: 'May', loyal: 250, new: 280, unique: 180 },
  { month: 'Jun', loyal: 300, new: 350, unique: 260 },
  { month: 'Jul', loyal: 220, new: 300, unique: 300 },
  { month: 'Aug', loyal: 280, new: 250, unique: 240 },
  { month: 'Sept', loyal: 350, new: 400, unique: 200 },
  { month: 'Oct', loyal: 280, new: 320, unique: 280 },
  { month: 'Nov', loyal: 200, new: 280, unique: 220 },
  { month: 'Dec', loyal: 260, new: 200, unique: 300 },
]

// Customer Satisfaction
export const satisfactionData = [
  { month: 'Jan', lastMonth: 3200, thisMonth: 2800 },
  { month: 'Feb', lastMonth: 3000, thisMonth: 3200 },
  { month: 'Mar', lastMonth: 2800, thisMonth: 3000 },
  { month: 'Apr', lastMonth: 3100, thisMonth: 2900 },
  { month: 'May', lastMonth: 2900, thisMonth: 3500 },
  { month: 'Jun', lastMonth: 3004, thisMonth: 4504 },
]

// Target vs Reality
export const targetData = [
  { month: 'Jan', reality: 6000, target: 7000 },
  { month: 'Feb', reality: 7500, target: 8000 },
  { month: 'Mar', reality: 8823, target: 12122 },
  { month: 'Apr', reality: 7000, target: 10000 },
  { month: 'May', reality: 8000, target: 11000 },
  { month: 'June', reality: 7500, target: 12122 },
  { month: 'July', reality: 9000, target: 11500 },
]

// Top Products
export const topProducts = [
  { id: '01', name: 'Home Decor Range', popularity: 45, sales: 45, color: '#0984E3' },
  { id: '02', name: 'Disney Princess Pink Bag 18', popularity: 29, sales: 29, color: '#00B894' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, sales: 18, color: '#6C5CE7' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, sales: 25, color: '#FDCB6E' },
]

// Volume vs Service Level
export const volumeData = [
  { name: 'A', volume: 4200, service: 2800 },
  { name: 'B', volume: 3800, service: 2200 },
  { name: 'C', volume: 5000, service: 1800 },
  { name: 'D', volume: 3200, service: 2400 },
  { name: 'E', volume: 2800, service: 1600 },
  { name: 'F', volume: 4600, service: 3200 },
]

// ─── LEADERBOARD ────────────────────────────────────────────────────────────
export const leaderboardData = [
  { rank: 1,  name: 'Sophia Carter',   avatar: 'SC', sales: 142300, orders: 984,  rating: 4.9, growth: '+18%', badge: 'gold',   region: 'North America' },
  { rank: 2,  name: 'Liam Rodriguez',  avatar: 'LR', sales: 128750, orders: 871,  rating: 4.8, growth: '+14%', badge: 'silver', region: 'Europe'        },
  { rank: 3,  name: 'Aisha Nkemelu',   avatar: 'AN', sales: 115200, orders: 763,  rating: 4.8, growth: '+21%', badge: 'bronze', region: 'Africa'         },
  { rank: 4,  name: 'James Park',      avatar: 'JP', sales: 98400,  orders: 692,  rating: 4.7, growth: '+9%',  badge: null,     region: 'Asia Pacific'   },
  { rank: 5,  name: 'Emma Wilson',     avatar: 'EW', sales: 87600,  orders: 601,  rating: 4.6, growth: '+11%', badge: null,     region: 'North America'  },
  { rank: 6,  name: 'Carlos Mendes',   avatar: 'CM', sales: 76900,  orders: 543,  rating: 4.5, growth: '+7%',  badge: null,     region: 'South America'  },
  { rank: 7,  name: 'Yuki Tanaka',     avatar: 'YT', sales: 65400,  orders: 478,  rating: 4.5, growth: '+13%', badge: null,     region: 'Asia Pacific'   },
  { rank: 8,  name: 'Fatima Al-Hassan',avatar: 'FA', sales: 54300,  orders: 402,  rating: 4.4, growth: '+6%',  badge: null,     region: 'Middle East'    },
  { rank: 9,  name: 'Noah Bennett',    avatar: 'NB', sales: 43100,  orders: 318,  rating: 4.3, growth: '+4%',  badge: null,     region: 'Europe'         },
  { rank: 10, name: 'Priya Sharma',    avatar: 'PS', sales: 38700,  orders: 274,  rating: 4.2, growth: '+8%',  badge: null,     region: 'Asia Pacific'   },
]

export const leaderboardWeeklyData = [
  { week: 'W1', sophia: 32000, liam: 28000, aisha: 24000 },
  { week: 'W2', sophia: 35000, liam: 31000, aisha: 29000 },
  { week: 'W3', sophia: 38000, liam: 33000, aisha: 31000 },
  { week: 'W4', sophia: 37300, liam: 36750, aisha: 31200 },
]

// ─── ORDERS ─────────────────────────────────────────────────────────────────
export const ordersData = [
  { id: '#ORD-8821', customer: 'Sophia Carter',    product: 'Home Decor Range',          date: '2026-04-04', amount: 320.00, status: 'Delivered',  payment: 'Credit Card' },
  { id: '#ORD-8820', customer: 'Liam Rodriguez',   product: 'Apple Smartwatch Series 9', date: '2026-04-04', amount: 499.99, status: 'Processing', payment: 'PayPal'      },
  { id: '#ORD-8819', customer: 'Aisha Nkemelu',    product: 'Bathroom Essentials Kit',   date: '2026-04-03', amount: 89.50,  status: 'Shipped',    payment: 'Debit Card'  },
  { id: '#ORD-8818', customer: 'James Park',        product: 'Disney Princess Pink Bag',  date: '2026-04-03', amount: 54.00,  status: 'Delivered',  payment: 'Credit Card' },
  { id: '#ORD-8817', customer: 'Emma Wilson',       product: 'Wireless Noise Cancelling', date: '2026-04-02', amount: 199.00, status: 'Cancelled',  payment: 'PayPal'      },
  { id: '#ORD-8816', customer: 'Carlos Mendes',     product: 'Yoga Mat Premium',          date: '2026-04-02', amount: 75.00,  status: 'Delivered',  payment: 'Credit Card' },
  { id: '#ORD-8815', customer: 'Yuki Tanaka',       product: 'Smart LED Strip Lights',    date: '2026-04-01', amount: 42.99,  status: 'Shipped',    payment: 'Debit Card'  },
  { id: '#ORD-8814', customer: 'Fatima Al-Hassan',  product: 'Ceramic Plant Pots Set',    date: '2026-04-01', amount: 110.00, status: 'Processing', payment: 'Credit Card' },
  { id: '#ORD-8813', customer: 'Noah Bennett',      product: 'Stainless Steel Cookware',  date: '2026-03-31', amount: 230.00, status: 'Delivered',  payment: 'Bank Transfer'},
  { id: '#ORD-8812', customer: 'Priya Sharma',      product: 'Organic Skincare Bundle',   date: '2026-03-31', amount: 160.00, status: 'Refunded',   payment: 'PayPal'      },
  { id: '#ORD-8811', customer: 'David Chen',        product: 'Electric Coffee Grinder',   date: '2026-03-30', amount: 88.00,  status: 'Delivered',  payment: 'Credit Card' },
  { id: '#ORD-8810', customer: 'Maria Santos',      product: 'Bamboo Cutting Board Set',  date: '2026-03-30', amount: 45.00,  status: 'Shipped',    payment: 'Debit Card'  },
]

export const orderStatusSummary = [
  { status: 'Delivered',  count: 5, color: '#00B894' },
  { status: 'Shipped',    count: 3, color: '#0984E3' },
  { status: 'Processing', count: 2, color: '#FDCB6E' },
  { status: 'Cancelled',  count: 1, color: '#FD79A8' },
  { status: 'Refunded',   count: 1, color: '#A29BFE' },
]

// ─── PRODUCTS ────────────────────────────────────────────────────────────────
export const productsData = [
  { id: 'P001', name: 'Home Decor Range',           category: 'Home',        price: 120.00, stock: 84,  sold: 312, rating: 4.7, status: 'In Stock',    image: '🏠' },
  { id: 'P002', name: 'Disney Princess Pink Bag 18',category: 'Kids',        price: 54.00,  stock: 23,  sold: 201, rating: 4.5, status: 'Low Stock',   image: '👜' },
  { id: 'P003', name: 'Bathroom Essentials Kit',    category: 'Bath',        price: 89.50,  stock: 140, sold: 178, rating: 4.6, status: 'In Stock',    image: '🛁' },
  { id: 'P004', name: 'Apple Smartwatch Series 9',  category: 'Electronics', price: 499.99, stock: 12,  sold: 95,  rating: 4.9, status: 'Low Stock',   image: '⌚' },
  { id: 'P005', name: 'Wireless Noise Cancelling',  category: 'Electronics', price: 199.00, stock: 56,  sold: 134, rating: 4.4, status: 'In Stock',    image: '🎧' },
  { id: 'P006', name: 'Yoga Mat Premium',           category: 'Sports',      price: 75.00,  stock: 0,   sold: 267, rating: 4.8, status: 'Out of Stock',image: '🧘' },
  { id: 'P007', name: 'Smart LED Strip Lights',     category: 'Home',        price: 42.99,  stock: 200, sold: 445, rating: 4.3, status: 'In Stock',    image: '💡' },
  { id: 'P008', name: 'Ceramic Plant Pots Set',     category: 'Garden',      price: 110.00, stock: 67,  sold: 88,  rating: 4.6, status: 'In Stock',    image: '🪴' },
  { id: 'P009', name: 'Stainless Steel Cookware',   category: 'Kitchen',     price: 230.00, stock: 31,  sold: 72,  rating: 4.7, status: 'In Stock',    image: '🍳' },
  { id: 'P010', name: 'Organic Skincare Bundle',    category: 'Beauty',      price: 160.00, stock: 5,   sold: 190, rating: 4.5, status: 'Low Stock',   image: '🧴' },
]

export const productCategoryData = [
  { name: 'Electronics', value: 229 },
  { name: 'Home',        value: 757 },
  { name: 'Kids',        value: 201 },
  { name: 'Sports',      value: 267 },
  { name: 'Beauty',      value: 190 },
  { name: 'Kitchen',     value: 72  },
  { name: 'Bath',        value: 178 },
  { name: 'Garden',      value: 88  },
]

// ─── SALES REPORT ────────────────────────────────────────────────────────────
export const monthlySalesData = [
  { month: 'Jan', revenue: 42000, expenses: 28000, profit: 14000 },
  { month: 'Feb', revenue: 51000, expenses: 31000, profit: 20000 },
  { month: 'Mar', revenue: 47000, expenses: 29500, profit: 17500 },
  { month: 'Apr', revenue: 63000, expenses: 34000, profit: 29000 },
  { month: 'May', revenue: 58000, expenses: 32000, profit: 26000 },
  { month: 'Jun', revenue: 72000, expenses: 38000, profit: 34000 },
  { month: 'Jul', revenue: 68000, expenses: 36000, profit: 32000 },
  { month: 'Aug', revenue: 75000, expenses: 40000, profit: 35000 },
  { month: 'Sep', revenue: 82000, expenses: 43000, profit: 39000 },
  { month: 'Oct', revenue: 79000, expenses: 41000, profit: 38000 },
  { month: 'Nov', revenue: 91000, expenses: 47000, profit: 44000 },
  { month: 'Dec', revenue: 105000,expenses: 52000, profit: 53000 },
]

export const salesChannelData = [
  { name: 'Online Store', value: 45, color: '#6C5CE7' },
  { name: 'Retail',       value: 28, color: '#00B894' },
  { name: 'Wholesale',    value: 18, color: '#FDCB6E' },
  { name: 'Affiliate',    value: 9,  color: '#FD79A8' },
]

export const topRegions = [
  { region: 'North America', revenue: 312000, share: 38 },
  { region: 'Europe',        revenue: 228000, share: 28 },
  { region: 'Asia Pacific',  revenue: 180000, share: 22 },
  { region: 'Middle East',   revenue: 65000,  share: 8  },
  { region: 'Africa',        revenue: 33000,  share: 4  },
]

// ─── MESSAGES ────────────────────────────────────────────────────────────────
export const messagesData = [
  {
    id: 1, name: 'Sophia Carter',  avatar: 'SC', avatarColor: 'bg-purple-400',
    preview: 'Hey! I just placed a new order and wanted to confirm...',
    time: '2m ago', unread: 3, online: true,
    messages: [
      { from: 'them', text: 'Hey! I just placed a new order and wanted to confirm the delivery date.', time: '10:42 AM' },
      { from: 'them', text: 'Order #ORD-8821 — can it arrive before the weekend?', time: '10:43 AM' },
      { from: 'me',   text: 'Hi Sophia! Yes, your order is scheduled to arrive by Friday.', time: '10:45 AM' },
      { from: 'them', text: 'Amazing, thank you so much! 🙌', time: '10:46 AM' },
    ],
  },
  {
    id: 2, name: 'Liam Rodriguez', avatar: 'LR', avatarColor: 'bg-blue-400',
    preview: 'Can I get an invoice for my last three orders?',
    time: '18m ago', unread: 1, online: true,
    messages: [
      { from: 'them', text: 'Hi there, can I get an invoice for my last three orders?', time: '10:22 AM' },
      { from: 'me',   text: 'Of course! I\'ll send those over to your registered email shortly.', time: '10:30 AM' },
    ],
  },
  {
    id: 3, name: 'Aisha Nkemelu',  avatar: 'AN', avatarColor: 'bg-green-400',
    preview: 'The bathroom essentials I ordered were perfect!',
    time: '1h ago', unread: 0, online: false,
    messages: [
      { from: 'them', text: 'The bathroom essentials I ordered were perfect! Will definitely reorder.', time: '9:15 AM' },
      { from: 'me',   text: 'So glad to hear that Aisha! We\'ll have a restock notification ready for you.', time: '9:20 AM' },
      { from: 'them', text: 'Great, looking forward to it 😊', time: '9:21 AM' },
    ],
  },
  {
    id: 4, name: 'James Park',     avatar: 'JP', avatarColor: 'bg-orange-400',
    preview: 'Is the Apple Smartwatch back in stock soon?',
    time: '3h ago', unread: 0, online: false,
    messages: [
      { from: 'them', text: 'Is the Apple Smartwatch back in stock soon? I\'ve been waiting.', time: '7:05 AM' },
      { from: 'me',   text: 'We expect a restock within 5–7 business days. I\'ll notify you!', time: '7:30 AM' },
    ],
  },
  {
    id: 5, name: 'Emma Wilson',    avatar: 'EW', avatarColor: 'bg-pink-400',
    preview: 'I\'d like to return order #ORD-8817 please.',
    time: 'Yesterday', unread: 0, online: false,
    messages: [
      { from: 'them', text: 'I\'d like to return order #ORD-8817 please. The headphones didn\'t fit well.', time: 'Yesterday' },
      { from: 'me',   text: 'No problem Emma! I\'ve initiated the return. You\'ll get a refund in 3–5 days.', time: 'Yesterday' },
      { from: 'them', text: 'Thank you for making this so easy!', time: 'Yesterday' },
    ],
  },
]

// Nav links
export const navLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: 'layout' },
  { id: 'leaderboard', label: 'Leaderboard', icon: 'bar-chart' },
  { id: 'order', label: 'Order', icon: 'shopping-cart' },
  { id: 'products', label: 'Products', icon: 'shopping-bag' },
  { id: 'sales-report', label: 'Sales Report', icon: 'trending-up' },
  { id: 'messages', label: 'Messages', icon: 'message-square' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'sign-out', label: 'Sign Out', icon: 'log-out' },
]
