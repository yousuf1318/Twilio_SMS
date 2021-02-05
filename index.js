const twilio = require("twilio");
var Twilio= require("twilio");

const express=require("express")
const app=express()

app.get("/sms",(req,res)=>{
    var accountSid="ACa50d784fcebd37f4723bad49ddd35884"
    var authToken="a65d9b93a6a1cea3d5308a678418e235"
    var client= new twilio(accountSid,authToken)
    client.messages.create({
    body:"Hello from yousuf2",
    to:"+911111111111",
    from:"+911111111111"
}).then((message)=>res.send(`The message to: ${message.to} was send`))  
    
})

app.listen(3002,()=>{
    console.log("server is running at :3002");
})


