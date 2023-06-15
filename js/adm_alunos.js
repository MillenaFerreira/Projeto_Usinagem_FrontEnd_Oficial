'use strict'

import { getTodasMatriculas } from "./apiMatricula.js"
import { pegarAlunoPorIdApi } from "./apiAdmAlunos.js"

const matricula = await getTodasMatriculas()

const criarListaAlunos = (card) => {
    const itemLista = document.createElement('tr')
    

    if(card.status_matricula == "Inativo") {
        itemLista.classList.add('alunoLista')
        itemLista.classList.add('alunoLista--backGroundRed')
    } else {
        itemLista.classList.add('alunoLista')
    }

    itemLista.addEventListener('click', () => {
        console.log(card.id_matricula);
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
    iconEditar.id = 'iconeEditarAluno'
    iconEditar.addEventListener('click', async () => {
        window.localStorage.setItem('id_aluno_editar', card.id_matricula)
       
        const dadosAntigosAluno = await pegarAlunoPorIdApi(card.id_matricula)
 
        const nomeInput = document.getElementById('myInputNomeValor')
        const matriculaInput = document.getElementById('myInputMatriculaValor')
        const dataNascimentoInput = document.getElementById('myInputDataNascimentoValor')
        const emailPessoalInput = document.getElementById('myInputEmailPessoalValor')
        const emailInstitucionalInput = document.getElementById('myInputEmailInstitucionalValor')
        const senhaInput = document.getElementById('myInputSenhaValor')

        const data = formatarDataNascimento(dadosAntigosAluno.aluno[0].data_nascimento)

        nomeInput.value = dadosAntigosAluno.aluno[0].nome_aluno
        matriculaInput.value = dadosAntigosAluno.aluno[0].numero_matricula
        dataNascimentoInput.value = data
        emailPessoalInput.value = dadosAntigosAluno.aluno[0].email_pessoal
        senhaInput.value = dadosAntigosAluno.aluno[0].senha
        emailInstitucionalInput.value = dadosAntigosAluno.aluno[0].email_institucional
                
    })

    itemEditar.append (
        iconEditar
    )

    //
    const itemApagar = document.createElement('td')
    itemApagar.classList.add('IconEditar')
    itemApagar.addEventListener('click', () => {
        window.localStorage.setItem('id_aluno_apagar', card.id_matricula)
    })


    const iconDeletar = document.createElement('a')
    iconDeletar.classList.add('fas')
    iconDeletar.classList.add('fa-trash')
    iconDeletar.href = "#modal__deletar"

    
    itemApagar.append (
        iconDeletar
    )


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

export const formatarDataNascimento = (data) => {

    const dataOriginal = data.toString()

    const arrayData = dataOriginal.split("/")

    const dia = arrayData[0]
    const mes = arrayData[1]
    const ano = arrayData[2]

    const dataFormatada = `${ano.toString()}-${mes.toString()}-${dia.toString()}`

    return dataFormatada

}


carregarItems()