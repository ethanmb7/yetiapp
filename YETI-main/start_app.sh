#!/bin/bash

# Démarre le serveur backend
echo "Démarrage du serveur backend..."
cd backend
if npm start; then
    echo "Backend démarré avec succès sur le port 5000."
else
    echo "Échec du démarrage du backend."
    exit 1
fi

# Démarre l'application frontend
echo "Démarrage de l'application frontend..."
cd ../frontend
if npm start; then
    echo "Frontend démarré avec succès sur le port 3000."
else
    echo "Échec du démarrage du frontend."
    exit 1
fi
