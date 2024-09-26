var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ashishanilkm2425:Asterisks2524@cluster0100.mywyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0100")
    .then(() => {
    console.log("db connection established")
})
    .catch((err)=> {
    console.log("error connecting ")
  })