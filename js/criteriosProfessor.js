'use strict'

const tarefaNome = localStorage.getItem('tarefaNome')

console.log(tarefaNome);

const titleCriterio = document.querySelector('.titleCriterio')
titleCriterio.textContent = 'Critérios da tarefa ' +  tarefaNome