const express= require('express');
const ProductData = require('./src/model/Productdata');
const UserData = require('./src/model/Userdata');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());


app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    ProductData.find()
    .then(function(products){
        res.send(products);
    })
});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    }
    var product = new ProductData (product);
    product.save();
})

app.post("/delete",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
     id = req.body.id;
    ProductData.findByIdAndDelete({_id:id})
    .then(function(){
    console.log("Deleted successfully");
    ProductData.find()
    .then(function(products){
        res.send(products);
    })
    
    })
})

// for register
app.post("/register",(req,res)=>{
    let userData = req.body;
    let user = new UserData (userData);
    user.save((err,registerdUser)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(registerdUser);
        }
    });
});

// for login

app.post("/login",(req,res)=>{
    let userData = req.body;
    UserData.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                res.status(401).send("Invalid email");
                // alert("Invalid email");
               
            }
            else {
                if(user.password !== userData.password){
                res.status(401).send("Invalid password");
                // alert("Invalid password");
                
                }
                else{
                res.status(200).send(user);
                }
            }
        }
    })
})

// for update

app.put("/update",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
     id = req.body.id;
    ProductData.findByIdAndUpdate({_id:id})
    .then(function(){
    console.log("Updated successfully");
    ProductData.find()
    .then(function(products){
        res.send(products);
    })
    
    })
})


app.listen(3000,function(){
    console.log("listening to port 3000");
});
