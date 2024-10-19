// Acquaring frameworks
const express=require('express');
const path= require('path');
const ejs= require('ejs');
const multer= require('multer');
const merge= require('./merge');
const port=2500;



const app = express();

//Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'views')));
app.use('static',express.static)

//Multer Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });

//Router

app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/merge',upload.array('pdfs',2) ,(req,res,next)=>{
  merge(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
    res.redirect("https://localhost:2500/static/merge.pdf");
    console.log(req.files);
});


// live Server
app.listen(port,(err)=>{
    if(err){
        console.log('An error occured');
    }else{
        console.log(`App is listning to port ${port}`);
    }
})