'use strict'

import { formatarDataNascimento } from "../adm_alunos.js";
import { createAlunoApi, updateAlunoApi, updateStatusAlunoPorIdApi, pegarAlunoPorIdApi} from "../apiAdmAlunos.js";

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
 

    document.getElementById('salvarBtnEditar').addEventListener('click', async () => {

        const idAlunoUpdate = window.localStorage.getItem('id_aluno_editar')

        const nomeInput = document.getElementById('myInputNomeValor')
        const matriculaInput = document.getElementById('myInputMatriculaValor')
        const dataNascimentoInput = document.getElementById('myInputDataNascimentoValor')
        const emailPessoalInput = document.getElementById('myInputEmailPessoalValor')
        const emailInstitucionalInput = document.getElementById('myInputEmailInstitucionalValor')
        const senhaInput = document.getElementById('myInputSenhaValor')
        

   
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

        updateAlunoApi(dadosAtualizados)
        
    })
}

const updateStatusAlunoPorId = async () => {
    document.getElementById('Deletar').addEventListener('click', async () => {
        const idAluno = window.localStorage.getItem('id_aluno_apagar')


        const dadosAluno = await pegarAlunoPorIdApi(idAluno)
        const aluno = dadosAluno.aluno[0]

        const data = formatarDataNascimento(aluno.data_nascimento)

        const dadosAtualizados = {
            "id" : idAluno,
            "numero_matricula": aluno.numero_matricula,
            "nome_aluno": `${aluno.nome_aluno}`,
            "data_nascimento": `${data}`,
            "email_aluno": `${aluno.email_pessoal}`,
            "email_usuario": `${aluno.email_institucional}`,
            "senha": aluno.senha
        }

        updateStatusAlunoPorIdApi(dadosAtualizados)

    })
}

updateStatusAlunoPorId()

createRegistroAluno()

updateRegistroAluno()