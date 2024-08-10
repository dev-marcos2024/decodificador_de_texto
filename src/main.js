let textoDigitado = document.querySelector('[name="texto"]')
let displayTexto = document.getElementById('texto_criptografado')
let btnCriptografar = document.getElementById('btn-cript')
let btnDescriptografa = document.getElementById('btn-descript')
let btnCopiar = document.getElementById("copiar")

//! Função para criptografar texto
function criptografar(texto) {
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    return textoCriptografado;
}

//! Função para desencriptografar texto
function desencriptografar(textoCriptografado) {
    let textoDesencriptografado = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    return textoDesencriptografado;
}


//! Adicionando Eventos nos botoes

// Botao Criptografar
btnCriptografar.addEventListener('click', function(){
     
    if (textoDigitado.value) {
        let string = criptografar(textoDigitado.value);
        displayTexto.innerHTML = string;

        document.getElementById('con_right_main').className = 'ocultar'
        document.getElementById('result').className = 'texto-codificado'
        textoDigitado.value = ""
    }
}
)

// Botao Descriptografar
btnDescriptografa.addEventListener('click', function(){
     
    if (textoDigitado.value) {
        let string = desencriptografar(textoDigitado.value);
        displayTexto.innerHTML = string;

        document.getElementById('con_right_main').className = 'ocultar'
        document.getElementById('result').className = 'texto-codificado'
        textoDigitado.value = ""
    }
}
)

// Boatao Copiar texto
btnCopiar.addEventListener('click', ()=>{
    const paragrafo = document.getElementById('texto_criptografado').innerText;
    navigator.clipboard.writeText(paragrafo)
    displayTexto.innerHTML = ""

    document.getElementById('result').className = 'ocultar'
    document.getElementById('con_right_main').className = 'exibir'
})









