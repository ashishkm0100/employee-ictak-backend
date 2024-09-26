var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    name: String,
    Age: Number,
    Dept: String,
    sal: Number
})
var EmployeeModel = mongoose.model("employee", Schema)
module.exports=EmployeeModel