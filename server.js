const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT)

const app = express();

//make request to github for data
async function getRepose(req, res, next){
    try{
        console.log('getting data from github')
    } catch (err) {
        console.error(err);
        res.status(500)
    }
}

app.get('/repos/:username' getRepose)

app.listen(PORT, ()=> console.log( `server listening on ${PORT}`))