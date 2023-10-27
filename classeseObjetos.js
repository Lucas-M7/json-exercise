/*Objetivo => Criar uma classe generica que represente um herói
de uma aventura e que possua as seguintes propriedades:

- Nome
- Idade
- Classe

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- Exibir a mensagem: "o {tipo} atacou usando {ataque}")
- Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

Se mago -> no ataque exibir (usou magia)
Se guerreiro -> no ataque exibir (usou espada)
Se monge -> no ataque exibir (usou artes marciais)
Se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "O {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 */

class myHero{
    constructor(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }

    atacar(){
        let ataque

        switch (this.classe) {
            case 'mago':
                ataque = 'magia';
                break;

            case 'guerreiro':
                ataque = 'espada'
                break;

            case 'monge':
                ataque = 'artes marciais'
                break;
                
            case 'ninja':
                ataque = 'shuriken'
                break;
                
            default:
                ataque = '';    
        }

        return `O ${this.classe} atacou usando ${ataque}`

    }

}

let heroi = new myHero('Lucas', 18, 'ninja')

console.log(heroi.atacar())