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
            owner: {
                type:Schema.Types.ObjectId,
                ref: 'User'
            },
            created: {
                type: Date,
                default: Date.now
            }
        },{
            collection: "teamList"
        });
    
    module.exports = mongoose.model('team', teamSchema);