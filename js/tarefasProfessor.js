'use strict'

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
