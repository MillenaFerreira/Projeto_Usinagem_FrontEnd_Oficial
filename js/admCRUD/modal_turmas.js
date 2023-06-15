'use strict'

import { createTurma } from '../apiTurma.js'

const idTurma = localStorage.getItem('id')
const idCursoParaTurma = localStorage.getItem('idCursoParaTurma')
console.log('fcf'+parseInt(idCursoParaTurma));

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

createCardTurma()