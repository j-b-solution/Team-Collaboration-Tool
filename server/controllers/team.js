let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");


let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// define the User Model
let teamModel = require('../models/team');
let userModel = require('../models/user');
let Team = teamModel.Team;

/* ~~/api/team */
module.exports.displayTeamList = (req, res, next) => {
    teamModel.find((err, teamList) => {
        if(err) {
            return console.error(err);
        } else {
            res.json({success: true, msg: 'Team List Rendered Successfully', teamList: teamList})
        }
    })
}
/* ~~ /api/team/add */
module.exports.processAddTeam = (req, res, next) => {
    console.log(req.body)
    let newTeam = teamModel({
        "name": req.body.name,
        "description": req.body.description,
        "owner_id": req.body.user_id,
        "owner_username": req.body.username,
        "join_username":req.body.username
    })
    teamModel.create(newTeam, (err, team) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            return res.json({success: true, msg: 'Successfully Added New Team'});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    teamModel.findByIdAndRemove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.json({success: true, msg: 'Sucessfully Deleted TodoItem'});
        }
    });
}