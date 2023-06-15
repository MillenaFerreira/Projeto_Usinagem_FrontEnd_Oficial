'use strict'

import { getAlunosProfessor } from "../js/apiTurmaCursoMateriaProfessor.js"

var idTurma = localStorage.getItem('id_turma')
console.log(idTurma);


const alunos = await getAlunosProfessor(idTurma)


const criarTable = (alunos) => {

    const tr_principal = document.createElement('tr')
    tr_principal.classList.add('hover')

    const td_nome = document.createElement('tr')
    td_nome.classList.add('tabela')
    td_nome.textContent = alunos.nome

    const td_email = document.createElement('td')
    td_email.classList.add('tabela')
    td_email.textContent = alunos.email

    const td_data_nascimento = document.createElement('td')
    td_data_nascimento.classList.add('tabela')
    td_data_nascimento.textContent = alunos.data_nascimento

    const td_matricula = document.createElement('td')
    td_matricula.classList.add('tabela')
    td_matricula.textContent = alunos.matricula

    const segurar_linha = document.createElement('tr')

    //linha
    const td_linha = document.createElement('td')
    td_linha.classList.add('linha4')
    td_linha.colSpan = 4;

    tr_principal.append(td_nome, td_email, td_data_nascimento, td_matricula, segurar_linha)
    segurar_linha.append(td_linha)

}

export const carregarTableAlunos = () => {
    const table = document.getElementById("listaAlunos")
    const tableJSON = alunos.map(criarTable)

    table.replaceChildren(...tableJSON)
}

carregarTableAlunos()