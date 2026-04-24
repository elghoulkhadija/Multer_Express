const Stagiaire=require('../models/Stagiaire');


exports.getAllStagiaires=async(req,res)=>{
    try {
        const stagiaires=await Stagiaire.find();
       res.render('index',{stagiaires});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

exports.addStagiaire=async(req,res)=>{
    try{
        const imageName = req.file ? req.file.filename : '1.jpg';
        const stagiaire=new Stagiaire({
            numero:req.body.numero,
            nom:req.body.nom,
            prenom:req.body.prenom,
            age:req.body.age,
            email:req.body.email,
            image: imageName
        });
       
        await stagiaire.save();
        res.redirect('/api/all');
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};
exports.Ajouterstag=async(req,res)=>{
    res.render('create');
}

exports.EditStagiaire=async(req,res)=>{
    try{
        const stagiaire=await Stagiaire.findById(req.params.id)
        stagiaire.numero=req.body.numero;
        stagiaire.nom=req.body.nom;
        stagiaire.prenom=req.body.prenom;
        stagiaire.age=req.body.age;
        stagiaire.email=req.body.email;
        if(req.file){
            stagiaire.image=req.file.filename;
        }
        await stagiaire.save();
        res.redirect('/api/all');
    } 
    catch (error) {
        res.status(400).json({message:error.message});
    }
}

exports.modifierStg=async(req,res)=>{
    const stagiaire=await Stagiaire.findById(req.params.id)
    res.render('edit',{stagiaire});
}
exports.DeleteStagiaire=async(req,res)=>{
    try{
        await Stagiaire.findByIdAndDelete(req.params.id);
         res.redirect('/api/all');
    } catch (error) {
        res.status(400).json({message:error.message});
    };
}