//Copy html to dist
require('file-loader?name=[name].[ext]!../index.html');


//Importar imagenes: Al hacer el build se creara la imagen en dist/assets
//const asrc = require('../img/fondo-luna-Carlos1.jpg';
//const asrc = require('../img/Carles_Cloquell_3-250x186.jpg');
//const asrc = require('../img/logo-carlescloquell.png');

//console.log("Imagen creada en: " + asrc);

//Importar clase
import { Person } from './class.person';
//@ts-ignore
import html2canvas from 'html2canvas';

//Llamar clase
//const p = new Person("Jon Doe");
//console.log("My name is " + p.name);


//Definicion de estilo de pantalla

document.body.style.background="black" ;
//document.body.style.backgroundImage = "url('https://shiverazul.github.io/citaprevia/dist/assets/fondo-luna-Carlos1.jpg')";
//document.body.style.backgroundImage = "url('https://shiverazul.github.io/citaprevia/dist/assets/Carles_Cloquell_3-250x186.jpg')";
//document.body.style.backgroundImage = "url('/Users/Asus/citaprevia/citaprevia/src/img/logo-carlescloquell.png')";
document.body.style.backgroundRepeat = "no-repeat";  
document.body.style.backgroundAttachment = "fixed"; 
document.body.style.backgroundSize   = "75%"; 

var f = new Date();
var dd = String(f.getDate()).padStart(2, '0');
var mm = String(f.getMonth() + 1).padStart(2, '0'); //January is 0!
document.getElementById('fecha').innerHTML = dd + "-" + mm + "-" + f.getFullYear();





const $ = require("jquery");

$("#download").click(() => {

    var fechaFormateada= f.getFullYear()+  "-" + mm + "-" + dd ;
    var resFecha = fechaFormateada.split("-");
     var reversedFecha = resFecha.reverse(); 
    var FechaOb=reversedFecha.join('-');
    document.getElementById('fecha').innerHTML = fechaFormateada;

  
    
    html2canvas(document.body).then(canvas => {
        var link = (<HTMLAnchorElement>document.getElementById('download'));
        var a = $("<a>")
        .attr("width", "100")
        .attr("height", "500")
        .attr("href", canvas.toDataURL("image/png"))
            .attr("download", "citaprevia.png")
            .appendTo("body");
            a[0].click();
        a.remove();
    });
});
