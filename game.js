let game = ['Pedra', 'Papel', 'Tesoura']
let sort = game[Math.floor(Math.random() * game.length)]
let img = document.getElementById('img')
let res = document.getElementById('res')

function pedra() {
    img.innerHTML = `O sorteado foi ${sort}`
    switch(sort) {
        case 'Pedra':
            res.innerHTML = 'Empatou, bora outra!'
            break
        case 'Papel':
            res.innerHTML = 'PERRRRDEUUUU PRAYBA!'
            break
        case 'Tesoura':
            res.innerHTML = 'PERDI!?!?! Foi ROUBADO ctza!!!!!!!!!'
            break
        default:
            res.innerHTML = 'Deu ruim aqui vééi...'
    }
}

function papel() {
    img.innerHTML = `O sorteado foi ${sort}`
    switch(sort) {
        case 'Pedra':
            res.innerHTML = 'NÃÃÃO ACREDITO QUE PERDI.'
            break
        case 'Papel':
            res.innerHTML = 'EMPATE!'
            break
        case 'Tesoura':
            res.innerHTML = 'TOMAAAAAAAAAAAA. Ganhei!'
            break
        default:
            res.innerHTML = 'Eita, algo não deu bom.'
    }
}

function tesoura() {
    img.innerHTML = `O sorteado foi ${sort}`
    switch(sort) {
        case 'Pedra':
            res.innerHTML = 'Vitóriaaaaaaaaaaa!'
            break
        case 'Papel':
            res.innerHTML = 'OLOKO MANO, ganhou...'
            break
        case 'Tesoura':
            res.innerHTML = '0x0, vamos de novo!'
            break
        default:
            res.innerHTML = 'Bugou o negócio aqui x.x!'
    }
}