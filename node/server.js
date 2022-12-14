const PORT = 8000
const express = require('express') // help with routing
const fs = require('fs')

const app = express()  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/",(req, res)=>{
    fs.readFile("./data.json","utf-8",(err,data)=>{
        
        if(err)
        {
            console.log('an error occured');
        }
        else{
            
            console.log(data);
            res.end(data)
        }
    })
})



app.listen(PORT, () => console.log('running on port ' + PORT))