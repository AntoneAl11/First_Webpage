//Declarar un arreglo vacion con el nombre tmec
let tmec = [];

//Declarar un objeto "EdosUnidos"
let EdosUnidos = {
    Nombre: "Estados Unidos",
    Capital: "Washington D.C.",
    Poblacion: 3.319e8,
    Hispano: false
};

//Agregar el objeto EdosUnidos al arreglo tmec
tmec.push(EdosUnidos);

//Agregando un objeto directo al arreglo sin declarar variable con datos de México
tmec.push({
    Nombre: "México",
    Capital: "Ciudad de México",
    Poblacion: 1.267e8,
    Hispano: true
});

//Agregando un objeto directo al arreglo sin declarar variable con datos de Canada
tmec.push({
    Nombre: "Canada",
    Capital: "Ottawa",
    Poblacion: 3.825e7,
    Hispano: false
});

//Imprimir valores para verificar funcionalidad
console.log(tmec);

// Declarar las poblaciones
let pobCan = tmec[2].Poblacion;
let pobUS = tmec[0].Poblacion;
let pobMex = tmec[1].Poblacion;

//Calcular el total de la población
let totalPob = pobCan + pobUS + pobMex;

//Calcular los porcentajes 
let porcentajeMexEnNA = pobMex / totalPob;
let porcentajeMexVsUS = pobMex / pobUS;
let porcentajeMexVsCan = pobMex / pobCan;
let porcentajeUSVsCan = pobUS / pobCan;
let porcentajeCanVsUSMex = pobCan / (pobUS + pobMex);

//Imprimir los resultados
console.log(`Total de población: ${totalPob}`);
console.log(`Porcentaje de Mexicanos en América del Norte: ${porcentajeMexEnNA}`);
console.log(`Porcentaje de México contra la población de Estados Unidos: ${porcentajeMexVsUS}%`);
console.log(`Porcentaje de México contra la población de Canadá: ${porcentajeMexVsCan}%`);
console.log(`Porcentaje de Estados Unidos contra la población de Canadá: ${porcentajeUSVsCan}%`);
console.log(`Porcentaje de Canadá contra la población de Estados Unidos y México: ${porcentajeCanVsUSMex}%`);

