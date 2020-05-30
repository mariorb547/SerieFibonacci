function fibonacci(valor) {
  if ((valor > 0) && (valor <= 12)) {
    var x = 0;
    var arreglo = [];
    valorX = parseInt(valor);
    valorY = (parseInt($("#numero").val()) + 1);

    for (x; x <= valorX; x++) {
      if (x == 0) {
        arreglo.push(0);
      } else if (x == 1) {
        arreglo.push(1);
      } else {
        arreglo.push(arreglo[x - 1] + arreglo[x - 2]);
      }
    }

    if (valorX > valorY) {
      return;
    } else {
      $("#result").html(
        "<strong>Resultado: </strong>" + (arreglo[arreglo.length - 1] + fibonacci(valorX + 1))
      );
      return arreglo[arreglo.length - 1];
    }
  }
}
