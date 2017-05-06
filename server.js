var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyparser = require('body-parser');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var session = require('express-session');
var app = express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(session({
    
    secret : 'vamefa00',
    cookie : {maxage : 30*24*60*60*1000},
    resave : false,
    saveUninitialized : false
    
}));

var config = {
    user: 'qwznmrqcxlkzfg',
    database: 'db0g8epr4bv08q',
    host: 'ec2-184-73-199-72.compute-1.amazonaws.com',
    port: 5432,
    password: '3e1064201c20a7223db83ab4f1905006564b15963d5c4acada97c4ebbdeab1f3'
};

var pool=new Pool(config);

app.get("/",function(req,res){
    
    if(req.session && req.session.auth && req.session.auth.userId){
        
       res.status(200).sendFile(path.join(__dirname,"categories2.html")); 
        
    }else{
     
        res.status(200).sendFile(path.join(__dirname,"home.html"));
        
    }
    
});

app.get("/categories2.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"categories2.html"));
    
});

app.get("/automobileproductlist.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"automobileproductlist.html"));
    
});

app.get("/bikeproduct.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"bikeproduct.html"));
    
});

app.get("/home.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"home.html"));
    
});

app.get("/bookproductlist.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"bookproductlist.html"));
    
});

app.get("/carproduct.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"carproduct.html"));
    
});

app.get("/cycleproduct.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"cycleproduct.html"));
    
});

app.get("/electronicsproductlist.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"electronicsproductlist.html"));
    
});

app.get("/embed.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"embed.html"));
    
});

app.get("/furnitureproductlist.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"furnitureproductlist.html"));
    
});

app.get("/login.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"login.html"));
    
});

app.get("/occasionproductlist.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"occasionproductlist.html"));
    
});

app.get("/productlist.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"productlist.html"));
    
});

app.get("/responsive.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"responsive.html"));
    
});

app.get("/shopregister.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"shopregister.html"));
    
});

app.get("/userregister.html",function(req,res){
           
       res.status(200).sendFile(path.join(__dirname,"userregister.html"));
    
});

app.get("/automobiles.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","automobiles.jpg")); 
    
});

app.get("/beds.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","beds.jpg")); 
    
});

app.get("/bgi.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","bgi.png")); 
    
});

app.get("/bike.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","bike.jpg")); 
    
});

app.get("/bike1.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","bike1.jpg")); 
    
});

app.get("/bike2.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","bike2.jpg")); 
    
});

app.get("/book.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","book.jpg")); 
    
});

app.get("/book1.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","book1.jpg")); 
    
});

app.get("/book2.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","book2.jpg")); 
    
});

app.get("/book3.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","book3.jpg")); 
    
});

app.get("/camera,lenses.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","camera,lenses.jpg")); 
    
});

app.get("/car.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","car.jpg")); 
    
});

app.get("/car1.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","car1.jpg")); 
    
});

app.get("/car2.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","car2.jpg")); 
    
});

app.get("/cycle.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","cycle.jpg")); 
    
});

app.get("/cycle1.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","cycle1.jpg")); 
    
});

app.get("/cycle2.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","cycle2.jpg")); 
    
});

app.get("/electronics.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","electronics.jpg")); 
    
});

app.get("/electronicsproductlist.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","electronicsproductlist.jpg")); 
    
});

app.get("/furniture.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","furniture.jpg")); 
    
});

app.get("/grpPic.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","grpPic.png")); 
    
});

app.get("/headphones.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","headphones.jpg")); 
    
});

app.get("/homebg.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","homebg.jpg")); 
    
});

app.get("/image.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","image.png")); 
    
});

app.get("/jewels.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","jewels.jpg")); 
    
});

app.get("/logo2.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","logo2.jpg")); 
    
});

app.get("/mouse&keyboard.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","mouse&keyboard.jpg")); 
    
});

app.get("/occasion.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","occasion.jpg")); 
    
});

app.get("/samyana.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","samyana.jpg")); 
    
});

app.get("/serialset.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","serialset.jpg")); 
    
});

app.get("/shoerack.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","shoerack.jpg")); 
    
});

app.get("/wardrobe.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","wardrobe.jpg")); 
    
});


app.get("/image1.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","image1.png")); 
    
});

app.get("/responsive1.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"responsive1.html")); 
    
});

app.get("/embed1.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"embed1.html")); 
    
});

