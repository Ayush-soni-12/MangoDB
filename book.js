const mongoose = require('mongoose');



main().then((res)=>{
 console.log("Connected to DB");
}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
 // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} 
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
        // required true ka mtlb hota hai ki hum title khali nhi chod skte hai 
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1, "price value is less than 1"],
        // hum chahe to apna error jo print krbana chahe bo kr ba skte hai

    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
        //  agr hum category me koi ase value dale jo enum me nhi hai toh error ayega
    },
    // hum array bhi store kra skte hai 
    array:[String],
});


const Book = mongoose.model('Book',bookSchema);
Book.findByIdAndUpdate('678a9345efea7712497176d1',{price:-100},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
       //  agr hum category me koi ase value dale jo enum me nhi hai toh error ayega
})

// validatons we apply in schema not applied on update method
// agr hum chate hai ki validations update method pr apply ho to hume {runValidators:true} ye update method me apply krna pdega


// let book1 = new Book({title:"harry potter",author:"Rudyard kipling",price:500,category:"fiction",array:["aman","ayush","ayushi"]});
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });