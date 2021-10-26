const express = require('express');
const cors = require('cors');
require('dotenv').config();
const rateLimit = require('express-rate-limit')

const PORT = process.env.PORT || 4000;

const app = express();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Mins
  max: 500,
})

app.use(limiter);
app.set('trust proxy' , 1)


app.use(cors());

app.use(express.static('public'));

// Routes
app.use('/api', require('./routes'))

app.listen(PORT,() => console.log(`Server running on PORT ${PORT}`))