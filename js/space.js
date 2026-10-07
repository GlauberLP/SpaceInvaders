// criando um contexto para tela do jogo receber desenho 2D
const telaJogo = document.getElementById('telaJogo').getContext('2d')

// recuperando elementos html pelo id
const tiro = document.getElementById('somTiro')
const modal = document.getElementById('modal')
const mensagemModal = document.getElementById('mensagemModal')
const botaoContinuar = document.getElementById('botaoContinuar')
const botaoTerminar = document.getElementById('botaoTerminar')
// criando um molde chamado obj
class obj {

    // método constructor é usado para inicializar um objeto criado
    // a partir de uma classe
    constructor(posx, posy, largura, altura, cor){
        this.posx = posx // inicializa a posição x do obj
        this.posy = posy // inicializa a posição y do obj
        this.largura = largura // inicializa a propriedade largura
        this.altura = altura // inicializa a propriedade altura
        this.cor = cor // define a cor de preenchimento do obj
    }

    // criando método desenhar para classe obj
    desenhar(){
        // define a cor de preenchimento do obj
        telaJogo.fillStyle = this.cor
        // desenha um retângulo no canvas com as dimensões especificadas
        // método fillRect faz um desenho 2d
        telaJogo.fillRect(this.posx, this.posy, this.largura, this.altura)
    }

    atualizar(){
        // atualiza posição horizontal do jogador adicionando velocidade
        // atual posx
        // se 
    }

    mover(direcao){
        const velocidade = 5;
        this.velocidade = direcao === 'esquerda' ? velocidade:velocidade
    }

    parar(){
        this.velocidade = 0
    }
}

class jogador extends obj{
    constructor(posx, posy, largura, altura, imagem) {
        // super é usado para chamar o construtor de classe pai 'obj'
        // super garante que o jogador tenha todas as propriedades de um 'obj'

        super(posx, posy, largura, altura)

        this.imagem = imagem
        this.velocidade = 0

        // this.vida armazena o número de vidas que um jogador possui
        // this.vida tenta recuperar esse número no localstorage
        // caso não houver nada salvo, o padrão será 3
        // parseInt faz com que o valor recuperado seja um número inteiro
        // segundo argumento é a base decimal para conversão

        this.vidas = parseInt(localStorage.getItem('vidas'), 10) || 3
    }
}


