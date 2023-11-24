const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

async function checkForNewDockerImage() {
    try {
        const response = await axios.get('https://hub.docker.com/v2/repositories/hberg75/projet_devops');
        console.log(response.data);
    } catch (error) {
        console.error('Erreur lors de la vérification de Docker Hub:', error);
    }
}

setInterval(checkForNewDockerImage, 4000);

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
