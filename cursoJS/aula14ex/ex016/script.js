function contar() {
  let tinicio = window.document.getElementById("tinicio");
  let inicio = Number(tinicio.value);
  let tfim = document.querySelector("input#tfim");
  let fim = Number(tfim.value);
  let tpasso = document.getElementById("tpasso");
  let passo = Number(tpasso.value);
  let res = document.getElementById("res");
  let resultado = ``;
  let contador = inicio;

  if (!tinicio.value || !tfim.value) {
    res.innerHTML = "Impossível contar";
  } else {
    if (!tpasso.value || passo <= 0) {
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
