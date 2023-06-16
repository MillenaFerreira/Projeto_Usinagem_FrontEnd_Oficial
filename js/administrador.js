'use strict'

import { pegarProfessoresApi } from "./apiAdmProfessores.js"


const professoresLista = await pegarProfessoresApi()

const criarLista = (card) => {
    const itemLista = document.createElement('tr')
    itemLista.classList.add('professorLista')

    const dadosListaNome = document.createElement('td')
    dadosListaNome.classList.add('dataName')
    dadosListaNome.textContent = card.nome
    dadosListaNome.addEventListener('click', () => {
        window.location = `/pages/adm/editar/editarAdministrador.html`
    })

    const dadosListaRegistro = document.createElement('td')
    dadosListaRegistro.classList.add('dataRegistro')
    dadosListaRegistro.textContent = card.nif
    dadosListaRegistro.addEventListener('click', () => {
        window.location = `/pages/adm/editar/editarAdministrador.html`
    })

    const dadosListaUsuario = document.createElement('td')
    dadosListaUsuario.classList.add('dataUsuario')
    dadosListaUsuario.textContent = card.email_usuario
    dadosListaUsuario.addEventListener('click', () => {
        window.location = `/pages/adm/editar/editarAdministrador.html`
    })

    const dadosListaTelefone = document.createElement('td')
    dadosListaTelefone.classList.add('dataTelefone')
    dadosListaTelefone.textContent = card.telefone
    dadosListaUsuario.addEventListener('click', () => {
        window.location = `/pages/adm/editar/editarAdministrador.html`
    })

   
    //
    const itemEditar = document.createElement('td')
    itemEditar.classList.add('IconEditar')

    const iconEditar = document.createElement('a')
    iconEditar.classList.add('far')
    iconEditar.classList.add('fa-edit')
    iconEditar.href = '#modal__editar'

    itemEditar.append (
        iconEditar
    )

    //
    const itemApagar = document.createElement('td')
    itemApagar.classList.add('IconEditar')


    const iconDeletar = document.createElement('a')
    iconDeletar.classList.add('fas')
    iconDeletar.classList.add('fa-trash')
    iconDeletar.href = "#modal__deletar"
    
    itemApagar.append (
        iconDeletar
    )


    itemEditar.addEventListener('click', () => {
        window.localStorage.setItem('dadosProfessor', (card.id).toString())
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
