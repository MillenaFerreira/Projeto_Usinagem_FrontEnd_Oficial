'use strict'

import { createCurso, updateCurso, deleteCurso } from "../js/api/professor_curso.js";


const idCurso = localStorage.getItem('id')
console.log('logo' + idCurso);



export const createCardCurso = () => {

    document.getElementById("salvarBtn").addEventListener("click", () => {
        const nomeInput = document.getElementById("myInputNome");
        const siglaInput = document.getElementById("myInputSigla");
        const cargaHorariaInput = document.getElementById("myInputCargaHoraria");
        const urlInput = document.getElementById("myInputUrl");
        const descricaoInput = document.getElementById("myInputDescricao");
        const form = document.getElementById("modal__adicionar--content");

        if (form.checkValidity()) {
            const nome = nomeInput.value;
            const sigla = siglaInput.value;
            const cargaHoraria = parseInt(cargaHorariaInput.value);
            const url = urlInput.value;
            const descricao = descricaoInput.value;

            console.log(cargaHoraria);

            const curso = {
                "nome": `${nome}`,
                "carga_horaria": cargaHoraria,
                "descricao": `${descricao}`,
                "sigla": `${sigla}`,
                "foto": `${url}`
            };

            console.log(curso);

            createCurso(curso)

        } else {
            console.log('campo não preeenchido');
        }



    })

}
export const updateCardCurso = () => {
    //chamando o botão que vai editar
    const editarCardCurso = document.getElementById("editar");

    editarCardCurso.addEventListener('click', () => {
        const nomeInput = document.getElementById("myInputNomeValor");
        const siglaInput = document.getElementById("myInputSiglaValor");
        const cargaHorariaInput = document.getElementById("myInputCargaHorariaValor");
        const urlInput = document.getElementById("myInputUrlValor");
        const descricaoInput = document.getElementById("myInputDescricaoValor");
        //const form = document.getElementById("modal__editar--content");


        const nome = nomeInput.value;
        const sigla = siglaInput.value;
        const cargaHoraria = parseInt(cargaHorariaInput.value);
        const url = urlInput.value;
        const descricao = descricaoInput.value;

        const idCursoUpdate = localStorage.getItem('id_update')
        const dadosAtualizado = {
            "id": idCursoUpdate,
            "nome": `${nome}`,
            "carga_horaria": cargaHoraria,
            "descricao": `${descricao}`,
            "sigla": `${sigla}`,
            "foto": `${url}`
        };
        console.log(dadosAtualizado.id + 'TESTE');
        console.log(dadosAtualizado);

        updateCurso(dadosAtualizado)

    })
}
export const deleteCardCurso = () => {
    //chamando o botão que vai deletar
    const deletarCardCurso = document.getElementById("Deletar");
    deletarCardCurso.addEventListener('click', () => {
        deleteCurso(idCurso)
    })
}