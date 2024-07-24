const btnEncriptar = document.getElementById("botonEncriptar");
const btnDesencriptar = document.getElementById("botonDesencriptar");
const btnCopiar = document.getElementById("botonCopiar");
const txtResultado = document.getElementById("textoResultado");
const ingresarTxt = document.getElementById("ingresarTexto");
const limpiarImgTxt = document.querySelector(".texto-resultado-container");
const anioActual = document.getElementById("copyright");

function validarIngreso(texto) {
    if (texto != "") {
        const isValid = /^[a-z,ñ\s]*$/.test(texto); // Expresión regular para comprobar solo minúsculas y espacios
        return isValid ? texto : null;
    } else {
        return null;
    }
}

function encriptar() {
    let textoIngresado = document.getElementById("ingresarTexto").value;
    let textoValidado = validarIngreso(textoIngresado);

    if (textoValidado === null) {
        alert(
            "El texto no debe estar vacío y solo debe contener letras minúsculas sin acentos ni caracteres especiales."
        );
        ingresarTxt.value = "";
        return;
    }

    // en la expresión regular la i: hace que sea insensible a mayúsculas y minúsculas,
    // la g: toma en cuenta toda la linea de texto incluyendo espacios y saltos de linea
    // la m: permite búsqueda en múltiples líneas

    let textoEncriptado = textoValidado
        .replace(/e/gim, "enter")
        .replace(/i/gim, "imes")
        .replace(/a/gim, "ai")
        .replace(/o/gim, "ober")
        .replace(/u/gim, "ufat");

    txtResultado.innerHTML = textoEncriptado;
    btnCopiar.style.visibility = "inherit";
    limpiarImgTxt.style.display = "none";
    // ingresarTxt.value = ""; //por si quiero limpiar el campo ingreso de texto
}

function desencriptar() {
    let textoIngresado = document.getElementById("ingresarTexto").value;
    let textoValidado = validarIngreso(textoIngresado);

    if (textoValidado === null) {
        alert(
            "El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales."
        );
        ingresarTxt.value = "";
        return;
    }

    let textoDesencriptado = textoValidado
        .replace(/enter/gim, "e")
        .replace(/imes/gim, "i")
        .replace(/ai/gim, "a")
        .replace(/ober/gim, "o")
        .replace(/ufat/gim, "u");

    txtResultado.innerHTML = textoDesencriptado;
    btnCopiar.style.visibility = "inherit";
    limpiarImgTxt.style.display = "none";
    // ingresarTxt.value = ""; //por si quiero limpiar el campo ingreso de texto
}

function copiarTexto() {
    let contenidoCopiado = txtResultado.value;
    navigator.clipboard.writeText(contenidoCopiado);
}

btnEncriptar.addEventListener("click", encriptar);

btnDesencriptar.addEventListener("click", desencriptar);

btnCopiar.addEventListener("click", copiarTexto);

ingresarTxt.addEventListener("focus", () => {
    ingresarTxt.value = "";
});

anioActual.innerHTML = `&copy Copyright ${new Date().getFullYear()}`;
