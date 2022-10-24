for (let i=2;i<100;i++) { 
    if(i% 2 == 0)console.log(i);
};

//i++ Isso é o mesmo que utilizar i = i + 1.

const valores= [100, 200, 300, 400, 500];

for (let i= 0;i<valores.length;i++) {console.log("Indice:",i, "Valor:",valores[i]); 
}

// ResultadoIndice0Valor100Indice1Valor200Indice2Valor300Indice3Valor400Indice4Valor500

//Foreach
const notas= [8, 9, 10, 6.5, 8.5];

let soma= 0; 
notas.forEach(nota => {soma+=nota;
});

let media=soma/notas.length;
console.log("Média: ",media);