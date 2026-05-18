const form = document.getElementById('form-contato')
const nomes = []
const telefones = []
const inputTelefone = document.getElementById('telefone-contato')

inputTelefone.addEventListener('input', function() {
    if (isNaN(inputTelefone.value)) {
        alert('Não é permitido letras no telefone')
        inputTelefone.value = ''
    }
})

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelefoneContato = document.getElementById('telefone-contato')

    nomes.push(inputNomeContato.value)
    telefones.push(inputTelefoneContato.value)

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputTelefoneContato.value}</td>`
    linha += '</tr>'

    linhas += linha

    inputNomeContato.value = ''
    inputTelefoneContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')

    const contatos = []

    for (let i = 0; i < nomes.length; i++) {
        contatos.push({
            nome: nomes[i],
            telefone: telefones[i]
        })
    }

    contatos.sort(function(a, b) {
        return a.nome.localeCompare(b.nome)
    })

    let linhasTabela = ''

    for (let i = 0; i < contatos.length; i++) {
        linhasTabela += '<tr>'
        linhasTabela += `<td>${contatos[i].nome}</td>`
        linhasTabela += `<td>${contatos[i].telefone}</td>`
        linhasTabela += '</tr>'
    }

    corpoTabela.innerHTML = linhasTabela
}