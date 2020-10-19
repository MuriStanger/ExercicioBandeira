var comboEstados = document.getElementById("comboEstados");

comboEstados.addEventListener("change", bandeira);


function bandeira() {
    if (comboEstados.value == 1) {
        document.getElementById("img").src = "riogrande.png";
        document.getElementById("nomeEstado").innerHTML = "Rio Grande do Sul";
        console.log(comboEstados.value);

    } else
    if (comboEstados.value == 2) {
        document.getElementById("img").src = "santacatarina.png";
        document.getElementById("nomeEstado").innerHTML = "Santa Catarina";
        console.log(comboEstados.value);

    } else {
        document.getElementById("img").src = "parana.png";
        document.getElementById("nomeEstado").innerHTML = "Paraná";
        console.log(comboEstados.value);
    }
}