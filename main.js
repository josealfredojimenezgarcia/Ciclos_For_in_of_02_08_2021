console.log(Object('José Alfredo'));

// //resultado del string
// for (let i of 'José'){
//     console.log(i)
// }

// //resultado en numero de caracteres
// for (let i in 'José'){
//     console.log(i)
// }


//label
cicloNivel1:
for (let i = 0; i < 10; i++) {
       console.log(i);
       if(i==5){
          continue cicloNivel1;
        
       }
    //    console.log(i); 
    }
for (let i = 0; i < 10; i++) {
//    console.log(i);
   if(i==5){
       break;
    console.log(i);
   }
    
}


// Tabla de multiplicar hasta x numero
let g = parseInt(prompt(`Ingrese la cantidad de tablas a multiplicar`)); //Ultima tabla
for (let i = 0; i < g; i++) {
    console.log(`%cTabla de multiplicar ${i}`, "font-family:cursive;color:orange;");
    for (let x = 0; x < 10; x++) {
        console.log(`%c${i} X ${(x+1)} = ${i*(x+1)}`,"font-family:Arial;");
    }
}


// const multiplo = 3;
// for (let i = 0; i < 10; i++) {
//     console.log(`${multiplo} X ${(i+1)} = ${multiplo*(i+1)}`);
// }





// 
// let i=0;
// const inicializacion = ()=> i;
// const condicion = ()=> (i<10);
// const avance = ()=>i++;
// for(inicializacion(); condicion(); avance()){
//     console.log(`Ciclo numero ${i}`);
// }