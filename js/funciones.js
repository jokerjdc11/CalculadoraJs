let numeros = [], numeros_temporales = [], resultado, operadores_validos = ["+", "-", "/", "*"];

let etiqueta_resultado = document.getElementById("resultado");

function calculadora(caracter) {

    let validar_numero = Number.isInteger(caracter);

    if (caracter === "CE") {
        etiqueta_resultado.innerHTML = "¡Ingresa datos a calcular!";
        numeros.splice(0, numeros.length);
        numeros_temporales.splice(0, numeros_temporales.length);
    } else if (validar_numero === true || caracter === ".") {
        let num = caracter.toString();
        numeros_temporales.push(caracter);
        numeros.push(num);
        etiqueta_resultado.innerHTML = numeros_temporales.join("");
    } else if (caracter === "C") {
        numeros_temporales.pop();
        etiqueta_resultado.innerHTML = numeros_temporales.join("");
    } else {
        if (caracter === "." && numeros[numeros.length - 1] === ".") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ojito: ¡Operación no válida!'
            });
        } else {
            let nume = caracter.toString();
            numeros.push(nume);
            numeros_temporales.splice(0, numeros_temporales.length);
        }
    };
    
};

function resultado_calcular(caracter){

    let ultimo_caracter = numeros[numeros.length - 1];
    let penultimo_caracter = numeros[numeros.length - 2];
    if (!operadores_validos.includes(ultimo_caracter)) {
        if (numeros.length > 0 && caracter === "=") {
            console.log(`Los números temporales son: ${numeros_temporales}`);
            console.log(`Los números: ${numeros}`);
            const str_operador = numeros.join("");
            if (str_operador.slice(-2) === "/0") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Perro que esta haciendo ñero'
                });
            } else {
                resultado = eval(str_operador);
                etiqueta_resultado.innerHTML = resultado;
                numeros.splice(0, numeros.length);
                numeros.push(resultado);
            };
        } else {
            etiqueta_resultado.innerHTML = "Syntax error!";
            numeros_temporales.splice(0, numeros_temporales.length);
        };
    } else {
        numeros.pop();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ojito: ¡Operación no válida!'
        });
    };
    

};
