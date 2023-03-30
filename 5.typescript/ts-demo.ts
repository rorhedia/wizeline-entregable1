interface Apellido {
    apellido: string;
}

interface Persona extends Apellido {
    name: string;
}

let miObj: Persona = {name: 'Daniel', apellido: 'Heredia'};
console.log(miObj.name);

function miFucion(param: any): Persona {
    return param;
}

miFucion(miObj);

type FuntionX = (param: string) => number;
let funct: FuntionX = (param: string) => {
    return param;
}