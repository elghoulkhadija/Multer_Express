const mongoose = require('mongoose');

const stagiareSchema=new mongoose.Schema({
    numero:Number,
    nom:String,
    prenom:String,
    age:Number,
    email:{type:String},
    image:String
});
const Stagiaire=mongoose.model('Stagiaire',stagiareSchema);
module.exports=Stagiaire;