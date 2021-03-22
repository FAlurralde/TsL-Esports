$(window).ready(function() {
    $(".tsl-bn").css({ "color": "rgb(37, 77, 255)" });
    $(".nosotros h3").css({ "letter-spacing": " 2px", "text-shadow": "2px 3px 4px rgb(32, 32, 32)" });
    $(".nosotros").css({ "background": "url(img/pubgm.jpg)", "background-size": "cover" });
    $(".local").click(function() {
        $(this).css("background-color", "rgb(25, 252, 5)");
    });
    $(".error").css({ "background-color": "red", "color": "rgb(255, 255, 255)", "font-size": "4.0rem" });
});





function ktest() {
    var num1 = parseInt(document.getElementById("killstest-kills").value);
    var num2 = parseInt(document.getElementById("killstest-position").value);
    var result = document.getElementById("resultado");


    if (num1 < 0) {
        (num1 = +0)
    }
    if (num2 === 1) {
        (num2 = +20);
    } else if (num2 === 2) {
        (num2 = +14);
    } else if (num2 === 3) {
        (num2 = +10);
    } else if (num2 === 4) {
        (num2 = +7);
    } else if (num2 === 5) {
        (num2 = +6);
    } else if (num2 === 6) {
        (num2 = +5);
    } else if (num2 === 7) {
        (num2 = +4);
    } else if (num2 === 8) {
        (num2 = +3);
    } else if (num2 === 9) {
        (num2 = +2);
    } else if (num2 === 10) {
        (num2 = +1);
    } else if (num2 > 10 || num2 < 0 || num2 === null) {
        (num2 = +0);
    }

    var num1 = parseInt(num1);
    var num2 = parseInt(num2);


    result.innerText = "Cantidad total de puntos: " + (num1 + num2) + ".";

}

function checkForm() {
    var nickName = document.getElementById("nickName").value;
    var idpm = document.getElementById("idpm").value;
    var clan = document.getElementById("clanName").value;
    var cell = document.getElementById("cell").value;
    var error1 = document.getElementById("errorNickName")
    var error2 = document.getElementById("errorIdPm")
    var error3 = document.getElementById("errorClan")
    var error4 = document.getElementById("errorCell")

    if (nickName == "") {
        error1.innerHTML = "DEBE COMPLETAR ESTA CASILLA ";
        return false;
    } else if (nickName !== "") {
        error1.innerHTML = ""
    }

    if (idpm == "") {
        error2.innerHTML = "DEBE COMPLETAR ESTA CASILLA ";
        return false;
    } else if (idpm !== "") {
        error2.innerHTML = ""
    }

    if (clan == "") {
        error3.innerHTML = "DEBE COMPLETAR ESTA CASILLA ";
        return false;
    } else if (clan !== "") {
        error3.innerHTML = ""
    }

    if (cell == "") {
        error4.innerHTML = "DEBE COMPLETAR ESTA CASILLA ";
        return false;
    } else if (cell !== "") {
        error4.innerHTML = ""
    }



}



window.onload = function() {

    const baseDeDatos = [{
            id: 1,
            nombre: 'Remera TsL',
            precio: 1000,
            imagen: 'img/reme.jpg'
        },
        {
            id: 2,
            nombre: 'Eecobolsa  TsL',
            precio: 50,
            imagen: 'img/bolsa.jpg'
        },
        {
            id: 3,
            nombre: 'Reloj  TsL',
            precio: 5000,
            imagen: 'img/relog.jpg'
        },
        {
            id: 4,
            nombre: 'Llavero  TsL',
            precio: 500,
            imagen: 'img/llaveros.jpg'
        }

    ];

    const $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    const $carrito = document.querySelector('#carrito');
    const $total = document.querySelector('#total');
    const $botonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;


    function renderItems() {
        for (let info of baseDeDatos) {

            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'cuadro');

            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title', 'compras');
            miNodoTitle.textContent = info['nombre'];

            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid', 'compras');
            miNodoImagen.setAttribute('src', info['imagen']);

            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text', 'compras');
            miNodoPrecio.textContent = info['precio'] + '$';

            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary', 'compras');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito() {

        carrito.push(this.getAttribute('marcador'))

        calcularTotal();

        renderizarCarrito();

        guardarCarritoEnLocalStorage();
    }

    function renderizarCarrito() {

        $carrito.textContent = '';

        let carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach(function(item, indice) {

            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });

            let numeroUnidadesItem = carrito.reduce(function(total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);

            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2', 'compras');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}$`;

            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5', 'compras');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        });
    }

    function borrarItemCarrito() {

        let id = this.getAttribute('item');

        carrito = carrito.filter(function(carritoId) {
            return carritoId !== id;
        });

        renderizarCarrito();

        calcularTotal();

        guardarCarritoEnLocalStorage();
    }

    function calcularTotal() {

        total = 0;

        for (let item of carrito) {

            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }

        let totalDosDecimales = total.toFixed(2);

        $total.textContent = totalDosDecimales;
    }

    function vaciarCarrito() {

        carrito = [];

        renderizarCarrito();
        calcularTotal();

        localStorage.clear();
    }

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {

        if (miLocalStorage.getItem('carrito') !== null) {

            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }


    $botonVaciar.addEventListener('click', vaciarCarrito);


    cargarCarritoDeLocalStorage();
    renderItems();
    calcularTotal();
    renderizarCarrito();
}


/* 
const podios = [{
        "scrim": "Master Latam",
        "lugar1": "TeamQueso",
        "lugar2": "TsL-Esports",
        "lugar3": "B4 ",
        "MVP": "TQAyala",

    }, {
        "scrim": "TodoGamerMaster",
        "lugar1": "TsL-Esports",
        "lugar2": "TeamQueso",
        "lugar3": "Ultra",
        "MVP": "TsLlion",
    }, {
        "scrim": "PMPL",
        "lugar1": "Navi",
        "lugar2": "TsL-Esports",
        "lugar3": "Futbolis ",
        "MVP": "TsLoddin",
    }

];

document.querySelector(".btnpodio").addEventListener('click', podios);

function podios() {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "podios", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let resultados = JSON.parse(this.responseText);
            let resPodio = document.querySelector("#res-podio");
            resPodio.innerHTML = "";
            for (let item of resultados) {
                resPodio.innerHTML += `
            <div>
             <div>${item.scrim}</div>
              <div>${item.lugar1}</div>
              <div>${item.lugar2}</div>
              <div>${item.lugar3}</div>
              <div>${item.MVP}</div> 
            </div>`
            }
        }
    }
}
*/