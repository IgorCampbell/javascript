function contar() {
  var tinicio = window.document.getElementById("tinicio");
  var inicio = Number(tinicio.value);
  var tfim = document.querySelector("input#tfim");
  var fim = Number(tfim.value);
  var tpasso = document.getElementById("tpasso");
  var passo = Number(tpasso.value);
  var res = document.getElementById("res");
  var resultado = ``;
  var contador = inicio;

  if (!tinicio.value || !tfim.value) {
    res.innerHTML = "Impossível contar";
  } else {
    if (!tpasso.value || passo == 0) {
      alert("Passo inválido. Considerando o valor 1 para o passo.");
      tpasso.value = 1;
      passo = 1;
    }
    while (contador <= fim) {
      resultado += `${contador} ➡️ `;
      contador += passo;
    }
    resultado += `🏁`;
    res.innerHTML = resultado;
  }
}

/*var inicio = 5
var fim = 12
var passo = 2

contar()

function contar() {
  var resultado = ``;
  var contador = inicio;
  while (contador <= fim) {
    resultado += `${contador} ➡️ `;
    contador += passo;
  }
  resultado += `🏁`;
  console.log(resultado);
}
  */
