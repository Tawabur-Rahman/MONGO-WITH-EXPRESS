const mongoose = require('mongoose');
let chatSchema = new mongoose.Schema({
    form: {
        type: String,
        require: true,
    },
    to: {
        type: String,
        require: true,
    },

    msg: {
        type: String,
        maxLength: 50,
    },
    time: Date,

})

const chat=mongoose.model("chat",chatSchema);
module.exports=chat;