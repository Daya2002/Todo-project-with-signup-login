const express = require('express');
const app = express();
const dbconnect = require('./config/db.js');
dbconnect();
const router = require('./routes/userRoute.js');
const todoRoutes= require('./routes/todos')
const cors = require('cors')




require('dotenv').config();
PORT = process.env.PORT || 4888

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);
app.use('/api/v1', todoRoutes);

app.get('/', (req, res)=> {
    res.send('hii darling')
});




app.listen(PORT, ()=> {
    console.log(`lestining on port ${PORT}`)
})

