menuDesayuno = [
    { tipo: "primero", nombre: "Tostadas con tomate", precio: 9.99 },
    { tipo: "primero", nombre: "Avena con frutos del bosque", precio: 7.5 },
    { tipo: "primero", nombre: "Yogur natural con fruta", precio: 5.5 },
    { tipo: "segundo", nombre: "Tortilla francesa", precio: 9.99 },
    { tipo: "segundo", nombre: "Sándwich vegetal", precio: 10.0 },
    { tipo: "segundo", nombre: "Pintxo de tortilla", precio: 7.5 },
    { tipo: "postre", nombre: "Croissant relleno de chocolate", precio: 4.0 },
    { tipo: "postre", nombre: "Galletas de coco", precio: 3.5 },
    { tipo: "postre", nombre: "Macedonia", precio: 2.75 },
];

menuComida = [
    { tipo: "primero", nombre: "Ensalada mixta", precio: 9.99 },
    { tipo: "primero", nombre: "Sopa de marisco", precio: 10.5 },
    { tipo: "primero", nombre: "Gazpacho", precio: 11.25 },
    { tipo: "segundo", nombre: "Merluza en salsa", precio: 15.75 },
    { tipo: "segundo", nombre: "Cachopo con patatas", precio: 17.0 },
    { tipo: "segundo", nombre: "Solomillo de cerdo", precio: 14.99 },
    { tipo: "postre", nombre: "Helado", precio: 3.5 },
    { tipo: "postre", nombre: "Tarta de queso", precio: 4.99 },
    { tipo: "postre", nombre: "Natillas", precio: 4.5 },
];

menuCena = [
    { tipo: "primero", nombre: "Patatas 6 salsas", precio: 5.75 },
    { tipo: "primero", nombre: "Ración de croquetas", precio: 7.25 },
    { tipo: "primero", nombre: "Calamares fritos", precio: 6.25 },
    { tipo: "segundo", nombre: "Hamburguesa completa", precio: 12.25 },
    { tipo: "segundo", nombre: "Pizza marinera", precio: 11.0 },
    { tipo: "segundo", nombre: "Sándwich completo", precio: 10.25 },
    { tipo: "postre", nombre: "Fruta fresca", precio: 3.5 },
    { tipo: "postre", nombre: "Arroz con leche", precio: 4.99 },
    { tipo: "postre", nombre: "Brownie de chocolate", precio: 3.75 },
];

comentarios = [
    "Esa opción nunca falla",
    "Esa es la especialidad de la casa",
    "¡Qué buena elección!",
    "Wow, ese también es mi plato favorito",
    "Ese plato está increíble",
];

function randomComentario(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

function platos(mensaje = "", tipoMenu, tipoPlato) {
    let carta = `${mensaje}\n`;
    tipoMenu.forEach((item) => {
        if (item.tipo == tipoPlato) {
            carta += `${item.nombre} - ${item.precio} €\n`;
        }
    });
    return carta;
}

function menuCompleto(tipoMenu) {
    const menu =
        "El menú para hoy es el siguiente:\n" +
        platos("\n--- Plato Principal ---", tipoMenu, "primero") +
        platos("\n--- Segundo Plato ---", tipoMenu, "segundo") +
        platos("\n--- Postres ---", tipoMenu, "postre");

    // const cartaCompleta = carta.join("\n");

    alert(menu);
}

function filtrarOpciones(tipoMenu, tipoPlato) {
    const opciones = [];
    tipoMenu.forEach((item) => {
        if (item.tipo == tipoPlato) {
            opciones.push(item.nombre.toLocaleLowerCase());
        }
    });
    return opciones;
}

function comenzarPedido() {
    while (true) {
        const bienvenida = prompt(
            "Bienvenido al restaurante DevCamp, introduzca la hora (hh) en formato 24h para acceder al servicio"
        );

        const regexHora = /^(0[0-9]|1[0-9]|2[0-3])$/;

        if (regexHora.test(bienvenida)) {
            const hora = parseInt(bienvenida);
            if (hora >= 5 && hora <= 11) {
                menuCompleto(menuDesayuno);

                while (true) {
                    const platoPrincipal = prompt(
                        "Elige un plato principal: \n" +
                            platos(
                                "\n--- Plato Principal ---",
                                menuDesayuno,
                                "primero"
                            )
                    );

                    const opcionesPP = filtrarOpciones(menuDesayuno, "primero");
                    if (
                        opcionesPP.includes(platoPrincipal.toLocaleLowerCase())
                    ) {
                        alert(randomComentario(comentarios));
                        break;
                    } else {
                        alert(
                            "El primer plato debe encontrarse entre las opciones"
                        );
                        break;
                    }
                }
            } else if (hora >= 12 && hora <= 17) {
                menuCompleto(menuComida);
            } else if (hora >= 18 && hora <= 23) {
                menuCompleto(menuCena);
            } else {
                alert("En este horario no tenemos servicio.");
            }
            break;
        } else {
            alert("La hora debe ser un número de dos dígitos entre 00 y 23");
        }

        // if (hora > 5 && hora < 11) {
        //     carta(menuDesayuno);
        // }
    }
}

comenzarPedido();
