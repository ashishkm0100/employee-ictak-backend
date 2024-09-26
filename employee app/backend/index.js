var express = require('express');
require("./connection")
var empmodel= require("./model/employee")

var app = express()
app.use (express.json())

app.get('/trial', (req, res) => {
    res.send("it's an  emloyee app")
})

app.get('/emp', (req, res) => {
    res.send("it's an  emloyee app")
})
app.listen(3004, () => {
    console.log("port is running")
})
app.post("/add", async (req, res) => {
    try {
        await empmodel(req.body).save()
        res.send({ message: "data added" })
    } catch { error } {
        console.log(error)
    }
})
app.get("/view", async (req, res) => {
    try {
        var data = await empmodel.find();
        res.send(data);
    }
    catch (error) {
        console.log("error");
    }
})
app.delete("/delete", async (req, res) => {
    
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: "delected successfully" });
    }
    catch (error) {
        console.log(error);
    }
    
})
app.delete("/delete", async (req, res) => {
    
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: "delected successfully" });
    }
    catch (error) {
        console.log(error);
    }
    
})
app.put("/edit/:id", async (req, res) => {
    
    try {
        var data = await empmodel.findByIdAndUpdate(req.params.id,req.body);
        res.send({ message: 'updated successfully',data });
    }
    catch (error) {
        console.log(error);
    }
    
})

