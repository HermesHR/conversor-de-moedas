function Real() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5.17;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido;
}

function Euro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmEuro = valorEmDolarNumerico * 1.01;
    console.log(valorEmEuro);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é R$ " + valorEmEuro.toFixed(2);

    elementoValorConvertido.innerHTML = valorConvertido;
}