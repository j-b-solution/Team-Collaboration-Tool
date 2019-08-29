
let express = require("express");
let passport = require("passport");
let router = express.Router();
let mongoose = require("mongoose");

var mongo = require('mongodb'),
    Server = mongo.Server,
    DB = mongo.Db;
var server = new Server('localhost', 27017,{
    auto_reconnect: true
});
var db = DB('test', server)

let jwt = require("jsonwebtoken");
// let DB = require("../config/db");

// define the Chat Model
const chatModel = require("./../models/chat");
let chatList = chatModel.chatList;

module.exports.chatHistory = (req, res, next) => {
    console.log("이씨발왜안돼")
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    DB.open(db => {
        db.collection('chatList', chatList => {
            chatList.find({})
            .then(res => {
                res.json(res);
            })
        })
    })


    // DB.then(db => {
    //     data = chatList.find({});
    //     chatList.find({}).then(res => {
    //         res.json(res);
    //         res.render;
    //     });
    // });
}