const mongoose = require('mongoose');
const chat = require("./models/chat.js")
main().then((res) => {
    console.log("Success Bro");
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

let allChat = ([
    {
        form: "Tawabur1",
        to: "Shanto1",
        msg: "Hi ALL How Are You",
        time: new Date(),
    },

    {
        form: "Tawabur1",
        to: "Shanto1",
        msg: "Hi ALL How Are You",
        time: new Date(),
    },

    {
        form: "Tawabur1",
        to: "Shanto1",
        msg: "Hi ALL How Are You",
        time: new Date(),
    },
    {
        form: "Tawabur1",
        to: "Shanto1",
        msg: "Hi ALL How Are You",
        time: new Date(),
    },
    {
        form: "Tawabur1",
        to: "Shanto1",
        msg: "Hi ALL How Are You",
        time: new Date(),
    },
])
chat.insertMany(allChat)

