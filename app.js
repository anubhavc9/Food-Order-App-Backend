const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');

// Using a local MongoDB database
// const url = 'mongodb://localhost/FoodDB';

// Using MongoDB Atlas Cloud Database
const url =
  'mongodb+srv://Anubhav123:Anubhav123@cluster0.sdhjc.mongodb.net/FoodDB?retryWrites=true&w=majority';

const app = express();
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

const mealsRouter = require('./routes/meals');
app.use('/meals', mealsRouter);

const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

app.listen(9000, () => {
  console.log('Server started at port 9000');
});
