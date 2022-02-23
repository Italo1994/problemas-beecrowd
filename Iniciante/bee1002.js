let raio=0, pi = 3.14159, area=0; // inicializando as variáveis

raio = 100.64;
//area = Math.ceil( Math.toFixed( pi * (raio ** 2)) );
area = pi * (raio ** 2);
area = area.toFixed(4);

console.log("A=" + area + "\n");
