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
