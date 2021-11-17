const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupname: {
    type: String,
    maxlength: 50,
    required: true,
  },
  
 users:[
  {
    username:{
      type:String,
      required:true,
      maxlength: 50,
      default: "",
    },
  },
 ],
});   

module.exports = {
  GroupSchema: mongoose.model("Groups", GroupSchema),
};
