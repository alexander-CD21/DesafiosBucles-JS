// Imprimir impares de 1-20
for ( let i = 1; i <=20; i++){
    if (i%2!==0){
        console.log(i);
    }
}

//Disminuir multiplos de 3
for (let i=100 ; i>=0; i--){
    if (i%3===0){
        console.log(i);
    }
}

// Imprime la secuencia 4,2.5,1,-0.5,-2,-3.5
x=0
while(x<10){
    console.log(4,",",2.5,",",1,",",-0.5,",",-2,",",-3.5);
    x++;
}

//sigma
let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log("Suma:");
console.log(sum);

//Factorial

let product=1;
for( let i=1;i<=12;i++){
    product*= i;
}
console.log("Producto:");
console.log(product);