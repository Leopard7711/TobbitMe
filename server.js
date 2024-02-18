const express = require('express');
const app =express();
const path = require('path');

let staticPath = path.join(__dirname, 'css');
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

staticPath = path.join(__dirname, 'src');
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

app.listen(80,function(){
    console.log('listening on 80')
    
});
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})