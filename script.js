let meuTimeNba = {
    nome: 'Boston Celtics',
    titulos: 17,
    titularesAtuais: [
        "Jayson Tatum", "Jaylen Brwon", "Jrue Holiday", "Derick White", "Kristaps Porzingis"
    ],
    jogadorHomenagem: "Bill Russel"
};


myTimeNba(meuTimeNba)

function myTimeNba (meuTimeNba){
    console.log(`O nome do time é: ${meuTimeNba.nome}`)
    console.log(`O ${meuTimeNba.nome} tem ${meuTimeNba.titulos}: títulos`)
    console.log(`Os titulares atuais são: ${meuTimeNba.titularesAtuais}`)
}