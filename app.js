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

function validar(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla==8) return true; // 3
    patron =/[A-Za-z\s]/; // 4
    te = String.fromCharCode(tecla) // 5
    return patron.test(te); // 6
}

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