app.get("/19b006ddf155d96215237a626a959f909641b451d316.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","19b006ddf155d96215237a626a959f909641b451d316.html")); 
    
});

app.get("/a9e506989705540c60913a9215af06613f6319478357.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","a9e506989705540c60913a9215af06613f6319478357.html")); 
    
});

app.get("/590cba1b95e3dAi5EACgGAVx16akyYnaR.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1b95e3dAi5EACgGAVx16akyYnaR.png")); 
    
});

app.get("/590cba1bd7ad631HKGJyl5qp0n6wVC6wU.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1bd7ad631HKGJyl5qp0n6wVC6wU.png")); 
    
});

app.get("/590cba1c7b805XDow4txbdDsScHloVRHa.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1c7b805XDow4txbdDsScHloVRHa.png")); 
    
});

app.get("/590cba1c34417UNZQihUtqosQhbWcx4z5.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1c34417UNZQihUtqosQhbWcx4z5.png")); 
    
});

app.get("/590cba1cc67f540ZdWTfeCNz24q6q6njQ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1cc67f540ZdWTfeCNz24q6q6njQ.png")); 
    
});

app.get("/590cba1d291bcCuxtgSkQo9YAIFeYgGRn.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1d291bcCuxtgSkQo9YAIFeYgGRn.png")); 
    
});

app.get("/590cba1d71452nDBrYkg92Rz08mBAQhgL.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1d71452nDBrYkg92Rz08mBAQhgL.png")); 
    
});

app.get("/590cba1ddd1f51KlRhyrpPqARci9kzchh.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1ddd1f51KlRhyrpPqARci9kzchh.png")); 
    
});

app.get("/590cba1e51501hoZOJ66Znq5kiZUH5QgQ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1e51501hoZOJ66Znq5kiZUH5QgQ.png")); 
    
});

app.get("/590cba1ea480aLqVnKIqWqPydaHAfZNqA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1ea480aLqVnKIqWqPydaHAfZNqA.png")); 
    
});

app.get("/590cba1f5c621nPtNy6CvGdf459UgXU3y.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1f5c621nPtNy6CvGdf459UgXU3y.png")); 
    
});

app.get("/590cba1fa7281UBfJAD2J4bLZsUT0UeXP.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba1fa7281UBfJAD2J4bLZsUT0UeXP.png")); 
    
});

app.get("/590cba2a708aeMykTKD30yqTuD4sVflZC.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2a708aeMykTKD30yqTuD4sVflZC.png")); 
    
});

app.get("/590cba2b5cc131OEX6OfzKril7xDNB0cK.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2b5cc131OEX6OfzKril7xDNB0cK.png")); 
    
});

app.get("/590cba2ba76afqrW20CDuf7hz5z44gYJ4.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2ba76afqrW20CDuf7hz5z44gYJ4.png")); 
    
});

app.get("/590cba2c2f24eybnoN0vEGMmD3WGZ2sS3.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2c2f24eybnoN0vEGMmD3WGZ2sS3.png")); 
    
});

app.get("/590cba2c8237435KMC2NWFAix1l7kCJUF.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2c8237435KMC2NWFAix1l7kCJUF.png")); 
    
});

app.get("/590cba2d3b4774KCm1qhrfSsg6LjkZLkA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2d3b4774KCm1qhrfSsg6LjkZLkA.png")); 
    
});

app.get("/590cba2deecd8fdYB7wdJG1HXMFHCv1ZA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2deecd8fdYB7wdJG1HXMFHCv1ZA.png")); 
    
});

app.get("/590cba2eabae4EdBwNs0WEg2DKFefRquZ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2eabae4EdBwNs0WEg2DKFefRquZ.png")); 
    
});

app.get("/590cba2f853b7CAuQXVyFvEazQ8YNeSz5.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2f853b7CAuQXVyFvEazQ8YNeSz5.png")); 
    
});

app.get("/590cba3a70548CzlLWpgAWZ1shdQtijNb.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3a70548CzlLWpgAWZ1shdQtijNb.png")); 
    
});

app.get("/590cba3b6535eFMT9Z7NdxZBAgCkEwFpg.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3b6535eFMT9Z7NdxZBAgCkEwFpg.png")); 
    
});

app.get("/590cba3c4d4103AehGYhRbU1WpGBiw5hG.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3c4d4103AehGYhRbU1WpGBiw5hG.png")); 
    
});

