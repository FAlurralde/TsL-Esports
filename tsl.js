$(window).ready(function() {
    $(".tsl-bn").css({ "color": "rgb(37, 77, 255)" });
    $(".nosotros h3").css({ "letter-spacing": " 2px", "text-shadow": "2px 3px 4px rgb(32, 32, 32)" });
    $(".nosotros").css({ "background": "url(img/pubgm.jpg)", "background-size": "cover" });
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


    result.innerText = " " + (num1 + num2) + ".";

}