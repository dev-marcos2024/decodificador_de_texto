let textoDigitado = document.querySelector('[name="texto"]');
let displayTexto = document.getElementById('texto_criptografado');
let btnCriptografar = document.getElementById('btn-cript')
let btnDescriptografa = document.getElementById('btn-descript');
let btnCopiar = document.getElementById("copiar");

//! Funcao para verificar se existe caractere especiais na string
function temApenasLetras(str) {
    // Expressão regular para encontrar caracteres que não sejam letras
    const regex = /[^a-zA-Z]/;
    return regex.test(str);
}


//! Função para criptografar texto
function criptografar(texto) {
    let str = texto.trim();
    let validacao = !temApenasLetras(str)
   
    if (validacao) {
        return [str.toLowerCase()
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat") , validacao]
    }else {
        document.getElementById("alert").className = "alert";
        return ["", validacao]
    }
}

//! Função para desencriptografar texto
function desencriptografar(textoCriptografado) {
    return textoCriptografado.toLowerCase()
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


//TODO: Adicionando Eventos nos botoes

//! Botao Criptografar
btnCriptografar.addEventListener('click', function(){
    let result  = criptografar(textoDigitado.value);
    if (result[1]) {
        displayTexto.innerHTML = result[0]
        document.getElementById('con_right_main').className = 'ocultar'
        document.getElementById('result').className = 'texto-codificado'
        textoDigitado.value = ""
    }
}
)
textoDigitado.addEventListener('input', function() {
            document.getElementById("alert").className = "";
        });

//! Botao Descriptografar
btnDescriptografa.addEventListener('click', function(){
    if (textoDigitado.value) {
        displayTexto.innerHTML = desencriptografar(textoDigitado.value);
        document.getElementById('con_right_main').className = 'ocultar'
        document.getElementById('result').className = 'texto-codificado'
        textoDigitado.value = ""
    }
}
)

//! Boatao Copiar texto
btnCopiar.addEventListener('click', ()=>{
    const paragrafo = document.getElementById('texto_criptografado').innerText;
    navigator.clipboard.writeText(paragrafo)
    displayTexto.innerHTML = ""
    document.getElementById('result').className = 'ocultar'
    document.getElementById('con_right_main').className = 'exibir'
})











