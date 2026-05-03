"Crear una función que invierta un string sin usar .reverse()."

function invert_name (x){
    if (x === null){
        console.log("no hay nada")
    }
    else{
        let ultima_letra = []
        const numero = x.length
        for (let i=0; i == numero; i++){
            ultima_letra = x.at(-1)
        }
        const palabra = ultima_letra.reduce((acomulado, name_rever) => {
            return acomulado + name_rever;
            },"");
        }

        return palabra
    }

let llamar = invert_name("johan")
let mostrar = palabra
console.log(mostrar)