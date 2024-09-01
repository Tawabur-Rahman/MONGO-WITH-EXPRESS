const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose = require('mongoose');
const chat=require("./models/chat.js")
const methodOverride = require('method-override')

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

main().then((res)=>{
console.log("Success Bro");
})
.catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//Show All Info

app.get("/chats",async(req,res)=>{
let chats=await chat.find();
res.render("home.ejs",{chats})
})
//Create
app.get("/chats/new",(req,res)=>{
res.render("new.ejs");
})
app.post("/chats",(req,res)=>{
let {form,to,msg}=req.body;
let newChat=new chat({
form:form,
to:to,
msg:msg,
time:new Date(),
});
newChat.save().then((res)=>{console.log("Working")}).catch((err)=>{console.log(err)});
res.redirect("/chats")
})
//View and Edit
app.get("/chats/:id/view",async(req,res)=>{
let {id}=req.params;
let newC=await chat.findById(id);
res.render("view.ejs",{newC})
})
app.put("/chats/:id",async(req,res)=>{
let {id}=req.params;
let {msg:newMsg}=req.body;
let newC=await chat.findByIdAndUpdate(id,{msg:newMsg});
res.redirect("/chats")
})
//Delet
app.delete("/chats/:id",async(req,res)=>{
let {id}=req.params;
let delet= await chat.findByIdAndDelete(id);
res.redirect("/chats")
})




app.listen(port,()=>{
console.log("App is working");
})