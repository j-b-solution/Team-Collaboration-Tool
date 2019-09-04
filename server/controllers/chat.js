
let express = require("express");
let passport = require("passport");
let router = express.Router();
let mongoose = require("mongoose");
let bodyparser = require("body-parser")

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let chatModel = require('../models/chat');

let jwt = require("jsonwebtoken");

module.exports.chatHistory = async (req, res, next) => {
    let id = req.params.id;

    chatModel.find({team_id: id}).sort({created: 1}).exec((err, chatList) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            if(chatList == null) {
                res.json({success:true, msg: 'Successfully Rendered Chat List', chatList: []})
            }
            res.json({success:true, msg: 'Successfully Rendered Chat List', chatList: chatList})
        }
    });
    // console.log(id)
    // const client = await MongoClient.connect(url, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // })
    //     .catch(err => { console.log(err); });
    // if (!client) {
    //     return;
    // }
    // try {
    //     const db = client.db("test");
    //     let collection = db.collection('chatList');
    //     let query = { "team_id": id }
    //     let data = await collection.find(query).toArray();
    //     console.log(data)
    //     res.json(data)
    // } catch (err) {
    //     console.log(err);
    // } finally {
    //     client.close();
    // }
}