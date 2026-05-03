"Crear una función que invierta un string sin usar .reverse()."

function inver_name(x){
    if (x === null){
        console.log("no hay nada")
    }
    else{
        const numero = x.length
        resultado = "";
        for (i = numero - 1; i >= 0; i--){
            resultado += x[i]
        }

        return resultado
    }
}

peticion = inver_name("johan")
imprimir = peticion
console.log(imprimir)