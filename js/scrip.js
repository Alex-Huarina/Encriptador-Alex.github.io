function encriptar(texto) {
    var vector = volverVector(texto);
    for(var i = 0; i < vector.length; i++){                    
        if(vector[i] == "a"){
                vector[i] = "ai";
            }else{
                if(vector[i] == "e"){
                    vector[i] = "enter";
                }else{
                    if(vector[i] == "i"){
                        vector[i] = "imes";
                    }else{
                        if(vector[i] == "o"){
                            vector[i] = "ober";
                        }else{
                            if(vector[i] == "u"){
                                vector[i] = "ufat";
                            }
                        }
                    }
                }
            }
    }
    texto = volverTexto(vector);
    return texto;                
}

function desencriptar(texto) {
    var vector = volverVector(texto);
    var vectorDesencriptado = [];
    var indice = 0;
    for(var i = 0; i<vector.length;i++){
        if(vector[i] == "a" && vector[i+1] == "i"){
            vectorDesencriptado[indice] = "a";
            i++;
            indice++;
        }else{
            if(vector[i] == "e" && vector[i+1] == "n" && vector[i+2] == "t" && vector[i+3] == "e" && vector[i+4] == "r"){
                vectorDesencriptado[indice] = "e";
                i+=4;
                indice++;
            }else{
                if (vector[i] == "i" && vector[i+1] == "m" && vector[i+2] == "e" && vector[i+3] == "s") {
                    vectorDesencriptado[indice] = "i";
                    i+=3;
                    indice++;
                }else{
                    if (vector[i] == "o" && vector[i+1] == "b" && vector[i+2] == "e" && vector[i+3] == "r") {
                        vectorDesencriptado[indice] = "o";
                        i+=3;
                        indice++;
                    }else{
                        if (vector[i] == "u" && vector[i+1] == "f" && vector[i+2] == "a" && vector[i+3] == "t") {
                            vectorDesencriptado[indice] = "u";
                            i+=3;
                            indice++;
                        }else{
                            vectorDesencriptado[indice] = vector[i];
                            indice++;
                        }
                    }
                }
            }
        }
    }
    texto = volverTexto(vectorDesencriptado);
    return texto;  
}

function controlLetras(texto){
    var vector = volverVector(texto);
    for(var i=0;i<vector.length;i++){
        if(!(vector[i].charCodeAt()<123 && vector[i].charCodeAt()>96 || vector[i].charCodeAt()==32)){
            return false;
        }
    }
    return true;
}

function volverTexto(vector) {
    var texto = vector.toString();
    return texto.replace(/,/g,"");                
}

function volverVector(texto) {
    var vector = texto.split('');
    return vector;
}

function encriptacion() {
    var textoEntrada = document.getElementById("texto").value;
    var textoSalida = document.getElementById("textoVacio");
    var btnCopiar = document.getElementById("copiar");
    if(controlLetras(textoEntrada) && textoEntrada != ""){
        var textoEncriptado = encriptar(textoEntrada);
        textoSalida.innerHTML= textoEncriptado;
        btnCopiar.style.display = "block";
        btnCopiar.style.visibility = "visible";

    }else{
        if(textoEntrada == ""){
            alert("Escriba algo en el campo 'Ingrese el texto aqui'");
        }else{
            alert("Solo letras minúsculas y sin acentos");
        }
    }
}

function desencriptacion() {
    var textoEntrada = document.getElementById("texto").value;
    var textoSalida = document.getElementById("textoVacio");
    var btnCopiar = document.getElementById("copiar");
    if(controlLetras(textoEntrada) && textoEntrada != ""){
        var textoEncriptado = desencriptar(textoEntrada);
        textoSalida.innerHTML= textoEncriptado;
        btnCopiar.style.display = "block";
        btnCopiar.style.visibility = "visible";

    }else{
        if(textoEntrada == ""){
            alert("Escriba algo en el campo 'Ingrese el texto aqui'");
        }else{
            alert("Solo letras minúsculas y sin acentos");
        }
    }
}

function copiar() {
    var texto = document.getElementById("textoVacio").innerHTML;
    navigator.clipboard.writeText(texto);
}

var btnEncriptar = document.getElementById("encriptar");
var btnDesencriptar = document.getElementById("desencriptar");
var btnCopiar = document.getElementById("copiar");


btnEncriptar.onclick = encriptacion;
btnDesencriptar.onclick = desencriptacion;
btnCopiar.onclick = copiar;
