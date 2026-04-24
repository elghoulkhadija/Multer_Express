// pour l'upload des images
const multer = require('multer');
// configuration des fichier uploades
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/');
    },
    // récupérer les extension du fichier 
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname);
    }
});
const upload=multer({storage:storage});
module.exports=upload;