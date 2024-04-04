function chunk_maker(number) {
    if (number > 1) {
         return `chunk-${chunk_maker(number-1)}`
    }else if(number === 1){
        return "chunk"
    }else if(number === 0){
        return ""
    }

}

console.log(chunk_maker(3))

// Resolução parecida com a OBC
// function chunk_maker(number) {
//     if(number === 0) return ""
//     return number == 1 ? "chunk" : `chunk-${chunk_maker(number-1)}`


// }