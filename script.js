let textInput = document.querySelector("#input-texto");
let outInput = document.querySelector("#output");


function criptografar(){
  let texto = textInput.value;
  
  let resultCripto = texto.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat")
  
  
  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    let texto = textInput.value;

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  