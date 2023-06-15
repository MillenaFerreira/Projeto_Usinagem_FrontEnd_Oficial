'use strict'

import { getAlunosProfessor } from "../js/apiTurmaCursoMateriaProfessor.js"

var idTurma = localStorage.getItem('id_turma')

const alunos = await getAlunosProfessor(idTurma)


const criarTable = (aluno) => {
    const tr_principal = document.createElement('tr')   
    tr_principal.classList.add('linha-dados')
    tr_principal.addEventListener('click', () =>{
        localStorage.setItem('idTurmaAluno', aluno.id_turma)
        localStorage.setItem('idAluno', aluno.id_matricula)
        window.location.href = '../../pages/professor/aluno.html'
    })

    console.log(aluno)
    tr_principal.addEventListener('click', () => {
        window.location = `./aluno.html`
    })

    const td_nome = document.createElement('td')
    td_nome.classList.add('tabela')
    td_nome.textContent = aluno.nome_aluno

    const td_email = document.createElement('td')
    td_email.classList.add('tabela')
    td_email.textContent = aluno.email_pessoal

    const td_data_nascimento = document.createElement('td')
    td_data_nascimento.classList.add('tabela')
    td_data_nascimento.style.textAlign = 'center'
    td_data_nascimento.textContent = aluno.data_nascimento_aluno

    const td_matricula = document.createElement('td')
    td_matricula.classList.add('tabela__matricula')
    td_matricula.textContent = aluno.numero_matricula

    const segurar_linha = document.createElement('tr')

    //linha
    const td_linha = document.createElement('td')
    td_linha.classList.add('linha4')
    td_linha.colSpan = 4;

    tr_principal.append(td_nome, td_email, td_data_nascimento, td_matricula, segurar_linha)
    segurar_linha.append(td_linha)

    return tr_principal
}

export const carregarTableAlunos = () => {
    const table = document.getElementById("listaAlunos")
    const tableJSON = alunos.map(criarTable)

    table.replaceChildren(...tableJSON)
}

carregarTableAlunos()