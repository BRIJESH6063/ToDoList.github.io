const express = require("express") ;
const bodyParser = require("body-parser") ;

const app = express() ;
app.set('view engine', 'ejs');

app.get("/", function(req, res){
     var today = new Date() ;
     var CurrentDay = today.getDay() ;
     var day = "" ;

     switch(CurrentDay) {
         case 0 : day = "SUNDAY" ;
         break ;
         case 1 : day = "MONDAY" ;
         break ;
         case 2 : day = "TUESDAY" ;
         break ;
         case 3 : day = "WEDNESDAY" ;
         break ;
         case 4 : day = "THURSDAY" ;
         break ;
         case 5 : day = "FRIDAY" ;
         break ;
         case 6 : day = "SATURDAY" ;
         break ;
         default : console.log("Error! current day is out of range!") ;
     }

     res.render("list", { kindOfDay : day} ) ;
}) ;


app.listen(3000, function(){
    console.log("Server is running at 3000.") ;
}) ;
