//e --> enter; i --> imes; o --> ober; a --> ai; u --> ufat//

function encriptar() {
    var text = document.getElementById("input-text").value.toLowerCase();
    // El uso de la barra / al inicio y al final obligará a JS a revisar toda la palabra//
    //El uso de la letra i afectará a mayúsculas como a minúsculas//
    //El uso de la letra g afectará no sólo a la linea sino a toda la oración también//
    // El uso de la letra m afectará a multiples lineas ó párrafos//
    var txtCifrado = text.replace(/e/img,"enter");  
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");

    document.getElementById("ImgRight").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display ="inherit";
}
function desencriptar() {
    var text = document.getElementById("input-text").value.toLowerCase();
    // El uso de la barra / al inicio y al final obligará a JS a revisar toda la palabra//
    //El uso de la letra i afectará a mayúsculas como a minúsculas//
    //El uso de la letra g afectará no sólo a la linea sino a toda la oración también//
    // El uso de la letra m afectará a multiples lineas ó párrafos//
    var txtCifrado = text.replace(/enter/img,"e");  
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");

    document.getElementById("ImgRight").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display ="inherit";
}
function copiar() {
    var contenido = document.querySelector("#text2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
    }