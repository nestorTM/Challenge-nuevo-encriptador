var encriptarTexto = "";
var desencriptarTexto ="";

//funcion a realizar cuando lee un click del boton encriptar
function f_encriptar(){
     //capturar el textarea a una variable
    let texto_copiado = capturarTexto();
    //evaluando si hay  caracteres en el textarea
    if(texto_copiado.value == ""){
        noSeEncontroTexto();
    }
    else{
        //leer el textarea de clase="texto_a_encriptar"
        encriptarTexto = texto_copiado.value;

        seEncontroTexto();

        //limpiar el textarea
        texto_copiado.value="";

        //enviar la respuesta al recuadro de respuesta
        encriptar(encriptarTexto);
        
    }
    
}

//funcion a realizar cuando lee un click del boton desencriptar
function f_desencriptar(){

    //capturar el textarea a una variable
    let texto_copiado = capturarTexto();

    //evaluando si hay  caracteres en el textarea
    if(texto_copiado.value == ""){

        noSeEncontroTexto();
    }
    else{
        //leer el textarea de clase="texto_a_encriptar"
        desencriptarTexto = texto_copiado.value;

        seEncontroTexto();

         //limpiar el textarea
        texto_copiado.value="";
        
        //enviar la respuesta al recuadro de respuesta
        desencriptar(desencriptarTexto);
    }
}

//funcion que evalua el contenido del textarea, si no existen caracteres  oculta el baner de respuesta y muestra un banner de texto no encontrado
function noSeEncontroTexto(){

    const ocultar=document.querySelector('.ocultar_texto_encontrado');
    const mostrar=document.querySelector('.texto_no_encontrado');
    ocultar.style.display='none';
    mostrar.style.display='block';

}

//funcion que evalua el contenido del textarea, si existen caracteres validos oculta el banner de sin texto y muestra el espacio de respuesta
function seEncontroTexto(){
    const ocultar=document.querySelector('.texto_no_encontrado');
    const mostrar=document.querySelector('.ocultar_texto_encontrado');
    ocultar.style.display='none';
    mostrar.style.display='block';
    //poner el cursor en el textarea
    document.querySelector('.texto_a_encriptar').focus();
}

//arreglo para encriptar o codificar el texto
function encriptar(texto){
    texto = texto.replace(/e/g,"enter");
    texto = texto.replace(/i/g,"imes");
    texto = texto.replace(/a/g,"ai");
    texto = texto.replace(/o/g,"ober");
    texto = texto.replace(/u/g,"ufat");
    
    mostrarResultado(texto);
}

//arreglo para desencriptar o decodificar el texto
function desencriptar(texto){
    texto = texto.replace(/enter/g,"e");
    texto = texto.replace(/imes/g,"i");
    texto = texto.replace(/ai/g,"a");
    texto = texto.replace(/ober/g,"o");
    texto = texto.replace(/ufat/g,"u");
    
    mostrarResultado(texto);
}

//funcion para enviar la respuesta al bloque de respuesta
function mostrarResultado(textoParaMostrar){
    const resultado=document.querySelector('.texto_encriptado');
    //enviar el texto a el recuadro de respuesta
    resultado.textContent =textoParaMostrar;
}

//funcion para revisar si el textarea cumple con los requisitos minimos de ingreso de caracteres
function capturarTexto(){
    let texto=document.querySelector('.texto_a_encriptar');

    //crear una variable con las limitaciones 
    const limitaciones = /[A-ZÁÉÍÓÚÑÜ¡!¿?"#$%&'()*+,\-./:;<=>@[\\\]^_`{|}~]/;

    //evaluar si cumple con las restricciones o no
    if(limitaciones.test(texto.value)){
        //ocultar el bloque de respuesta y el boton si estaba siendo mostrado
        noSeEncontroTexto();

        //alerta para avisar al usuario que esta ingresndo caracteres invalidos
        alert(`Solo se aceptan letras minusculas, sin acentos ni caracteres especiales, por favor vuelva a intentar`);

        //poner el cursor en el textarea
        document.querySelector('.texto_a_encriptar').focus();
        
    }
    else{
        return texto; 
    }
    
}

//funcion para copiar un texto con un click de el boton copiar
function f_copiar(){
    const copiarTexto = document.querySelector('.texto_encriptado');
    navigator.clipboard.writeText(copiarTexto.textContent);
    document.querySelector('.texto_a_encriptar').focus();
}