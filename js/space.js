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
}


