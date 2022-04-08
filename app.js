const express = require('express');
const mongoose = require('mongoose');

// Using a local MongoDB database
// const url = 'mongodb://localhost/FoodDB';

// Using MongoDB Atlas Cloud Database
const url =
  'mongodb+srv://Anubhav123:Anubhav123@cluster0.sdhjc.mongodb.net/FoodDB?retryWrites=true&w=majority';

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());

const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  res.status(200).send('Home route loaded successfully!');
});

const mealsRouter = require('./routes/meals');
app.use('/meals', mealsRouter);

const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

app.listen(port, () => {
  console.log(`Backend server started at port ${port}`);
});