app.get("/590cba3c91efc7R3a7MSCYQdbWnRcCFzQ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3c91efc7R3a7MSCYQdbWnRcCFzQ.png")); 
    
});

app.get("/590cba3d13e151wpIH5jvALlSNUYwb1wA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3d13e151wpIH5jvALlSNUYwb1wA.png")); 
    
});

app.get("/590cba3d90303iWxdq9QXae3iFCKJIEMj.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3d90303iWxdq9QXae3iFCKJIEMj.png")); 
    
});

app.get("/590cba3e42768dFUiBZOvG7x3A1qhSpjM.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3e42768dFUiBZOvG7x3A1qhSpjM.png")); 
    
});

app.get("/590cba3f0c7b78q6p0nDide3C0LY7T7JH.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3f0c7b78q6p0nDide3C0LY7T7JH.png")); 
    
});

app.get("/590cba3fa16467yiOP31tFitjNLlfRyLu.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3fa16467yiOP31tFitjNLlfRyLu.png")); 
    
});

app.get("/590cba4a4ee89gmuh7c3a5F8GmDT3UYyq.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4a4ee89gmuh7c3a5F8GmDT3UYyq.png")); 
    
});

app.get("/590cba4a97aa2pyJCTcja3BhgPJbbwEoA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4a97aa2pyJCTcja3BhgPJbbwEoA.png")); 
    
});

app.get("/590cba4b7dd77Iw1znhYoLnjWOVOZ00L3.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4b7dd77Iw1znhYoLnjWOVOZ00L3.png")); 
    
});

app.get("/590cba22cb322KEmoW5mB8PO51sdPMDL2.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba22cb322KEmoW5mB8PO51sdPMDL2.png")); 
    
});

app.get("/590cba23bbe7fWCshK3sOkELvwCeWMi0c.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba23bbe7fWCshK3sOkELvwCeWMi0c.png")); 
    
});

app.get("/590cba29c4249GQCW1P51otyF5FC6FJpt.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba29c4249GQCW1P51otyF5FC6FJpt.png")); 
    
});

app.get("/590cba31be5b0xWfmkaqV7Zl0MTCwUQUF.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba31be5b0xWfmkaqV7Zl0MTCwUQUF.png")); 
    
});

app.get("/590cba32f288dtyN3PxIZxCB2OhguttFe.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba32f288dtyN3PxIZxCB2OhguttFe.png")); 
    
});

app.get("/590cba33b8b54G5kD1x5PuYcuDOz6v4Cc.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba33b8b54G5kD1x5PuYcuDOz6v4Cc.png")); 
    
});

app.get("/590cba36eb4aemKC4o34EUnDEzLp2zTkg.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba36eb4aemKC4o34EUnDEzLp2zTkg.png")); 
    
});

app.get("/590cba37a7fb4pQkUTLbCoz3nMttI6K5s.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba37a7fb4pQkUTLbCoz3nMttI6K5s.png")); 
    
});

app.get("/590cba39b4511qQ4k5WZgALOd1rK7nS6Q.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba39b4511qQ4k5WZgALOd1rK7nS6Q.png")); 
    
});

app.get("/590cba41c4a60IYtMnyx4s7vk9sIAAIOl.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba41c4a60IYtMnyx4s7vk9sIAAIOl.png")); 
    
});

app.get("/590cba42b4444NY43kuxELeaFrohuGl6A.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba42b4444NY43kuxELeaFrohuGl6A.png")); 
    
});

app.get("/590cba45a64565mZdVG14Y20DKrM7yNbV.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba45a64565mZdVG14Y20DKrM7yNbV.png")); 
    
});

app.get("/590cba48d607c4m1fb0NyE3M66SRWoX9C.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba48d607c4m1fb0NyE3M66SRWoX9C.png")); 
    
});

app.get("/590cba49ca411e1UQNi6P9ynjMc0h3Nkf.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba49ca411e1UQNi6P9ynjMc0h3Nkf.png")); 
    
});

app.get("/590cba312c918Nt5hTVvLFNsvlt65G5hi.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba312c918Nt5hTVvLFNsvlt65G5hi.png")); 
    
});

app.get("/590cba352f884tQl2XWluhnc9O4NRZlZn.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba352f884tQl2XWluhnc9O4NRZlZn.png")); 
    
});

app.get("/590cba412b6a1YcRxQ55AteNHTSNPXjeN.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba412b6a1YcRxQ55AteNHTSNPXjeN.png")); 
    
});

