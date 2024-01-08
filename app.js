const express = require("express");
const bdp = require("body-parser");
const app = express();
const htpps = require("https");


app.use(bdp.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/mail.html");
});



app.post("/",function(req, res){
    var name = req.body.name;
    var fname = req.body.surname;
    var email= req.body.email;
    res.send("name :"+"name" +"surname " + fname +"email :" + email);
    //341eff901df270e21dd7eeb916c178ab-us14
    //5acef5edc3


});

app.listen(3000, function(){
    console.log("working");
});
