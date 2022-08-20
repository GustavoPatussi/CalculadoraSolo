var verificPoint = false;
var numDisplay = '';
var DisplayDiv = document.getElementById('display');
var iAntes;
function display(i) {
  if (DisplayDiv.innerText == 0) {
    if (i == '.') {
      numDisplay = '0';
      numDisplay += i;
      DisplayDiv.innerText = numDisplay;
      return;
    } else {
      if (numDisplay.indexOf('.') > 0) {
        numDisplay += i;
        DisplayDiv.innerText = numDisplay;
        return;
      }
      numDisplay = i;
      DisplayDiv.innerText = numDisplay;
    }
  } else {
    if (numDisplay.indexOf('.') > 0) {
      if (i == '.') {
        if (verificPoint) {
          numDisplay += i;
          DisplayDiv.innerText = numDisplay;
          verificPoint = false;
        }
        return;
      }
    }
    numDisplay += i;
    DisplayDiv.innerText = numDisplay;
  }
}
function operacoes(i) {
  if (DisplayDiv.innerText == 0) {
    return;
  }
  if (numDisplay.indexOf(iAntes) > 0) {
    numDisplay = numDisplay.replace(iAntes, i);
    DisplayDiv.innerText = numDisplay;
    iAntes = i;
    return;
  } else {
    numDisplay += i;
    DisplayDiv.innerText += i;
    iAntes = i;
    verificPoint = true;
  }
}
function apagarDisplay() {
  DisplayDiv.innerHTML = '0';
  numDisplay = '';
  verificPoint = false;
}
function calcularResultado() {
  var pt1 = numDisplay.substring(0, numDisplay.indexOf(iAntes));
  var pt2 = numDisplay.substring(
    numDisplay.indexOf(iAntes) + 1,
    numDisplay.length
  );
  if (iAntes == '+') {
    var resultado = parseFloat(pt1) + parseFloat(pt2);
  }
  if (iAntes == '-') {
    var resultado = parseFloat(pt1) - parseFloat(pt2);
  }
  if (iAntes == '*') {
    var resultado = parseFloat(pt1) * parseFloat(pt2);
  }
  if (iAntes == '/') {
    var resultado = parseFloat(pt1) / parseFloat(pt2);
  }
  verificPoint = false;
  numDisplay = String(resultado);
  DisplayDiv.innerText = numDisplay;
}
