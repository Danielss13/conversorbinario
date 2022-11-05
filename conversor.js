const entrada = document.getElementById("entrada");
const botao = document.getElementById("btn");
const saida = document.getElementById("saida");

let numeroDecimal, divisor, resultadoBinario, cociente, resto;

botao.addEventListener("click",()=>{ //Ao clicar no botão de coverter ira validar as informações//
    validarEntrada();
    resultadoBinario = converterDecimalABinario();
    saida.value = invertirCadena(resultadoBinario);
});

const validarEntrada = () => {
    (entrada.value === "") ? alert("insira valores validos") : console.log("todo b")
}

const converterDecimalABinario = () => {
    numeroDecimal = entrada.value;
    divisor = 2;
    let numeroSaida = "";
    while(numeroDecimal >= 2) {
        cociente = Math.trunc(numeroDecimal / divisor);//Enquanto o numero for maior ou igual a 2 continuara dividindo//
        resto = numeroDecimal % divisor;//rebecera o resto da divisão//
        numeroSaida += resto.toString();
        numeroDecimal = cociente;
    }

    let auxiliar = numeroDecimal.toString();
    numeroSaida += auxiliar;
    return numeroSaida;
}

const invertirCadena = (cadenaTexto) => {
    return cadenaTexto.split("").reverse().join("");
}