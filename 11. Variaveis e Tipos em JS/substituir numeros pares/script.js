let array = []

function substituiPares(array){
    if(!array.length) return -1;
    if(!array) return -1;

    for(i=0;i<array.length; i++){
        if(array[i]===0){
            console.log("Você já é zero")
        }else if(array[i]%2===0){
            console.log(`Substituindo ${array[i]} por 0 ....`)
            array[i]=0
        }

    }
    return array
}

console.log(substituiPares(array))
