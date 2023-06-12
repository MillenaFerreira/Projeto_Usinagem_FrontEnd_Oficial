'use strict'

import { createMateria} from "../apiMateria.js";

const idCurso = localStorage.getItem('id')
console.log('logo' + idCurso);

const createCardMateria = () => {

    console.log("entrei");

    document.getElementById("salvarBtn").addEventListener("click", () => {
        const nomeInput = document.getElementById("myInputNome");
        const siglaInput = document.getElementById("myInputSigla");
        const cargaHorariaInput = document.getElementById("myInputCargaHoraria");
        const descricaoInput = document.getElementById("myInputDescricao");
        const form = document.getElementById("modal__adicionar--content");

        if (form.checkValidity()) {
            const nome = nomeInput.value;
            const sigla = siglaInput.value;
            const cargaHoraria = parseInt(cargaHorariaInput.value);
            const descricao = descricaoInput.value;

            console.log(cargaHoraria);

            const curso = {
                "nome": `${nome}`,
                "carga_horaria": cargaHoraria,
                "sigla": `${sigla}`,
                "descricao": `${descricao}`,
                "id_curso": 1
                
            };

            console.log(curso);

            createMateria(curso)

        } else {
            console.log('campo não preeenchido');
        }



    })

}

createCardMateria()