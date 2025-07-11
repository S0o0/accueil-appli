const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Sert tous les fichiers du dossier courant
app.use(express.static(__dirname));

// Redirige toutes les requêtes vers index.html (PWA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
});