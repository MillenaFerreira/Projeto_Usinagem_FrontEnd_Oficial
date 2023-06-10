'use strict'

import { createTarefa, deleteTarefa, updateTarefa } from './apiTarefas.js'



import { pesquisarTarefas } from './apiTarefas.js';
//import "./router.js"

const criarDadosTarefa = async () => {
    const tarefasDados = await pesquisarTarefas();

    const containerTarefa = document.querySelector('.cards_turma')

    tarefasDados.forEach((tarefa) => {

        // const aLinkCard = document.createElement('a')
        // aLinkCard.classList.add('cardLink')

        const buttonCard = document.createElement('button')
        buttonCard.classList.add('buttonCard')
        buttonCard.title = "Clique para mais informações da tarefa."

        const card = document.createElement('div')
        card.classList.add('card')

        const spanTipoTarefa = document.createElement('span')
        spanTipoTarefa.textContent = 'Tipo: ' + tarefa.nome_tipo_tarefa

        const imgPeca = document.createElement('img')
        imgPeca.src = tarefa.foto_peca

        const nomeTarefa = document.createElement('p')
        nomeTarefa.classList.add('nomeTarefa')
        nomeTarefa.textContent = tarefa.nome_tarefa


        const button_excluir = document.createElement('button')
        button_excluir.classList.add('fa-solid')
        button_excluir.classList.add('fa-trash')
        button_excluir.id = 'excluir2'
        button_excluir.title = "Excluir tarefa"

        const button_editar = document.createElement('button')
        button_editar.classList.add('far')
        button_editar.classList.add('fa-edit')
        button_editar.id = 'editar2'
        button_editar.title = "Editar tarefa"

        const nomeTarefa2 = document.getElementById('nomeTarefa2')
        const urlTarefa2 = document.getElementById('urlTarefa2')
        const tempoPrevisto2 = document.getElementById('tempoPrevisto2')
        const tipo_atividade2 = document.getElementById('tipo-atividade2')

        const tarefaEditada = document.getElementById('sendTarefaEditada')








        card.append(imgPeca, spanTipoTarefa, nomeTarefa, button_excluir, button_editar)

        buttonCard.append(card)
        containerTarefa.append(buttonCard)

        const idTarefa = tarefa.id;


        button_excluir.addEventListener('click', async (event) => {
            event.preventDefault();
            console.log(idTarefa);
            await deleteTarefa(idTarefa);

            location.reload();
        });

        button_editar.addEventListener('click', async (event) => {
            event.preventDefault();
            const editarTarefaModal = document.getElementById('modal__editar__tarefa')
            editarTarefaModal.classList.remove('d-none')
            editarTarefaModal.classList.add('d-flex')
            console.log(tarefa);
            nomeTarefa2.value = tarefa.nome_tarefa
            urlTarefa2.value = tarefa.foto_peca
            tempoPrevisto2.value = tarefa.tempo_previsto_tarefa
            tipo_atividade2.value = tarefa.id_tipo_tarefa
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            tarefaEditada.addEventListener('click', (event) => {
                event.preventDefault();
                const tarefaUpdate = {
                    "id": tarefa.id,
                    "nome": `${nomeTarefa2.value}`,
                    "tempo_previsto": `${tempoPrevisto2.value.substring(0, 2) + ':' + tempoPrevisto2.value.substring(3, 5) + ':00'}`,
                    "numero": 12,
                    "foto_peca": `${urlTarefa2.value}`,
                    "id_tipo_tarefa": parseInt(tipo_atividade2.value)
                }
                console.log(tarefaUpdate);

                updateTarefa(tarefaUpdate)

                editarTarefaModal.classList.remove('d-flex')
                editarTarefaModal.classList.add('d-none')

            })
        });

        buttonCard.addEventListener('click', async (event) => {
            event.preventDefault();
            //console.log(idTarefa);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            const modalMensgaem = document.querySelector('.modal_mensagem')
            modalMensgaem.classList.add('d-flex')
            modalMensgaem.classList.remove('d-none')
           const nomeTarefaMensagem = document.getElementById('nomeTarefaMensagem')
           nomeTarefaMensagem.textContent = 'Deseja ver os critérios da tarefa '+ tarefa.nome_tarefa + '?'

           const sairModalMensagem = document.getElementById('sairModalMensagem')
           sairModalMensagem.addEventListener('click', (event) => {
            event.preventDefault();
            modalMensgaem.classList.add('d-none')
            modalMensgaem.classList.remove('d-flex')
           })
        });


    })


}




criarDadosTarefa()

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
//const descricaoTarefa = document.getElementById('descricaoTarefa')
const selectElement = document.getElementById("tipo-atividade");




buttonSendTarefa.addEventListener('click', (event) => {
    event.preventDefault();

    const selectedValue = selectElement.value;
    const valorNomeTarefa = nomeTarefa.value
    const valorUrl = urlTarefa.value
    const valorTempo = tempoPrevisto.value
    //const valorValorDescricao = descricaoTarefa.value
    //let valorTipoTarefa = ''

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    // if (selectedValue == 'Somativa') {
    //     valorTipoTarefa = 2
    // }
    // if (selectedValue == 'Formativa') {
    //     valorTipoTarefa = 1
    // }

    if (selectedValue != "na") {
        if (urlRegex.test(valorUrl)) {
            console.log("A URL é válida.");
            const tarefa = {
                "nome": `${valorNomeTarefa}`,
                "tempo_previsto": `${valorTempo.substring(0, 2) + ':' + valorTempo.substring(3, 5) + ':00'}`,
                "numero": 12,
                "foto_peca": `${valorUrl}`,
                "id_tipo_tarefa": parseInt(selectedValue)
            }
            console.log(tarefa);
            createTarefa(tarefa)

            modalTarefaAdc.classList.add('d-none')
            modalTarefaAdc.classList.remove('d-flex')
        }
    }




})