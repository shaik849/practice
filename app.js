const express = require('express');
const mongoose = require('mongoose');

const env = require('dotenv').config();

const app = express();

const routes = require('./Router/practiceRouter')
app.use("",routes)

const url = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.l162asa.mongodb.net/practice`
async function main(){
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>{console.log("connected.....")})
}

main().catch(err => console.log(err))

app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));