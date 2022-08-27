var checkPoint = false;
var conteudoDisplay = '';
var DisplayDiv = document.getElementById('display');
var operador;
function display(i) {
    if (DisplayDiv.innerText == 0) {
        if (i == '.') {
            conteudoDisplay = '0';
            conteudoDisplay += i;
            DisplayDiv.innerText = conteudoDisplay;
            return;
        }
        else {
            if (conteudoDisplay.indexOf('.') > 0) {
                conteudoDisplay += i;
                DisplayDiv.innerText = conteudoDisplay;
                return;
            }
            conteudoDisplay = i;
            DisplayDiv.innerText = conteudoDisplay;
        }
    }
    else {
        if (i == '.') {
            if (conteudoDisplay.indexOf('.') > 0) {
                if (checkPoint) {
                    conteudoDisplay += i;
                    DisplayDiv.innerText = conteudoDisplay;
                    checkPoint = false;
                }
                return;
            }
            else{
                conteudoDisplay += i;
                DisplayDiv.innerText = conteudoDisplay;
                checkPoint = false;
            }
            return;
        }
        else{
            conteudoDisplay += i;
            DisplayDiv.innerText = conteudoDisplay;
        }
    }
}
function operacoes(i) {
    if (DisplayDiv.innerText == 0) {
        return;
    }
    if (conteudoDisplay.indexOf(operador) > 0) {
        conteudoDisplay = conteudoDisplay.replace(operador, i);
        DisplayDiv.innerText = conteudoDisplay;
        operador = i;
        return;
    }
    else {
        conteudoDisplay += i;
        DisplayDiv.innerText += i;
        operador = i;
        checkPoint = true;
    }

}
function apagarDisplay() {
    DisplayDiv.innerHTML = '0';
    conteudoDisplay = '';
    checkPoint = false;
}
function calcularResultado() {
    var resultado = eval(conteudoDisplay);
    checkPoint = false;
    conteudoDisplay = String(resultado);
    DisplayDiv.innerText = conteudoDisplay;
    
    if ((conteudoDisplay == "undefined") || (conteudoDisplay == "NaN")) {
        conteudoDisplay = '0'
        DisplayDiv.innerText = '0';
    }
}