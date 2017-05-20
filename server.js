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


app.use(express.static(__dirname + '/About'));
app.use(express.static(__dirname + '/support-us'));
app.use(express.static(__dirname + '/animated icon'));
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
    user: 'adminofts',
    database: 'tsdbforus',
    host: 'http://tsdbforus.c3p0chgaf7g4.us-west-2.rds.amazonaws.com/',
    port: '5432',
    password: 'tempsoln10'
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

app.get("/book3.jpeg",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","book3.jpeg")); 
    
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

app.get("/About.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"About","About.html")); 
    
});

app.get("/support-us.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"support-us","support-us.html")); 
    
});


app.get("/jquery.min.js",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"jquery.min.js")); 
    
});

app.get("/productBackground.png",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"Images","productBackground.jpg")); 
    
});

app.get("/categorygif.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"animated icon","categorygif.html")); 
    
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
                  res.status(200).send(JSON.stringify({'usertype':result.rows[0].type}));
                  
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

app.get("/bike1description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"bike1description.html")); 
    
});

app.get("/bike2description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"bike2decription.html")); 
    
});

app.get("/book1description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"book1description.html")); 
    
});


app.get("/book2description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"book2description.html")); 
    
});

app.get("/book3description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"book3description.html")); 
    
});

app.get("/car1description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"car1description.html")); 
    
});

app.get("/car2description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"car2description.html")); 
    
});

app.get("/cycle1Description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"cycle1Description.html")); 
    
});

app.get("/cycle2description.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"cycle2description.html")); 
    
});

app.get("/electronics1descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"electronics1descriptionlist.html")); 
    
});

app.get("/electronics2descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"electronics2descriptionlist.html")); 
    
});

app.get("/electronics3descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"electronics3descriptionlist.html")); 
    
});

app.get("/furniture1descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"furniture1descriptionlist.html")); 
    
});

app.get("/furniture2descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"furniture2descriptionlist.html")); 
    
});

app.get("/furniture3descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"furniture3descriptionlist.html")); 
    
});

app.get("/occasion1descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"occasion1descriptionlist.html")); 
    
});

app.get("/occasion2descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"occasion2descriptionlist.html")); 
    
});

app.get("/occasion3descriptionlist.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"occasion3descriptionlist.html")); 
    
});

app.get("/response.html",function(req,res){
    
   res.status(200).sendFile(path.join(__dirname,"response.html")); 
    
});

app.get("/productBackGround.png",function(req,res){
   
    res.status(200).sendFile(path.join(__dirname,"Images","productBackGround.png"));
    
});

var port = process.env.PORT || 8000;

http.listen(port , function(){
    
   console.log("Server listening at port " + port);
    
}); 