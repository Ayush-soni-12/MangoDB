const mongoose = require('mongoose');



main().then((res)=>{
 console.log("Connected to DB");
}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
 // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} 
const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number,
});


const user = mongoose.model('user',userSchema);

// user.updateOne({name:"ayush"},{age:25}).then((res)=>{
//   console.log(res);
// })
// we can also use updateMany()

// user.find().then((res)=>{
// console.log(res);
// })

// user.find({age:{$gt:21}}).then((res)=>{
//   console.log(res);
//   })

  // we can also use findById("id number")

// const user1 = new user({name:"ayush",email:"sudhirsoni9889@gmail.com",age:21});
// user1.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
// user.insertMany([
// {name:"ayushi",email:"ayush@gmail.com",age:21},
// {name:"aman",email:"aman@gmail.com",age:20},
// {name:"rishi",email:"rishi@gmail.com",age:22},
// ]).then((res)=>{
//   console.log(res);
// }) 


// we can use find and update method in single form 

// user.findOneAndUpdate({name:"anshuman"},{name:"anshu"},{new:true}).then((res)=>{
//   console.log(res);
// })

// we can also use findByIdAndUpdate

// user.deleteOne({name:"anshu"}).then((res)=>{
//   console.log(res);
// })

// we can also use deleteMany() method

// we can also use find and delete in single form

// user.findOneAndDelete({name:"ayushi"},{new:true}).then((res)=>{
//   console.log(res);
// })

// we can also use findByIdAndDelete() method