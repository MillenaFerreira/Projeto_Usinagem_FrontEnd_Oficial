'use strict'

import { pegarListaTarefasTurmaProfessorApi} from "../js/apiTarefasAlunoProfessor.js";

const idTurma = window.localStorage.getItem('id_turma')

const idAluno = window.localStorage.getItem('idMatricula')

const idProfessor = window.localStorage.getItem('idProfessor')

const listaTarefasTurma = await pegarListaTarefasTurmaProfessorApi(idTurma, idProfessor, idAluno)

console.log(listaTarefasTurma)


const criarCardsTarefas = (card) => {
    const containerCardTarefa = document.createElement('div')
    containerCardTarefa.classList.add('listaTarefas__cardTarefas')

    const cardTarefa = document.createElement('div')
    cardTarefa.classList.add('cardTarefas')

    const imgTarefa = document.createElement('img')
    imgTarefa.classList.add('cardTarefas__imagemTarefa')
    imgTarefa.src = card.foto_peca_tarefa

    const nomeTarefa = document.createElement('span')
    nomeTarefa.classList.add('cardTarefas__nomeTarefa')
    nomeTarefa.textContent = card.nome_tarefa

    const statusTarefa = document.createElement('div')
    if(card.criterios[0].resposta == null) {
        statusTarefa.classList.add('bolinha')
    } else {
        statusTarefa.classList.add('bolinha__verde')
    }

    containerCardTarefa.append(
        cardTarefa,
        statusTarefa
    )

    cardTarefa.append(
        imgTarefa,
        nomeTarefa
    )

    return containerCardTarefa

}

const gerarDadosAluno = () => {
    const nomeAluno = document.getElementById('myInputNomeAlunoProfessor')
    const emailAluno = document.getElementById('myInputEmailAlunoProfessor')
    const dataNascimentoAluno = document.getElementById('myInputDataNascimentoAlunoProfessor')
    const matriculaAluno = document.getElementById('myInputMatriculaAlunoProfessor')

    nomeAluno.value = listaTarefasTurma.dados[0].nome_aluno
    emailAluno.value = listaTarefasTurma.dados[0].email_institucional
    dataNascimentoAluno.value = listaTarefasTurma.dados[0].data_nascimento
    matriculaAluno.value = listaTarefasTurma.dados[0].numero_matricula
}

const carregarItems = () => {
    const container = document.getElementById('containerTarefasAluno')

    const gerarItems = listaTarefasTurma.dados[0].tarefas.map(criarCardsTarefas)

    container.replaceChildren(...gerarItems)

}

gerarDadosAluno()

carregarItems()