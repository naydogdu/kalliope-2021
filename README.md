## Installation 

Run your local server `http-server . -p 8000` and go to : `http://localhost:8000/`

## TailwindCSS

You need `npx` on your machine.

Build for dev :

`npx tailwindcss-cli@latest build ./src/tailwind.css -o ./assets/css/base.css`

Build optimized, for prod :

`NODE_ENV=production npx tailwindcss-cli@latest build ./src/tailwind.css -o ./assets/css/base.css`

## Credits

* [three.js](https://threejs.org/)
* [GL Transitions](https://gl-transitions.com/)
* Photos [Agence-Tactile](https://www.agence-tactile.fr/)
