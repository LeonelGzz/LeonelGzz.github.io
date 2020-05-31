var conteo = 1;
var interval = setInterval('contar()',1000);
var boton = document.getElementById('boton');

function contar() {
   boton.innerHTML=conteo;
   conteo = conteo + 1;
   if (conteo >=4) {
      conteo=1;
   }

}