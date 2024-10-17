// Acquaring frameworks
const express=require('express');
const path= require('path');
const ejs= require('ejs');
const port=2500;



const app = express();

//Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'views')));


//Router

app.get('/',(req,res)=>{
    res.render('index');
});


// live Server
app.listen(port,(err)=>{
    if(err){
        console.log('An error occured');
    }else{
        console.log(`App is listning to port ${port}`);
    }
})