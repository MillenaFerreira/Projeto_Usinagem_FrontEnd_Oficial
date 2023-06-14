'use strict'

const tarefaNome = localStorage.getItem('tarefaNome')

console.log(tarefaNome);

const titleCriterio = document.querySelector('.titleCriterio')
titleCriterio.textContent = 'Critérios da tarefa ' +  tarefaNome

const btnAdc = document.getElementById('adicionar')
const modalAdc = document.getElementById('modal__adicionar__criterio')
const sairCriterioModal = document.getElementById('sairCriterioModal')

const sendCriterio = document.getElementById('sendCriterio')

btnAdc.addEventListener('click', (event) => {
    event.preventDefault()
    modalAdc.classList.add('d-flex')
    modalAdc.classList.remove('d-none')
})

sairCriterioModal.addEventListener('click', (event) => {
    event.preventDefault()
    modalAdc.classList.add('d-none')
    modalAdc.classList.remove('d-flex')
})

const adicionarCriterio = () => {
    
    const descricaoCriterio = document.getElementById('descricaoCriterio')
    const valorCritico = document.getElementById('critico')
    const observacaoNota = document.getElementById('observacaoNota')

    let valorCriticoStatus;
    let observacaoNotaStatus;

    if(valorCritico.checked){
        valorCriticoStatus = true
    }else{
        valorCriticoStatus = false
    }

    if(observacaoNota.checked){
        observacaoNotaStatus = true
    }else{
        observacaoNotaStatus = false
    }

    console.log(descricaoCriterio.value);
    console.log(valorCriticoStatus);
    console.log(observacaoNotaStatus);
    
    
}

sendCriterio.addEventListener('click', (event) => {
    event.preventDefault()
    adicionarCriterio()
})