app.get("/590cba435df59vGoRyh7ySxPlZ9CwNKEp.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba435df59vGoRyh7ySxPlZ9CwNKEp.png")); 
    
});

app.get("/590cba453c388l5oPgTSVjIzkDwQsKsw.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba453c388l5oPgTSVjIzkDwQsKsw.png")); 
    
});

app.get("/590cba461f389fO8uImkdAgMpR8FPGdws.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba461f389fO8uImkdAgMpR8FPGdws.png")); 
    
});

app.get("/590cba2477cc3OSaKGZwowW0IHevQNVLA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2477cc3OSaKGZwowW0IHevQNVLA.png")); 
    
});

app.get("/590cba2656bc6isCvPAy1UUHVlMdnmTjD.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2656bc6isCvPAy1UUHVlMdnmTjD.png")); 
    
});

app.get("/590cba2915e19k6JLtRjWws41fUJcmb2a.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2915e19k6JLtRjWws41fUJcmb2a.png")); 
    
});

app.get("/590cba4882b23Mys2cpqyprc2BH0TzQCv.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4882b23Mys2cpqyprc2BH0TzQCv.png")); 
    
});

app.get("/590cba4937ca2vSjy5bldLZZBuW6sUvcY.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4937ca2vSjy5bldLZZBuW6sUvcY.png")); 
    
});

app.get("/590cba27001dbbJREab3xEMdPziKoMI4Z.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba27001dbbJREab3xEMdPziKoMI4Z.png")); 
    
});

app.get("/590cba44186fbPF2gOVAt4ZyTJUWquEBZ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba44186fbPF2gOVAt4ZyTJUWquEBZ.png")); 
    
});

app.get("/590cba329598eIFAcS9FbWbOTWnj5znr9.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba329598eIFAcS9FbWbOTWnj5znr9.png")); 
    
});

app.get("/590cba478849fhOU2SLwQ1epzVHWburWg.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba478849fhOU2SLwQ1epzVHWburWg.png")); 
    
});

app.get("/590cba2803042DR4yi52IhSu1NQGJfuaM.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba2803042DR4yi52IhSu1NQGJfuaM.png")); 
    
});

app.get("/590cba3041400gQjKwvBPfTqF3sNKOaAu.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3041400gQjKwvBPfTqF3sNKOaAu.png")); 
    
});

app.get("/590cba3849391iaBiOAFCHG4sidXjDNv6.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3849391iaBiOAFCHG4sidXjDNv6.png")); 
    
});

app.get("/590cba3923249Z5zMk4jSTcdzpthZiLfX.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba3923249Z5zMk4jSTcdzpthZiLfX.png")); 
    
});

app.get("/590cba4080180uh9LkWXvDPZFNygbXi2n.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4080180uh9LkWXvDPZFNygbXi2n.png")); 
    
});

app.get("/590cba4983593VVxEJjIqQKkag47RYuvD.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","590cba4983593VVxEJjIqQKkag47RYuvD.png")); 
    
});

app.get("/spin.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","spin.min.js")); 
    
});

app.get("/TweenMax.1.11.4.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"19b006ddf155d96215237a626a959f909641b451d316","TweenMax.1.11.4.min.js")); 
    
});

app.get("/590d788a9ee7aEdRAnjiy2URgP0QUZv9X.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d788a9ee7aEdRAnjiy2URgP0QUZv9X.png")); 
    
});

app.get("/590d788a544bd9RcGocSwtCccczwqsmGW.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d788a544bd9RcGocSwtCccczwqsmGW.png")); 
    
});

app.get("/590d788a07000bOXcjcWnN6Nw73PvGm3O.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d788a07000bOXcjcWnN6Nw73PvGm3O.png")); 
    
});

app.get("/590d788aea9e9r54G2EEKdqguYThWq2Yf.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d788aea9e9r54G2EEKdqguYThWq2Yf.png")); 
    
});

app.get("/590d788b40af2YjPxO6ryQEaQY9Ot6ym1.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d788b40af2YjPxO6ryQEaQY9Ot6ym1.png")); 
    
});

app.get("/590d789a156c2weQJiVJssy6Bdkkc6Vtp.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789a156c2weQJiVJssy6Bdkkc6Vtp.png")); 
    
});

app.get("/590d789a6637fLjvm8An3UOHQYIY8r3zO.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789a6637fLjvm8An3UOHQYIY8r3zO.png")); 
    
});

