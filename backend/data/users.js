import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    address: 'street 6 Bilal town',
    city: 'Abbottabad',
    postalCode: 22010,
  },
  {
    name: 'Ali Hamza',
    email: 'ali@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    address: 'street 6 Bilal town',
    city: 'Abbottabad',
    postalCode: 22010,
  },
  {
    name: 'Hamza Ali',
    email: 'hamza@example.com',
    password: bcrypt.hashSync('123456', 10),
    address: 'street 6 Bilal town',
    city: 'Abbottabad',
    postalCode: 22010,
  },
]

export default users
