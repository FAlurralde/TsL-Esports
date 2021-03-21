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

document.querySelector(".btnpodio").addEventListener('click', podios);

function podios() {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "podios.json", true);
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