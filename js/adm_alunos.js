'use strict'

import { getTodasMatriculas } from "./apiMatricula.js"

const matricula = await getTodasMatriculas()

const criarListaAlunos = (card) => {
    const itemLista = document.createElement('tr')
    itemLista.classList.add('alunoLista')
    itemLista.addEventListener('click', () => {
        console.log(card.id_matricula);
        //window.location.href = '../../pages/adm/editar/editarAlunos.html'
    })

    const dadosListaNome = document.createElement('td')
    dadosListaNome.classList.add('dataName')
    dadosListaNome.textContent = card.nome_aluno

    const dadosEmail = document.createElement('td')
    dadosEmail.classList.add('dataEmail')
    dadosEmail.textContent = card.email_institucional

    const dadosRegistro = document.createElement('td')
    dadosRegistro.classList.add('dataRegistro')
    dadosRegistro.textContent = card.numero_matricula


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



    // itemEditar.addEventListener('click', () => {
    //     window.localStorage.setItem('dadosAluno', (card.id).toString())
    //     window.location = `./editar/editarAdministrador.html`
    // })

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

    const gerarItems = matricula.map(criarListaAlunos)

    container.replaceChildren(...gerarItems)

}

carregarItems()