let mongoose = require('mongoose');

let teamSchema = mongoose.Schema({
            name:{
                type: String,
                default: "",
                trim: true,
                require: "name is required"
            },
            description:{
                type: String,
                default: ""
            },
            owner_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            owner_username: {
                type: String,
                default: ""
            },
            created: {
                type: Date,
                default: Date.now
            }
        },{
            collection: "teamList"
        });
    
    module.exports = mongoose.model('Team', teamSchema);