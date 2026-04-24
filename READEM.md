# 📦 Expriss - Application MVC avec Express.js

## 📌 Description
Application de gestion des stagiaires développée avec **Node.js + Express.js** en architecture **MVC**.

Elle permet de gérer les stagiaires avec :
- ➕ Ajout
- ✏️ Modification
- ❌ Suppression
- 📄 Affichage
- 🖼️ Upload d’image (Multer)

---

## 🧰 Technologie utiliser

```txt
Node.js
Express.js
MongoDB + Mongoose
EJS (Template Engine)
Multer (upload images)
Express Router

📁 Structure du projet
        Expres_exemple/
        │
        ├── controller/
        │   └── stagiaireController.js
        │
        ├── database/
        │   └── db.js
        │
        ├── models/
        │   └── Stagiaire.js
        │
        ├── public/
        │   └── images/
        │
        ├── router/
        │   └── stagiaireRouter.js
        │
        ├── views/
        │   ├── create.ejs
        │   ├── edit.ejs
        │   └── index.ejs
        │
        ├── multer.js
        ├── server.js
        ├── .env
        └── package.json

⚙️ Installation
npm install

▶️ Lancer le projet
    node server.js ou  npx nodemon server.js

🔐 Configuration .env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/stagiaires_db
⚙️ Middleware Express
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',SystemeRoute);
    app.set('view engine', 'ejs');
    Stockage : public/images/

🧪 Fonctionnalités

    ✔ Ajouter stagiaire + image
    ✔ Modifier stagiaire + image optionnelle
    ✔ Supprimer stagiaire
    ✔ Afficher liste
    ✔ Upload sécurisé des fichiers


👨‍💻 Auteur

Projet MVC Express.js - Formation développée