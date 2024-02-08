function encriptar () {
	var texto = document.getElementById("textoEncriptado").value.toLowerCase();

	var textoEncriptado = texto.replace(/e/img, "enter");
	var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
	var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
	var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
	var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

	document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

	document.getElementById("dos").style.display = "show";
	document.getElementById("dos").style.display = "inherit";

	document.getElementById("tres").style.display = "none";

	document.getElementById("botonCopia").style.display = "show";
	document.getElementById("botonCopia").style.display = "inherit";

 

}
function SoloLetras(e){
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "a b c d e f g h i j k l m n ñ o p q u r s t v w x y z";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar solo letras minúsculas, no ingresar caracteres especiales");
 return false;
}
}

/*function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true;
    patron =/[A-Za-z\s]/;
    te = String.fromCharCode(tecla)
    return patron.test(te);
}

*/

function desencriptar () {
	var texto = document.getElementById("textoEncriptado").value;

	var textoEncriptado = texto.replace(/enter/img, "e");
	var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
	var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
	var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
	var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

	document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;


}

function copiar(){
	var contenido = document.querySelector("#textoDesencriptado");

	contenido.select();
	document.execCommand("copy");
	alert("Texto copiado :)")
}


