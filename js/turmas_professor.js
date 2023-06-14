'use strict'

import { getTurmaProfessor } from "../js/apiTurmaCursoMateriaProfessor.js"

const idProfessor = localStorage.getItem('idProfessor')
var idProf = parseInt(idProfessor)
console.log(idProf)

const idCurso = localStorage.getItem('idCurso')
console.log(idCurso);


const turma = await getTurmaProfessor(idProf, idCurso)


const criarCard = (turma) => { 
    console.log(turma);
       

    const card = document.createElement('a')
    card.classList.add('card_turmas')
    
    card.addEventListener('click', () => {
        
        localStorage.setItem('id_turma', turma.id_turma)
        card.href = "./disciplinas.html"
        
    })

    const nome = document.createElement('h1')
    nome.textContent = turma.nome_turma

    const semestre = document.createElement('span')
    semestre.textContent = turma.semestre_turma + "º Semestre"

    const data_conclusao = document.createElement('span')
    data_conclusao.textContent = turma.conclusao_turma

    card.append(nome, semestre, data_conclusao)

    

    return card
    

}

const carregarCardCursos = () => {
    const cards = document.querySelector('.cards_turma_professor')
    const cardsJSON = turma.map(criarCard)

    cards.replaceChildren(...cardsJSON)
}

carregarCardCursos()