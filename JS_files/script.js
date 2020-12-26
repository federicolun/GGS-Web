function onClickButton(parametro) {
    if (document.getElementById(parametro).innerHTML == "Take a Prrour") {
        document.getElementById(parametro).innerHTML = "uwu prr";

    } else {
        document.getElementById(parametro).innerHTML = "Take a Prrour";
    }

}

function changeHTML() {
    window.location.href = "HTML_files/tour.html";
}