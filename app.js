const express =  require("express");
 const mongoose = require("mongoose");
 const session = require("express-session");
 
 
 const app=express();
 const PORT = 8080;

 mongoose.connect("mongodb://127.0.0.1:27017/property");
 const db = mongoose.connection;
 //mongoose.set('useFindAndModify', false);
 
 db.on('error', console.error.bind(console, 'connection error:'));
 
 db.once('open',()=>{
     console.log('Database connection Established  !')
 });

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const morgan=require("morgan")
app.use(morgan("combine"))

app.use(
    session({
    secret: 'my secret kry',
    saveUninitialized: true,
    resave: false,
})
);

app.use((req, res, next)=> {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});


// app.use(express.static('../uploads/'));
app.use('/uploads', express.static('uploads'));

app.set('view engine','ejs');

app.use("",require('./router/routes'));

app.listen(PORT,()=>{
    console.log(`server start at http://localhost:${PORT}`);
})
