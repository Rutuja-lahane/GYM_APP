import express from "express";
const app = express()
const Port = 3000

app.get('/',(req,res)=>{
  res.send('<h1>home page</h1>')
})

app.listen(Port,()=>{
  console.log(`your server is running on port http://localhost:${Port}`)
})

