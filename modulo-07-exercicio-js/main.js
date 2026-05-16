const form = document.getElementById('form-validacao')
const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const valorA = Number(campoA.value)
    const valorB = Number(campoB.value)

    if (valorB > valorA) {
        mensagem.textContent = 'Formulário válido! O número B é maior que o número A.'
        mensagem.classList.remove('erro')
        mensagem.classList.add('sucesso')
    } else {
        mensagem.textContent = 'Formulário inválido! O número B precisa ser maior que o número A.'
        mensagem.classList.remove('sucesso')
        mensagem.classList.add('erro')
    }
})