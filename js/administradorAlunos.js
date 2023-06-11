'use strict'

import { pegarAlunosApi } from "./apiAdmAlunos.js"

const alunosLista = await pegarAlunosApi()

const criarListaAlunos = (card) => {
    const itemLista = document.createElement('tr')
    itemLista.classList.add('alunoLista')

    const dadosListaNome = document.createElement('td')
    dadosListaNome.classList.add('dataName')
    dadosListaNome.textContent = card.nome_aluno

    const dadosEmail = document.createElement('td')
    dadosEmail.classList.add('dataEmail')
    dadosEmail.textContent = card.email_aluno

    const dadosRegistro = document.createElement('td')
    dadosRegistro.classList.add('dataRegistro')
    dadosRegistro.textContent = card.cpf

    const itemEditar = document.createElement('div') 
    itemEditar.classList.add('listaLinks__icone')
    itemEditar.classList.add('iconeEditar')

    const iconeEditar = document.createElement('ion-icon')
    iconeEditar.name = `create-outline`
    iconeEditar.classList.add('icone')

    itemEditar.append (
        iconeEditar
    )

    const itemApagar = document.createElement('div') 
    itemApagar.classList.add('listaLinks__icone')
    itemApagar.classList.add('iconeApagar')

    const iconeApagar = document.createElement('ion-icon')
    iconeApagar.name = `trash-outline`
    iconeApagar.classList.add('icone')

    itemApagar.append (
        iconeApagar
    )


    itemEditar.addEventListener('click', () => {
        window.localStorage.setItem('dadosAluno', (card.id).toString())
        window.location = `./editar/editarAdministrador.html`
    })

    itemLista.append (
        dadosListaNome,
        dadosEmail,
        dadosRegistro,
        itemEditar,
        itemApagar
    )

    return itemLista
}

const carregarItems = () => {
    const container = document.getElementById('tabelaItemsAlunos')

    const gerarItems = alunosLista.alunos.map(criarListaAlunos)

    container.replaceChildren(...gerarItems)

}

carregarItems()