//Copy html to dist
require('file-loader?name=[name].[ext]!../index.html');

//Importar imagenes: Al hacer el build se creara la imagen en dist/assets
const asrc = require('../img/fondo-luna-Carlos1.jpg');
//console.log("Imagen creada en: " + asrc);
document.body.style.background=asrc;
//Importar clase
import { Person } from './class.person';

//Llamar clase
const p = new Person("Jon Doe");
console.log("My name is " + p.name);


var f = new Date();
var dd = String(f.getDate()).padStart(2, '0');
var mm = String(f.getMonth() + 1).padStart(2, '0'); //January is 0!
document.getElementById('fecha').innerHTML = dd + "-" + mm + "-" + f.getFullYear();
		
