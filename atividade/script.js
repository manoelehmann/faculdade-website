
const btnComecaJogo = document.getElementById("btnComecaJogo");
const entrada = document.getElementsByName("tentativa")[0];

entrada.hidden = true;

let numeroAleatorio;

btnComecaJogo.addEventListener("click", function () {
    numeroAleatorio = sorteadorAleatorio();

    //Botão fica visível
    entrada.hidden = false;
});

entrada.addEventListener("blur", function () {

    let palpite = entrada.value;

    if(palpite == numeroAleatorio){
        alert("Acertouuuu!");
    } else {
        alert("Errrrrrou! Era o Nº" + numeroAleatorio);
    }

    entrada.value = "";
    entrada.hidden = true;
});

function sorteadorAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}
