const express =require("express");
const app = express();
 const mongoose =require("mongoose");
 const path = require("path");
 const chat =require("./modals/chat.js");
 app.use(express.static(path.join(__dirname, 'public')));
 app.set("views",path.join(__dirname,"views"));
 app.set("view engine","ejs");
 app.use(express.urlencoded({ extended: true }));
 const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// ...existing code...

// .............................Update route ...........................

// app.get("/chats/:id/edit", async (req, res) => {
//   try {
//     let { id } = req.params;
//     let chat = await Chat.findById(id);
//     if (!chat) {
//       return res.status(404).send("Chat not found");
//     }
//     res.render("edit.ejs", { chat });
//   } catch (err) {
// //     console.error(err);
// //     res.status(500).send("Server error");
// //   }
// // });

// app.patch("/chats/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     let { message } = req.body;
//     let chat = await Chat.findByIdAndUpdate(id, { message }, { new: true });
//     if (!chat) {
//       return res.status(404).send("Chat not found");
//     }
//     res.redirect(`/chats/${id}`);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });

// ...existing code...
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
  // console.log(chats);
  res.render("index.ejs",{chats});
})
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(8080,()=>{
    console.log("server is listenend on port 8080");
});

// ............................... new route ............................

app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
});
// .........................create route ..........................

app.post("/chats",(req,res)=>{
   let {from , to ,message } =req.body;
   let newChat =new chat({
    from:from,
    to:to,
    message:message,
    created_at:new Date()
   });
  //  console.log(newChat);
  newChat.save().then((res)=>{
    console.log("chat was saved");
  }).catch((err)=>{
    console.log(err);
  });
  res.redirect("/chats");
});

// .............................Update route ...........................

// ...existing code...

// .............................Update route ...........................

// .............................Update route ...........................

app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let detail = await chat.findById(id); // Ensure this matches the imported model
    if (!detail) {
      return res.status(404).send("Chat not found");
    }
    res.render("edit.ejs", { detail });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
app.put("/chats/:id",async(req,res)=>{
  let { id } = req.params;
  let {message}=req.body;
  let updateChat = await chat.findByIdAndUpdate(id,{message},{ runValidators:true ,new:true});
  res.redirect(`/chats`);
})
// .............................. DELETE route .................................

app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await chat.findByIdAndDelete(id); // Corrected method to delete the chat
    res.redirect("/chats");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});