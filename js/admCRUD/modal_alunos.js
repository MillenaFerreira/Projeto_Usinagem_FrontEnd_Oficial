'use strict'

import { createAlunoApi, updateAlunoApi, deleteAlunoApi, pegarAlunoPorIdApi } from "../apiAdmAlunos.js";

const createRegistroAluno = () => {
    
    document.getElementById('salvarBtn').addEventListener('click', () => {
        const nomeInput = document.getElementById('myInputNome')
        const matriculaInput = document.getElementById('myInputMatricula')
        const dataNascimentoInput = document.getElementById('myInputDataNascimento')
        const emailPessoalInput = document.getElementById('myInputEmailPessoal')
        const emailInstitucionalInput = document.getElementById('myInputEmailInstitucional')
        const senhaInput = document.getElementById('myInputSenha')
        const form = document.getElementById('modal__adicionar--content')

        if (form.checkValidity()) {

            const nome = nomeInput.value
            const matricula = matriculaInput.value
            const dataNascimento = dataNascimentoInput.value
            const emailPessoal = emailPessoalInput.value
            const emailInstitucional = emailInstitucionalInput.value
            const senha = senhaInput.value

            const aluno = {
                "numero_matricula" : matricula,
                "nome_aluno" : `${nome}`,
                "data_nascimento" : `${dataNascimento}`,
                "email_aluno" : `${emailPessoal}`,
                "email_usuario" : `${emailInstitucional}`,
                "senha" : `${senha}`
            }

            createAlunoApi(aluno)
        } else {
            console.log('Campo não preenchido')
        }



    })

}

const updateRegistroAluno = async () => {
 

    document.getElementById('salvarBtn').addEventListener('click', async () => {

        const idAlunoUpdate = window.localStorage.getItem('id_aluno_editar')

        

        const nomeInput = document.getElementById('myInputNome')
 
        const matriculaInput = document.getElementById('myInputMatricula')
        const dataNascimentoInput = document.getElementById('myInputDataNascimento')
        const emailPessoalInput = document.getElementById('myInputEmailPessoal')
        const emailInstitucionalInput = document.getElementById('myInputEmailInstitucional')
        const senhaInput = document.getElementById('myInputSenha')
        

   
        const nome = nomeInput.value
        const matricula = matriculaInput.value
        const dataNascimento = dataNascimentoInput.value
        const emailPessoal = emailPessoalInput.value
        const emailInstitucional = emailInstitucionalInput.value
        const senha = senhaInput.value

       
        const dadosAtualizados = {
            "id" : idAlunoUpdate,
            "numero_matricula": matricula,
            "nome_aluno": `${nome}`,
            "data_nascimento": `${dataNascimento}`,
            "email_aluno": `${emailPessoal}`,
            "email_usuario": `${emailInstitucional}`,
            "senha": senha
        }

        console.log(dadosAtualizados)
        
    })
}

createRegistroAluno()

updateRegistroAluno()