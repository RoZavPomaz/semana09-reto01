

// ejercicio 01-----

function positivonegativo() {
    var post = document.getElementById('post').value;

    var resultadoInput = document.getElementById("resultado1");

    if (post > 0) {
        resultadoInput.value = "Es positivo";
    } else if (post < 0) {
        resultadoInput.value = "Es negativo";
    } else {
        resultadoInput.value = "Es cero";
    }

}


// ejercicio 02-----


function mayormenor() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    var resultadoInput = document.getElementById("resultado2");

    if (number1 > number2) {
        resultadoInput.value = "El numero: " + number1 + " es mayor";
    } else if (number1 < number2) {
        resultadoInput.value = "El numero: " + number2 + " es mayor";
    } else {
        resultadoInput.value = "Son iguales, vuelva a intentar.";
    }

}



// ejercicio 03-----


function divisible2() {
    var divisible = document.getElementById('divisible').value;

    var resultadoInput = document.getElementById("resultado3");

    if (divisible % 2 == 0) {
        resultadoInput.value = "" + divisible + ", Es divisible entre 2";
    } else {
        resultadoInput.value = "" + divisible + ", No es divisible entre 2";
    }

}



// ejercicio 04-----


function factorial1() {
    var factorial = document.getElementById('factorial').value;

    var resultadoInput = document.getElementById("resultado4");
    var factorial1 = 1;
    for (var i = factorial; i >= 1; i--) {
        factorial1 *= i;
    }
    resultadoInput.value = "El factorial es, " + factorial1 + "";

}

// ejercicio 05-----


function iteracion1() {
    var iterar = document.getElementById('iterar').value;

    var resultados5 = "";

    for (var b = 1; b <= iterar; b++) {
        if (b % 2 === 0) {
            resultados5 += b + " es par\n";

        } else {
            resultados5 += b + " es impar\n";
        }
    }
    alert(resultados5);
}


// ejercicio 06-----


function loteria() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;


    if (isNaN(numero1) || isNaN(numero2) || numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
        alert("Por favor, introduce números válidos entre 1 y 50.");
    } else {
        var resultado6 = "";

        if (Math.random() < 0.5) {
            resultado6 = numero1;
        } else {
            resultado6 = numero2;
        }
    }
    alert("El número " + resultado6 + ", es el ganador ¡Lotería! ");
}


// ejercicio 07-----


function iteracion2() {
    var iterar2 = document.getElementById('iterar2').value;

    var resultados7 = "";

    for (var b = 1; b <= iterar2; b++) {
        if (b % 3 === 0 && b % 5 === 0) {
            resultados7 += "FizzBuzz\n";

        } else if (b % 3 === 0) {
            resultados7 += "Fizz\n";
        } else if (b % 5 === 0) {
            resultados7 += "Buzz\n";
        } else {
            resultados7 += b + "\n";
        }
    }
    alert(resultados7);
}

// ejercicio 08-----


function puntuacion() {
    var puntaje = document.getElementById('puntaje').value;

    puntaje = parseFloat(puntaje);

    if (puntaje >= 1 && puntaje <= 10) {
        if (puntaje < 6) {
            alert("REPROBADO");
        } else if (puntaje >= 6 && puntaje <= 8) {
            alert("REGULAR");
        } else if (puntaje === 9) {
            alert("BIEN");
        } else if (puntaje === 10) {
            alert("EXCELENTE");
        }
    } else {
        alert("Error: La calificación debe estar entre 1 y 10.");
    }
}


// ejercicio 09-----


function helados() {
    var heladooption = document.getElementById('heladooption').value;


    if (heladooption === "oreo") {
        alert("Helado con topping de oreo cuesta, 60 MXN")
    } else if (heladooption === "kitkat") {
        alert("Helado con topping de kitkat cuesta, 75")
    } else if (heladooption === "brownie") {
        alert("No tenemos este topping, lo sentimos, el helado solo esta, 50 MXN")
    } else {
        alert("El helado solo esta, 50 MXN")
    }
}


// ejercicio 10-----


function calcularPrecio() {
    var curso = document.getElementById('curso').value.toLowerCase();
    var beca = document.getElementById('beca').value.toLowerCase();

    const precios = {
        "course": 4999,
        "carrera": 3999,
        "master": 2999
    };

    const descuentos = {
        "facebook": 0.2,
        "google": 0.15,
        "jesua": 0.5
    };

    if (precios.hasOwnProperty(curso) && descuentos.hasOwnProperty(beca)) {
        var precioMensual = precios[curso];
        var descuento = descuentos[beca];
        var precioConDescuento = precioMensual * (1 - descuento);
        var duracion = (curso === "course") ? 2 : ((curso === "carrera") ? 6 : 12);

        var precioTotal = precioConDescuento * duracion;

        alert(`Detalle del curso:
                    Tipo de curso: ${curso}
                    Precio mensual sin descuento: ${precioMensual} MXN
                    Beca aplicada: ${beca}
                    Precio mensual con descuento: $${precioConDescuento} MXN
                    Duración del curso: ${duracion} meses
                    Precio total a pagar: $${precioTotal} MXN`);
    } else {
        alert("Curso o beca no válida");
    }
}


// ejercicio 11-----

function calcularTotalAPagar() {
    var tipoVehiculo = document.getElementById('tipoVehiculo').value.toLowerCase();
    var kmsRecorridos = parseFloat(document.getElementById('kmsRecorridos').value);

    const preciosPorKilometro = {
        "coche": 0.20,
        "moto": 0.10,
        "autobus": 0.5
    };

    const cargoExtraPorLitros = {
        "rango1": 5,
        "rango2": 10
    };

    if (preciosPorKilometro.hasOwnProperty(tipoVehiculo)) {
        var precioPorKilometro = preciosPorKilometro[tipoVehiculo];
        var costoPorDistancia = precioPorKilometro * kmsRecorridos;

        var cargoExtra = 0;
        if (kmsRecorridos >= 0 && kmsRecorridos <= 100) {
            cargoExtra = cargoExtraPorLitros.rango1;
        } else {
            cargoExtra = cargoExtraPorLitros.rango2;
        }

        var totalAPagar = costoPorDistancia + cargoExtra;

        alert(`Detalle del viaje:
                    Tipo de vehículo: ${tipoVehiculo}
                    Kilómetros recorridos: ${kmsRecorridos} km
                    Precio por kilómetro: $${precioPorKilometro.toFixed(2)}
                    Costo por distancia: $${costoPorDistancia.toFixed(2)}
                    Cargo extra por litros consumidos: $${cargoExtra.toFixed(2)}
                    Total a pagar: $${totalAPagar.toFixed(2)}`);
    } else {
        alert("Tipo de vehículo no válido");
    }
}

