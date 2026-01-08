function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  //var hora = 18;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "copilot_manha.png";
    window.document.body.style.background = "rgba(203, 197, 28, 1)";
  } else if (hora < 18) {
    // Boa tarde!
    img.src = "copilot_tarde.png";
    window.document.body.style.background = "rgba(207, 170, 4, 1)";
  } else {
    // Boa noite
    img.src = "copilot_noite.png";
    window.document.body.style.background = "rgba(8, 43, 81, 1)";
  }
}
