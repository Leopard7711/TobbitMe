const express = require('express');
const app =express();
const path = require('path');


app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css',express.static(__dirname + '/dist/css'));
app.use('/src',express.static(__dirname + '/src'));
app.listen(80,function(){
    console.log('listening on 80')
    
});
app.get('/',function(req,res){
    res.sendFile(__dirname+'/src/index.html');
})