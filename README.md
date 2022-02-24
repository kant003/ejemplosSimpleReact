Github: https://github.com/kant003/ejemplosSimpleReact

# Crear el proyecto
npx create-react-app ejemplossimples

# Probar el proyecto en un servidor local
npm start

# Deploy en Netlify
npm install netlify-cli -g
netlify deploy
.build

# Deploy en github
npm install --save-dev gh-pages
Edita el packege.json
    "homepage":"https://github.com/kant003/ejemplosSimpleReact.git"

    "scripts":{
        "build":"npm run build",
        "deploy":"gh-pages -d build"
    }

npm run build
npm run deploy


1- Crea un componente de react al que le puedas pasar como prop un valor que respresente
la temperatura en grados Cº
El componente pintara en pantalla la temperatura en grados Fº

(solo necesitas crear un componente y usar props)


2- Crea un componente de react que al pulsar un boton muestra por pantalla un número random
entre 1 y 6

(solo necesitas saber: manejar estado (useState) y leer eventos (onClick) )

