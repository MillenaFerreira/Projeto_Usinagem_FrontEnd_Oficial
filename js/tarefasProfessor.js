'use strict'

import { createTarefa } from './apiTarefas.js'

const buttonAdcTarefa = document.getElementById('adicionarTarefa')
const modalTarefaAdc = document.getElementById('modal__adicionar__tarefa')
const buttonSairMNodal = document.getElementById('sair')

buttonAdcTarefa.addEventListener('click', () => {
    modalTarefaAdc.classList.remove('d-none')
    modalTarefaAdc.classList.add('d-flex')
})

buttonSairMNodal.addEventListener('click', () => {
    modalTarefaAdc.classList.add('d-none')
    modalTarefaAdc.classList.remove('d-flex')
})
// var input = document.getElementById('imagem');
// var visualizacao = document.getElementById('visualizacao');
// var imgVisu = document.getElementById('imgVisu');

// const exibirImagem = (event) => {
//     console.log('2');
//     var input = event.target;
//     var visualizacao = document.getElementById('visualizacao');

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         console.log('3');
//         reader.onload = function (e) {
//             console.log('4');
//             imgVisu.src = e.target.result
//             console.log(e.target.result);

//         };

//         reader.readAsDataURL(input.files[0]);
//     } else {
//         visualizacao.style.background = 'none';
//     }

// };

// input.addEventListener('change', (event) => {
//     console.log('1');
//     exibirImagem(event);
// });

const buttonSendTarefa = document.getElementById('sendTarefa')
const nomeTarefa = document.getElementById('nomeTarefa')
const urlTarefa = document.getElementById('urlTarefa')
const tempoPrevisto = document.getElementById('tempoPrevisto')
const descricaoTarefa = document.getElementById('descricaoTarefa')
const selectElement = document.getElementById("tipo-atividade");




buttonSendTarefa.addEventListener('click', (event) => {
    event.preventDefault();

    const selectedValue = selectElement.value;
    const valorNomeTarefa = nomeTarefa.value
    const valorUrl = urlTarefa.value
    const valorTempo = tempoPrevisto.value
    const valorValorDescricao = descricaoTarefa.value
    let valorTipoTarefa = ''

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if(selectedValue == 'Somativa'){
        valorTipoTarefa = 2
    }
    if(selectedValue == 'Formativa'){
        valorTipoTarefa = 1
    }

    if(selectedValue != "na"){
        if (urlRegex.test(valorUrl)) {
            console.log("A URL é válida.");
            const tarefa = {
                "nome": `${valorNomeTarefa}`,
                "tempo_previsto": `${valorTempo.substring(0, 2) + ':' + valorTempo.substring(3, 5) + ':00'}`,
                "numero": 12,
                "foto_peca": `${valorUrl}`,
                "id_tipo_tarefa": valorTipoTarefa
            }
            console.log(tarefa);
            createTarefa(tarefa)
        } 
    }


})