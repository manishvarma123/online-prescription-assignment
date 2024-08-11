const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api",router)

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
