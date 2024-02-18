const express = require('express');
const app =express();
app.listen(80,function(){
    console.log('listening on 80')
    
});
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})