// FUENTES
// https://es.stackoverflow.com/questions/407768/obtener-datos-json-del-localstorage-y-meterlos-en-un-array
// https://www.w3schools.com/js/js_window_location.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Location/href
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// https://www.freecodecamp.org/espanol/news/como-usar-localstorage-en-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// https://developer.mozilla.org/es/docs/Web/API/Node/appendChildhttps://developer.mozilla.org/es/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-juego");
    const tablaBody = document.getElementById("tabla-body");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {

            const nombre = document.getElementById("nombre").value.trim();
            const desarrolladora = document.getElementById("desarrolladora").value.trim();
            const precio = parseFloat(document.getElementById("precio").value);

            if (nombre && desarrolladora && precio) {
                const juego = { nombre, desarrolladora, precio };

                let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
                juegos.push(juego);
                localStorage.setItem("juegos", JSON.stringify(juegos));

                window.location.href = "../pages/lista.html";
            }
        });
    }

    if (tablaBody) {
        const juegos = JSON.parse(localStorage.getItem("juegos")) || [];

        juegos.forEach(juego => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${juego.nombre}</td>
                <td>${juego.desarrolladora}</td>
                <td>${juego.precio}</td>
                <td>${(juego.precio * 1.21).toFixed(2)}</td>
                <td>
                    <button style="background-color: green; color: white;">EDITAR</button>
                    <button style="background-color: red; color: white;">ELIMINAR</button>
                </td>
            `;
            tablaBody.appendChild(fila);
        });
    }
});
