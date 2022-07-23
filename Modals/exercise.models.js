const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
   
       username: {type: string, required: true}, 
       discription: {type: string, required: true},
      duration: {type: Number,required: true},
        date:  { type: Date,required: true},  
       
   
},{
timestamps: true,
} );

const User = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;