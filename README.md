## Installation 

Le projet nécessite un serveur HTTP. Installer un serveur node.js en local (si ce n'est pas déjà fait) `npm install http-server -g`

Puis lancez le serveur `http-server . -p 8000` et visualisez sur : `http://localhost:8000/`

## TailwindCSS

Build Dev :

`npx tailwindcss-cli@latest build ./src/tailwind.css -o ./assets/css/base.css`

Build Prod :

`NODE_ENV=production npx tailwindcss-cli@latest build ./src/tailwind.css -o ./assets/css/base.css`

## Crédits
* [three.js](https://threejs.org/)
* [GL Transitions](https://gl-transitions.com/)
* Images [Agence-Tactile](https://www.agence-tactile.fr/)
