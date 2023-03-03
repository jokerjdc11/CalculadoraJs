let numeros = [], numeros_temporales = [], resultado;

let etiqueta_resultado = document.getElementById("resultado");

function calculadora(caracter) {

    let validar_numero = Number.isInteger(caracter);

    if (caracter === "CE") {
        etiqueta_resultado.innerHTML = "¡Ingresa datos a calcular!";
        numeros.splice(0, numeros.length);
        numeros_temporales.splice(0, numeros_temporales.length);
    } else if (validar_numero === true) {
        let num = caracter.toString();
        numeros_temporales.push(caracter);
        numeros.push(num);
        etiqueta_resultado.innerHTML = numeros_temporales.join("");
    } else {
        let nume = caracter.toString();
        numeros.push(nume);
        numeros_temporales.splice(0, numeros_temporales.length);
    };
    
};

function resultado_calcular(caracter){

    if (numeros.length > 0) {
        const str_operador = numeros.join("");
        resultado = eval(str_operador);
        etiqueta_resultado.innerHTML = resultado;
        numeros.splice(0, numeros.length);
        numeros.push(resultado);
    } else {
        etiqueta_resultado.innerHTML = "Syntax error!";
        numeros_temporales.splice(0, numeros_temporales.length);
    };

};
