"Contar cuántas veces aparece cada letra en un texto."

function contador_letra(x){
    let resultado = {}

    for (let i = 0; i < x.length; i++){
        let letra = x[i]

        if (resultado[letra]){
            resultado[letra]++
        } else {
            resultado[letra] = 1
        }
    }

    return resultado
}

let imprimir = contador_letra("manzana")
console.log(imprimir)