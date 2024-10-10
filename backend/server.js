const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key'; // In a real app, use a secure, environment-specific secret

// In-memory user storage (replace with a database in a real application)
let users = [];

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id }, SECRET_KEY, { expiresIn: '1h' });
  res.status(201).json({ token });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});