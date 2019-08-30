
let express = require("express");
let passport = require("passport");
let router = express.Router();
let mongoose = require("mongoose");
let bodyparser = require("body-parser")

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';


let jwt = require("jsonwebtoken");

module.exports.chatHistory = async (req, res, next) => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db("test");
        let collection = db.collection('chatList');
        let query = { username: '' }
        let data = await collection.find({}).toArray();
        console.log(data)
        res.json(data)
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}