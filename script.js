let son1 = +prompt("Birinchi sonni kiriting");
let son2 = +prompt("Ikkinchi sonni kiriting");
let box = 1;

for (let i = 0; i < son2; i++) {
  box = box * son1;
}

alert(box);