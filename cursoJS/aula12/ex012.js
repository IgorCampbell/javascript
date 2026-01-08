var agora = new Date();
var diaSemana = agora.getDay();
var txtDiaSemana;
/*
    0 - Domingo
    1 - Segunda-feira
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sábado
*/

//console.log(diaSemana)

switch (diaSemana) {
  case 0:
    txtDiaSemana = "Domingo";
    break;
  case 1:
    txtDiaSemana = "Segunda-feira";
    break;
  case 2:
    txtDiaSemana = "Terça-feira";
    break;
  case 3:
    txtDiaSemana = "Quarta-feira";
    break;
  case 4:
    txtDiaSemana = "Quinta-feira";
    break;
  case 5:
    txtDiaSemana = "Sexta-feira";
    break;
  case 6:
    txtDiaSemana = "Sábado";
    break;
  default:
    txtDiaSemana = "Erro. Dia da semana não identificado";
}
console.log(`Hoje é ${txtDiaSemana}.`);
