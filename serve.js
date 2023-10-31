const express=require('express');
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));

const cors=require('cors');
app.use(cors())

let users=[{"studentNumber":1,"pwd":"123","phone":123},{"studentNumber":2,"pwd":"123123","phone":123123}];

app.get('/users',(req,res)=>{
    res.send(users);
})

app.listen(3000,()=>{
    console.log('running')
})