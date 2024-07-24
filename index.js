require("dotenv").config();
const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT;
const user = require('./routes/user');
const product = require('./routes/product');
const trade = require('./routes/trade');
const sales = require('./routes/sales');
const purchase = require('./routes/purchase')
const connectDB = require('./config/connection');
const tokenConfig = require('./config/verifyToken.js');
//Connection Invoke
connectDB();

//Middleware Setup and PlugIns
app.use(cors());
app.use(express.json());
app.use('/user', user);
app.use('/product', tokenConfig.verifyToken, product);
app.use('/trade', tokenConfig.verifyToken, trade);
app.use('/sales', tokenConfig.verifyToken, sales);
app.use('/purchase', tokenConfig.verifyToken, purchase);
// app.use('/asset', tokenConfig.verifyToken, asset);
// app.use('/platform', tokenConfig.verifyToken, platform);
// app.use('/allotment', tokenConfig.verifyToken, allotment);

//Test API
app.get('/', (req, res) => {
    res.json({ response: `APIs Developed By Author -  ${process.env.AUTHOR}`});
    
});
// Protected route example
// app.get('/protected', tokenConfig.verifyToken, (req, res) => {
//     res.status(200).json({ message: 'Protected route accessed successfully', user: req.user });
//   });
//Port Listen
app.listen(port, () => {
    console.log(`App is Running at port ${port}`);
});