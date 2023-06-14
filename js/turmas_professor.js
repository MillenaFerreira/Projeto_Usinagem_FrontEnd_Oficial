'use strict'

import { getTodasTurmas } from "../js/apiTurma.js"

const turma = await getTodasTurmas()

const criarCard = (turma) => {

    const card = document.createElement('a')
    card.classList.add('card_turmas')
  

    const nome = document.createElement('h1')
    nome.textContent = turma.nome

    const semestre = document.createElement('span')
    semestre.textContent = turma.semestre + "º Semestre"

    const data_conclusao = document.createElement('span')
    data_conclusao.textContent = turma.data_conclusao

    card.append(nome, semestre, data_conclusao)

    card.addEventListener('click', () => {
        
        localStorage.setItem('id_turma', turma.id_turma)
        card.href = "./disciplinas.html"
        
    })

    return card
    

}

const carregarCardCursos = () => {
    const cards = document.querySelector('.cards_turma_professor')
    const cardsJSON = turma.map(criarCard)

    cards.replaceChildren(...cardsJSON)
}

carregarCardCursos()