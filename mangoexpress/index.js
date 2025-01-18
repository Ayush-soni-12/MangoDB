const express =require("express");
const app = express();
 const mongoose =require("mongoose");
 const path = require("path");
 const chat =require("./modals/chat.js");
 app.set("views",path.join(__dirname,"views"));
 app.set("view engine","ejs");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
 // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} 
main().then((res)=>{
    console.log("Connected to DB");
   }) 
   .catch(err => console.log(err));

// let chat1 = new chat({
//   from:"ayush",
//   to:"ayushi",
//   message:"send me money",
//   created_at:new Date(),
// });

// chat1.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// ..........................................Index Route............................................
 
app.get("/chats",async(req,res)=>{
  let chats= await chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
})




app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(8080,()=>{
    console.log("server is listenend on port 8080");
});
