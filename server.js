const express =require ("express")
const bodyParser =require("body-parser")
const path =require("path")
//import express from "express"
//mport bodyParser from "body-parser"


const  api_url=` https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=3fKb9xthJQ9qYP05dnGLtme1ks7VNcidCOgwwUOS`
const app=express()

app.use(bodyParser.json())



app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})


app.post("/add" ,(req,res)=>{
    const {a,b} =req.body;
    res.send(
        {
            result: parseInt(a)+parseInt(b)
        })
})




app.listen(3000, ()=>{
    console.log("server is running");
})