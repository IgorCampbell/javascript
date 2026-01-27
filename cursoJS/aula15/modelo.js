let num = [5, 8, 2, 9, 3];

/*console.log(num);
num.push(1);
console.log(num);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro item do vetor é o número ${num[0]}`);
console.log(num.indexOf(3))*/

/*
for (pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} do vetor é o número ${num[pos]}`);
}*/

for (pos in num) {
  console.log(`A posição ${pos} do vetor é o número ${num[pos]}`);
}
