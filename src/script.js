function mover(elemento, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo
    if(novoInicio >= fim) {
        elemento.style.left = novoInicio + 'px'
        setTimeout( () => mover(elemento, novoInicio, fim, passo, callback), 7 )
    } else {
        callback()
    }
}

const p = document.querySelector('[wm-slider] > p')
p.style.display = 'block'

mover(p, 1500, -515, 5, () => {
    console.log('Terminou!!!')
})