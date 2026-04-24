const {getAllStagiaires,addStagiaire,EditStagiaire,DeleteStagiaire,Ajouterstag,modifierStg} =require('../controller/stagiaireController');
const express = require('express');
const router = express.Router();
const upload=require('../multer');

router.get('/all',getAllStagiaires);
router.post('/add',upload.single('image'),addStagiaire);
router.get('/ajouter',Ajouterstag);
router.put('/edit/:id',upload.single('image'),EditStagiaire);
router.get('/modifier/:id',modifierStg);
router.delete('/delete/:id',DeleteStagiaire);

// les route pour upload de image 

module.exports=router;