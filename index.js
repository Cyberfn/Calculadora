function ChamarNum(value) {
    document.getElementById("tela").value += value;
}

function Limpar() {
    document.getElementById("tela").value = "";
}

function Calcular() {
    var expression = document.getElementById("tela").value;
    var result = eval(expression);
    document.getElementById("tela").value = result;
}
