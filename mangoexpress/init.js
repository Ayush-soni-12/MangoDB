const mongoose =require("mongoose");
const chat = require("./modals/chat.js")
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } 
  main().then((res)=>{
      console.log("Connected to DB");
     }) 
     .catch(err => console.log(err));
  
  chat.insertMany([{
    from:"ayush",
    to:"rishi",
    message:"send me notes",
    created_at:new Date(),
  },
  {
    from:"aman",
    to:"ayush",
    message:"how are you",
    created_at:new Date(),
  },
  {
    from:"anshuman",
    to:"rishi",
    message:"I am fine",
    created_at:new Date(),
  },
]);
  