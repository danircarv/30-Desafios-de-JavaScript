

function average(){
    var notas = []

    do{
        option = parseInt(prompt("Selecione o número da opção desejada: \n1 - Adicionar nota \n2 - Calcular média \n3 - Sair do programa" ))

        if(option == 1){
            var grade = parseFloat(prompt("Digite a sua nota:"))
            notas.push(grade)
            alert("Nota adicionada!")
        } else if(option == 2){
            var soma = 0
            for(let nota of notas){
                soma += nota
            }
            // usando o reduce
            // const media = notas.reduce((accum, num) => accum + num, 0) / notas.length
        
            media = ((soma/notas.length).toFixed(2))
            alert(`A média dos alunos é ${media}`)
        }
    }while(option !=3)


}

average()

// Resolução da OBC:
// function average(...numbers) {
//     return numbers.reduce((accum, num) => accum + num, 0) / numbers.length
//   }