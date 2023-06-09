'use strict'

import { createTarefa , deleteTarefa} from './apiTarefas.js'



import { pesquisarTarefas } from './apiTarefas.js';
//import "./router.js"

const criarDadosTarefa = async () => {
    const tarefasDados = await pesquisarTarefas();

    const containerTarefa = document.querySelector('.cards_turma')

    tarefasDados.forEach((tarefa) => {

        const aLinkCard = document.createElement('a')
        // aLinkCard.classList.add('cardLink')


        const card = document.createElement('div')
        card.classList.add('card')

        const spanTipoTarefa = document.createElement('span')
        spanTipoTarefa.textContent = 'Tipo: ' + tarefa.nome_tipo_tarefa

        const imgPeca = document.createElement('img')
        imgPeca.src = tarefa.foto_peca

        const nomeTarefa = document.createElement('p')
        nomeTarefa.classList.add('nomeTarefa')
        nomeTarefa.textContent = tarefa.nome_tarefa

        // const idTarefa = document.createElement('span')
        // idTarefa.textContent = 'id: ' + tarefa.id
        // idTarefa.classList.add('idTarefa')

        // const divTeste = document.createElement('div')
        // divTeste.classList.add('divteste2')

        const button_excluir = document.createElement('button')
        button_excluir.classList.add('fa-solid')
        button_excluir.classList.add('fa-trash')
        button_excluir.id = 'excluir2'


        card.append(imgPeca, spanTipoTarefa, nomeTarefa, button_excluir)

        containerTarefa.append(card)

        // button_excluir.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     
        // })

        // delet 

        const idTarefa = tarefa.id;


        button_excluir.addEventListener('click', async (event) => {
            event.preventDefault();
            console.log(idTarefa);
            await deleteTarefa(idTarefa);
        
            location.reload();
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

    if (selectedValue == 'Somativa') {
        valorTipoTarefa = 2
    }
    if (selectedValue == 'Formativa') {
        valorTipoTarefa = 1
    }

    if (selectedValue != "na") {
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

            modalTarefaAdc.classList.add('d-none')
            modalTarefaAdc.classList.remove('d-flex')
        }
    }




})