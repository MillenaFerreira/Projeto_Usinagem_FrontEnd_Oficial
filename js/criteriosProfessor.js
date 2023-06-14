'use strict'

const tarefaNome = localStorage.getItem('tarefaNome')

console.log(tarefaNome);

const titleCriterio = document.querySelector('.titleCriterio')
titleCriterio.textContent = 'Critérios da tarefa ' +  tarefaNome

const btnAdc = document.getElementById('adicionar')
const modalAdc = document.getElementById('modal__adicionar__criterio')
const sairCriterioModal = document.getElementById('sairCriterioModal')

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