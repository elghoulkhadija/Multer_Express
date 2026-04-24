const express = require('express');
const app = express();

// pour les upload de image
const multer = require('./multer')

// pour affiche les fichier statiques
app.use(express.static('public'));

// pour les variables d'environnement
const dotenv = require('dotenv');
dotenv.config();

// connecter à la base de don   
const Connection=require('./database/db');
Connection();
// pour utiliser les routes
const StagiaireRoute=require('./router/stagiaireRouter');


// pour utiliser les méthodes
const methodOveride=require('method-override');
app.use(methodOveride('_method'));

// les middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',StagiaireRoute);
app.set('view engine', 'ejs');




// lancer serveur
app.listen(process.env.PORT,function(){
    console.log('server démarer on port ' + (process.env.PORT));
});