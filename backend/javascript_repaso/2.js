"Contar cuántas veces aparece cada letra en un texto."

function contador (x){
    let resultado = {}

    for (let i = 0; i < x.length; i ++){
        let letras = x[i]

        if (resultado[letras]){
            resultado[letras]++
        }

        else {
            resultado[letras] = 1
        }
    }

    return resultado
}

let imprimir = contador("calabaza")
console.log(imprimir)