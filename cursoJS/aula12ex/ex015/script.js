var res = window.document.getElementById("res");
var img = document.createElement("img");
img.setAttribute("id", "foto");
img.setAttribute("src", "copilot_tarde.png");
var tam = document.createElement("input");
tam.setAttribute("id", "tamanho");
tam.setAttribute("type", "number");
var botaoTamamnho = document.createElement("input");
botaoTamamnho.setAttribute("type", "button");
botaoTamamnho.setAttribute("value", "redimenciconar");
botaoTamamnho.setAttribute("onclick", "redimenciconar()");

function executar() {
  res.innerHTML = "A imagem está abaixo";
  res.innerHTML += "<p>Digite o tamamnho da imagem: </p>";
  res.appendChild(tam);
  res.appendChild(botaoTamamnho);
  res.appendChild(img);
}
function redimenciconar() {
  img.setAttribute("width", tam.value);
}
