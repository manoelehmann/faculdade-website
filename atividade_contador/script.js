function contar() {
  var inicio=parseInt(document.getElementById('inicio').value);
  var fim=parseInt(document.getElementById('fim').value);

  var numerosPares=0;
  var numerosImpares=0;
  var numerosPrimos=0;

  for (var i=inicio; i<=fim; i++) {
    if (i % 2 === 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }

    if (isPrimo(i)) {
      numerosPrimos++;
    }
  }

  document.getElementById('resultado').innerHTML =
    'Números Pares: ' + numerosPares + '<br>' +
    'Números Ímpares: ' + numerosImpares + '<br>' +
    'Números Primos: ' + numerosPrimos;
}

function isPrimo(numero) {
  if (numero<2) {
    return false;
  }

  for (var i=2; i<numero; i++) {
    if (numero%i===0) {
      return false;
    }
  }

  return true;
}