app.get("/590d789ad1da4CIoVg895otMbazm93yJ8.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789ad1da4CIoVg895otMbazm93yJ8.png")); 
    
});

app.get("/590d789b8e26fFC6FcqOuRLMYtkICGp1X.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789b8e26fFC6FcqOuRLMYtkICGp1X.png")); 
    
});

app.get("/590d789b40ebc4KUFvcPzq836guIY8fcH.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789b40ebc4KUFvcPzq836guIY8fcH.png")); 
    
});

app.get("/590d789c7e7a5Oz0QT2f52FXekITS5rq8.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789c7e7a5Oz0QT2f52FXekITS5rq8.png")); 
    
});

app.get("/590d789c30bc5bECer4wFBzmCWFyO1UPQ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789c30bc5bECer4wFBzmCWFyO1UPQ.png")); 
    
});

app.get("/590d789de7154jIBHCDdXlOHZxpllrRPf.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789de7154jIBHCDdXlOHZxpllrRPf.png")); 
    
});

app.get("/590d7887abe5938NOp8pVjwO6JvQv1OIu.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7887abe5938NOp8pVjwO6JvQv1OIu.png")); 
    
});

app.get("/590d7888a48a0CqFfnsllt8R3Be6060og.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7888a48a0CqFfnsllt8R3Be6060og.png")); 
    
});

app.get("/590d7889ab3e14BKrGYcIwfxX5p3nZ3ci.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7889ab3e14BKrGYcIwfxX5p3nZ3ci.png")); 
    
});

app.get("/590d7890a3f1643KuavDtkgkQUP20plpQ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7890a3f1643KuavDtkgkQUP20plpQ.png")); 
    
});

app.get("/590d7891a75423heJ2nbnOqcSjA9PLVUH.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7891a75423heJ2nbnOqcSjA9PLVUH.png")); 
    
});

app.get("/590d78880cf8ccx3btJzmdh3A4N1zT24F.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d78880cf8ccx3btJzmdh3A4N1zT24F.png")); 
    
});

app.get("/590d78935ad83sMbJv9uQHTGQX2DhAGwL.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d78935ad83sMbJv9uQHTGQX2DhAGwL.png")); 
    
});

app.get("/590d78940b94bbLADDgUa5lgqEXDDIHoQ.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d78940b94bbLADDgUa5lgqEXDDIHoQ.png")); 
    
});

app.get("/590d78945c603DMSVbtTCjsQ0ivW2gV2C.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d78945c603DMSVbtTCjsQ0ivW2gV2C.png")); 
    
});

app.get("/590d788855cca8cnVQkEo3CNo6xIaYcE4.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d788855cca8cnVQkEo3CNo6xIaYcE4.png")); 
    
});

app.get("/590d7889606b2c7IAJJubQwIJaHXPFs8A.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7889606b2c7IAJJubQwIJaHXPFs8A.png")); 
    
});

app.get("/590d7891549eauIjZ83eUf0SEpXq8Mysm.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7891549eauIjZ83eUf0SEpXq8Mysm.png")); 
    
});

app.get("/590d7892187e5ojMIPVpt6zHhzvGqzBAI.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7892187e5ojMIPVpt6zHhzvGqzBAI.png")); 
    
});

app.get("/590d7895030d2u8JozTApubJNCvpOhuBi.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d7895030d2u8JozTApubJNCvpOhuBi.png")); 
    
});

app.get("/590d78890047a03wJDCmqRVXnbiU7ZXhT.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d78890047a03wJDCmqRVXnbiU7ZXhT.png")); 
    
});

app.get("/590d78910871cep56L8U8QTcrTuexQEDm.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d78910871cep56L8U8QTcrTuexQEDm.png")); 
    
});

app.get("/590d789058886iQnrskuk6OvywiWvj8KA.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789058886iQnrskuk6OvywiWvj8KA.png")); 
    
});

app.get("/590d789279381xwriNei9aduEQEJwKrgi.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","590d789279381xwriNei9aduEQEJwKrgi.png")); 
    
});

app.get("/a9e506989705540c60913a9215af06613f6319478357.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","a9e506989705540c60913a9215af06613f6319478357.html")); 
    
});

app.get("/spin.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","spin.min.js")); 
    
});

app.get("/TweenMax.1.11.4.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"a9e506989705540c60913a9215af06613f6319478357","TweenMax.1.11.4.min.js")); 
    
});

