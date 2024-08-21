/* PROGRAMACIÓN 1
SEGUNDO CUATRIMESTRE
TRABAJO PRACTICO NRO 1: "LOS SILOS"
ESTUDIANTE: IGNACIO GABRIEL BRASESCO
GRUPO: 
- JOANA ROMAY
- GERALDINE CARDOZO
- IGNACIO GABRIEL BRASESCO

*/

let siloSoja = {
    capacidad: 10000,
    stock: 3000
};
let siloMaiz = {
    capacidad: 10000,
    stock: 2000
};

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function soja() {
    let pesoSojaIngresado = parseInt(prompt("¿Cuánto peso de soja desea ingresar?"));

    // Validación del peso ingresado
    while (isNaN(pesoSojaIngresado) || pesoSojaIngresado <= 0) {
        pesoSojaIngresado = parseInt(prompt("Ingrese un peso válido de soja:"));
    }

    let stockActualizadoSoja = siloSoja.stock + pesoSojaIngresado;

    if (stockActualizadoSoja <= siloSoja.capacidad) {
        siloSoja.stock = stockActualizadoSoja; // Actualizo el stock de soja
        mostrarMensaje(`Hay espacio suficiente en el silo de soja para descargar el camión. Ahora el stock de soja es de ${siloSoja.stock}`);
    } else {
        mostrarMensaje(`No hay espacio suficiente en el silo de soja para descargar el camión`);
    }
}

function maiz() {
    let pesoMaizIngresado = parseInt(prompt("¿Cuánto peso de maíz desea ingresar?"));

    // Validación del peso ingresado
    while (isNaN(pesoMaizIngresado) || pesoMaizIngresado <= 0) {
        pesoMaizIngresado = parseInt(prompt("Ingrese un peso válido de maíz:"));
    }

    let stockActualizadoMaiz = siloMaiz.stock + pesoMaizIngresado;

    if (stockActualizadoMaiz <= siloMaiz.capacidad) {
        siloMaiz.stock = stockActualizadoMaiz; // Actualizo el stock de maíz
        mostrarMensaje(`Hay espacio suficiente en el silo de maíz para descargar el camión. Ahora el stock de maíz es de ${siloMaiz.stock}`);
    } else {
        mostrarMensaje(`No hay espacio suficiente en el silo de maíz para descargar el camión.`);
    }
}

function ingresarCamion() {
    let menuPrincipal;
    let menu;

    do {
        menuPrincipal = parseInt(prompt("\n*Elija el cereal que quiera ingresar al silo*\n\n1. Soja \n2. Maíz\n\nElija una opción:"));

        switch (menuPrincipal) {
            case 1:
                soja();
                break;

            case 2:
                maiz();
                break;

            default:
                mostrarMensaje("El dato ingresado no es válido.");
                break;
        }

        do {
            menu = parseInt(prompt("1) Volver al menu principal\n2) Salir"));

            if (menu !== 1 && menu !== 2) {
                mostrarMensaje("Ingresa un dato valido");
            } else  {
                (menu === 2)
                mostrarMensaje(`Gracias, vuelvas prontos`);
            }

        } while (menu !== 1 && menu !== 2);

    } while (menu !== 2);  
}

// Iniciar el proceso
ingresarCamion();
