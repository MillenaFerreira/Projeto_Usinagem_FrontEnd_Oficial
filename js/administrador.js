'use strict'

import { pegarProfessoresApi } from "./apiAdmProfessores.js"


const professoresLista = await pegarProfessoresApi()

const criarLista = (card) => {
    const itemLista = document.createElement('tr')
    itemLista.classList.add('professorLista')

    const dadosListaNome = document.createElement('td')
    dadosListaNome.classList.add('dataName')
    dadosListaNome.textContent = card.nome

    const dadosListaRegistro = document.createElement('td')
    dadosListaRegistro.classList.add('dataRegistro')
    dadosListaRegistro.textContent = card.nif

    const dadosListaUsuario = document.createElement('td')
    dadosListaUsuario.classList.add('dataUsuario')
    dadosListaUsuario.textContent = card.email_usuario

    const dadosListaTelefone = document.createElement('td')
    dadosListaTelefone.classList.add('dataTelefone')
    dadosListaTelefone.textContent = card.telefone

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


    itemLista.addEventListener('click', () => {
        window.localStorage.setItem('dadosProfessor', (card.id).toString())
        window.location = `./editar/editarAdministrador.html`
    })

    itemLista.append (
        dadosListaNome,
        dadosListaRegistro,
        dadosListaUsuario,
        dadosListaTelefone,
        itemEditar,
        itemApagar
    )

    return itemLista
}



const carregarItems = async () => {
    const container = document.getElementById('tabelaItems')

    const gerarItems = professoresLista.professores.map(criarLista)

    container.replaceChildren(...gerarItems)

}

carregarItems()
