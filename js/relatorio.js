'use strict'

import { pesquisarCriterios, pesquisarCriteriosPeloIdTarefa } from './apiCriterios.js'
import { updateCriterio } from './apiCriterios.js'

const idTarefa = localStorage.getItem('idTarefaParaAluno')
const idTarefaFormat = parseInt(idTarefa)
console.log(idTarefaFormat);



const criterioForEach = async () => {

    const criterios = await pesquisarCriterios();
    const pesquisarCriteriosId = await pesquisarCriteriosPeloIdTarefa(idTarefaFormat);
    console.log(pesquisarCriteriosId);


    //const modal_mensagem = document.getElementById('modal__adicionar__criterio')

    const registroCriterios = pesquisarCriteriosId;


    registroCriterios.forEach((criterio) => {

        const tableContainer = document.querySelector('table')
        const trContainer = document.createElement('tr')
        trContainer.classList.add('trContainer')

        const tdDescricao = document.createElement('td')
        tdDescricao.textContent = criterio.descricao_criterio

        const tdValores = document.createElement('td')
        tdValores.classList.add('valores')
        tdValores.textContent = 'Valor1, Valor2'

        const tdInputAluno = document.createElement('td')
        const inputAluno = document.createElement('input')
        inputAluno.type = "text"
        inputAluno.classList.add('input')
        inputAluno.classList.add('input__obtido')

        const tdContainerSelect = document.createElement('td')
        const selectNotaObtida = document.createElement('select')
        selectNotaObtida.name = "avaliacao_aluno"
        selectNotaObtida.classList.add('input__avaliacao')

        const optionTrue = document.createElement('option')
        optionTrue.value = "true"
        optionTrue.textContent = "SIM"

        const optionFalse = document.createElement('option')
        optionFalse.value = "false"
        optionFalse.textContent = "NÃO"

        const tdCheckBox = document.createElement('td')
        const inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        inputCheckbox.classList.add('checkbox')

        if(criterio.observacao_nota_criterio == true){
            inputCheckbox.checked = true
        }

        tableContainer.append(trContainer)
        trContainer.append(tdDescricao, tdValores, tdInputAluno, tdContainerSelect, tdCheckBox)
        tdInputAluno.append(inputAluno)
        tdCheckBox.append(inputCheckbox)
        tdContainerSelect.append(selectNotaObtida)
        selectNotaObtida.append(optionTrue, optionFalse)
    });


}

criterioForEach()