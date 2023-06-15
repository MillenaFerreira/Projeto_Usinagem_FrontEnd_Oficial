'use strict'

import { createTurma, updateTurma, deleteTurma } from '../apiTurma.js'

const idTurma = localStorage.getItem('id2')
const idCursoParaTurma = localStorage.getItem('idCursoParaTurma')
console.log(parseInt(idCursoParaTurma));

console.log('logo' + idTurma);

const createCardTurma = () => {

    console.log("entrei");

    document.getElementById("salvarBtn").addEventListener("click", () => {
        const nomeInput = document.getElementById("myInputNome");
        const dataInicioInput = document.getElementById("myInputDataInicio");
        const dataConclusaoInput = document.getElementById("myInputDataConclusao");
        const descricaoInput = document.getElementById("myInputDescricao");
        const radios = document.getElementsByName("mybuttons");
        let semestreInput;

        for (const radio of radios) {
            if (radio.checked) {
                semestreInput = parseInt(radio.value);
                break;
            }
        }
        const form = document.getElementById("modal__adicionar--content");

        if (form.checkValidity()) {
            const nome = nomeInput.value;
            const dataInicio = dataInicioInput.value;
            const dataConclusao = dataConclusaoInput.value;
            const descricao = descricaoInput.value;

            const turma = {
                "nome": `${nome}`,
                "data_inicio": `${dataInicio}`,
                "data_conclusao": `${dataConclusao}`,
                "descricao": `${descricao}`,
                "semestre": semestreInput,
                "id_curso": parseInt(idCursoParaTurma)
            };

            console.log(turma);
            console.log(createTurma(turma));
            //createTurma(turma)

        } else {
            console.log('campo não preeenchido');
        }
    })
}

const updateCardTurma = () => {
    //chamando o botão que vai editar
    const editarCardTurma = document.getElementById("editar");

    editarCardTurma.addEventListener('click', () => {
        const nomeInput = document.getElementById("myInputNomeValor");
        const dataInicioInput = document.getElementById("myInputDataInicioValor");
        const dataConclusaoInput = document.getElementById("myInputDataConclusaoValor");
        const descricaoInput = document.getElementById("myInputDescricaoValor");
        const radios = document.getElementsByName("mybuttons");
        let semestreInput;
        //const form = document.getElementById("modal__editar--content");
        for (const radio of radios) {
            if (radio.checked) {
                semestreInput = parseInt(radio.value);
                break;
            }
        }

        const nome = nomeInput.value;
        const dataInicio = dataInicioInput.value;
        const dataConclusao = dataConclusaoInput.value;
        const descricao = descricaoInput.value;

        const idTurmaUpdate = localStorage.getItem('id_update_turma')
        const dadosAtualizado = {
            "id": parseFloat(idTurmaUpdate),
            "nome": `${nome}`,
            "data_inicio": `${dataInicio}`,
            "data_conclusao": `${dataConclusao}`,
            "descricao": `${descricao}`,
            "semestre": semestreInput,
            "id_curso": parseInt(idCursoParaTurma)
        };
        console.log(dadosAtualizado.id + 'TESTE');
        console.log(dadosAtualizado);

        updateTurma(dadosAtualizado)

    })
}

const deleteCardTurma = () => {
    //chamando o botão que vai deletar
    const deletarCardTurma = document.getElementById("Deletar");
    deletarCardTurma.addEventListener('click', () => {
        deleteTurma(idTurma)
    })
}

createCardTurma()
updateCardTurma()
deleteCardTurma()