app.get("/jquery.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"jquery.min.js")); 
    
});

app.get("/productBackground.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","productBackground.jpg")); 
    
});

app.get("/590e0633c114b4xAMG9MoMK4HzxHK8dyX.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","590e0633c114b4xAMG9MoMK4HzxHK8dyX.png")); 
    
});

app.get("/590e06332d2ecgLpQDKgcoh0RxG1sSgMX.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","590e06332d2ecgLpQDKgcoh0RxG1sSgMX.png")); 
    
});

app.get("/590e0632926ea74QWaM4YEOMd9SgiZb9H.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","590e0632926ea74QWaM4YEOMd9SgiZb9H.png")); 
    
});

app.get("/590e06347137cfzjwy71mKVCBwBgcDztw.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","590e06347137cfzjwy71mKVCBwBgcDztw.png")); 
    
});

app.get("/categorygif.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","categorygif.html")); 
    
});

app.get("/spin.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","spin.min.js")); 
    
});

app.get("/TweenMax.1.11.4.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","TweenMax.1.11.4.min.js")); 
    
});

app.get("/add.jpg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","add.jpg")); 
    
});



function hash(input , salt){
    
    var hashed=crypto.pbkdf2Sync(input,salt,10000,16,'sha512');
    return [salt,hashed.toString('hex')].join('$');
    
}

app.post("/login",function(req,res){
    
   var mailid=req.body.mailid;
    
    var pwd=req.body.password;
    
    pool.query("SELECT * FROM login_details WHERE mailid=$1",[mailid],function(err,result){
       
      if(err){
             
            res.status(500).send('Some error occurred at the server end.');
          
          }else if(result.rows.length===0){
              
              res.status(403).send('Invalid username or password');
              
          }else{
              
              var dbString=result.rows[0].password;
              var salt=dbString.split('$')[0];
              var hashedPassword=hash(pwd,salt);
              if(hashedPassword===dbString){
                  
                  req.session.auth={userId:result.rows[0].id};
                  res.status(200).send('Logged in successfully!');
                  
              }else{
                  
                  res.status(403).send('Invalid username or password!');
                  
              }
              
          }
       
   });
    
});

app.post("/register-user",function(req,res){
    
   var name=req.body.name;
    var mailid=req.body.mailid;
    var pwd=req.body.password;
    var address=req.body.address;
    var salt=crypto.randomBytes(16).toString('hex');
    var encryptedPwd=hash(pwd,salt);
    var companyname=" ";
    var type="U";
    
    pool.query("INSERT INTO login_details(name,shopname,mailid,password,address,type) VALUES($1,$2,$3,$4,$5,$6)",[name,companyname,mailid,encryptedPwd,address,type],function(err,result){
        
        if(err){
           
           res.status(500).send("Error at server end.");
           
       }else{
           
           if(result){
               
               res.status(200).send("Registration successfull.");
               
           }else{
               
               res.status(403).send("Some error occurred .");
               
           }
           
       } 
  
        
    });
    
});

app.post("/register-shop",function(req,res){
    
   var name=req.body.name;
    var mailid=req.body.mailid;
    var pwd=req.body.password;
    var address=req.body.address;
    var salt=crypto.randomBytes(16).toString('hex');
    var encryptedPwd=hash(pwd,salt);
    var companyname=req.body.shopname;
    var type="S";
    
    pool.query("INSERT INTO login_details(name,shopname,mailid,password,address,type) VALUES($1,$2,$3,$4,$5,$6)",[name,companyname,mailid,encryptedPwd,address,type],function(err,result){
        
        if(err){
           
           res.status(500).send("Error at server end.");
           
       }else{
           
           if(result){
               
               res.status(200).send("Registration successfull.");
               
           }else{
               
               res.status(403).send("Some error occurred .");
               
           }
           
       } 
  
        
    });
    
});

app.post("/check-login",function(req,res){
    
   if(req.session && req.session.auth && req.session.auth.userId){
       
       res.status(200).send("User Logged in.");
       
   }else{
       
       res.status(403).send("user not logged in.");
       
   } 
    
});

io.on('connection',function(socket){
    
   socket.on("new message",function(data){
       
        socket.broadcast.emit('server message',data);   
       
   }) ;
    
});

var port = process.env.PORT || 8000;

http.listen(port , function(){
    
   console.log("Server listening at port " + port);
    
}); 