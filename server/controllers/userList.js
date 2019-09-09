
let express = require("express");
let passport = require("passport");
let router = express.Router();
let mongoose = require("mongoose");
let bodyparser = require("body-parser")

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let userListModel = require('../models/team');
let Team = userListModel.Team;


let jwt = require("jsonwebtoken");

module.exports.ownUser = async (req, res, next) => {
    let id = req.params.id;

    userListModel.find({ _id: id }).exec((err, userList) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            if (userList == null) {
                res.json({ success: true, msg: 'Successfully Rendered User List', userList: [] })
            }
            res.json({ success: true, msg: 'Successfully Rendered User List', userList: userList })
        }
    });

}

module.exports.currenUserList = async(req, res, next) =>{
    let updateTeam = userListModel({
        "join_username": req.body.username
    })
    console.log(req.body.username)
    // userListModel.insertOne(updateTeam, (err, team)=>{
    //     if(err){
    //         console.log(err);
    //         res.end(err);
    //     } else {
    //         console.log(team)
    //         return res.json({success: true, msg: 'Successfully Update team model'})
    //     }
    // })
}
