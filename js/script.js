const AreaTexto = document.getElementById("AreaTexto");
const BotonEncriptar = document.getElementById("BotonEncriptar");
const BotonDesencriptar = document.getElementById("BotonDesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const MensajeFinal = document.getElementById("MensajeFinal");
const ImagenMuneco = document.getElementById("ImagenMuneco");
const MensajeAbajo = document.getElementById("MensajeAbajo");
const TajertaDerecha = document.getElementById("TarjetaDerecha");


   // La letra "e" es convertida para "enter
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

let remplazar= [
    ["e", "enter"],
    ["o", "ober"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["u","ufat"],
]


const remplace = (nuevoValor) => {
    MensajeFinal.innerHTML = nuevoValor;

    ImagenMuneco.classList.add("oculto");

    AreaTexto.value="";
    MensajeAbajo.style.display = "none";
    botoncopiar.style.display = "block";
    TajertaDerecha.classList.add("ajustar"); 
    MensajeFinal.classList.add("ajustar");
}

//Ajustar código

const reset = () => {
    MensajeFinal.innerHTML = "";

    ImagenMuneco.classList.remove("oculto");
    MensajeAbajo.style.display = "block";
    botoncopiar.style.display = "none";
    TajertaDerecha.classList.remove("ajustar"); 
    MensajeFinal.classList.remove("ajustar");
    AreaTexto.focus();
}


BotonEncriptar.addEventListener("click", () => { 
    const texto = AreaTexto.value.toLowerCase()
    if(texto != "") { 
        function encriptar(newText) {
            for(let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar [i][1]) 
                };
            };
            return newText 
        };    
    }else {
        alert("Ingrese texto a encriptar")
        reset();
    }
    //const textoEncriptado = encriptar(texto);
    remplace(encriptar(texto));


});


BotonDesencriptar.addEventListener("click",() => {
    const texto = AreaTexto.value.toLowerCase();
    if(texto != "") {
        function desencriptar(newText) {
            for(let i = 0; i< remplazar.length; i++){
                if(newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText;
        };    
    } else {
        alert("Ingrese texto a Desencriptar")
        reset();
    }

    remplace(desencriptar(texto))

} );

botoncopiar.addEventListener("click",() => {
    let texto = MensajeFinal; 
    //navigator.clipboard.writeText(texto.value); No es compatabile con telefonos
    texto.select();
    document.execCommand("copy")
    alert("El texto fue copiado");
    reset(); 
})