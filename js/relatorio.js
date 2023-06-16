'use strict'

import { pesquisarCriterios, pesquisarCriteriosPeloIdTarefa, pesquisarDesejadoPeloIdCriterio } from './apiCriterios.js'
import { updateCriterio } from './apiCriterios.js'

const idTarefa = localStorage.getItem('idTarefaParaAluno')
const idTarefaFormat = parseInt(idTarefa)
console.log(idTarefaFormat);



const criterioForEach = async () => {

    const criterios = await pesquisarCriterios();
    const pesquisarCriteriosId = await pesquisarCriteriosPeloIdTarefa(idTarefaFormat);
    //console.log(pesquisarCriteriosId);


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

        const optionVazia = document.createElement('option')
        optionVazia.value = "branco"
        optionVazia.textContent = " "

        const optionFalse = document.createElement('option')
        optionFalse.value = "false"
        optionFalse.textContent = "NÃO"

        const tdCheckBox = document.createElement('td')
        const inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        inputCheckbox.classList.add('checkbox')

        const buttonEnviar = document.createElement('button')
        buttonEnviar.classList.add('buttonEnviarResultados')
        buttonEnviar.textContent = "enviar"
        buttonEnviar.classList.add('d-none')

        if (criterio.observacao_nota_criterio == true) {
            inputCheckbox.checked = true
        }

        const valoresDesejadosForEach = async () => {
            const desejados = await pesquisarDesejadoPeloIdCriterio(criterio.id_criterio);
            const valores = [];

            desejados.forEach((valor) => {
                valores.push(valor.valor);
            });

            tdValores.textContent = valores.join(", ");
        };


        valoresDesejadosForEach()

        function verificarAlteracoes() {
            const valorSelect = selectNotaObtida.value;
            const valorInput = inputAluno.value;

            if (valorSelect !== "branco" && valorInput !== '') {
                
                console.log(valorSelect);
                console.log(valorInput);

                buttonEnviar.classList.remove('d-none');
                buttonEnviar.classList.add('d-block');
            }
        }


        selectNotaObtida.addEventListener('change', verificarAlteracoes);
        inputAluno.addEventListener('change', verificarAlteracoes);

        buttonEnviar.addEventListener('click', (event) => {
            event.preventDefault()
            buttonEnviar.classList.remove('d-block')
            buttonEnviar.classList.add('d-none')
            console.log('id criterio:', criterio.id_criterio, 'valorDoInput:', inputAluno.value);
            console.log('id criterio:', criterio.id_criterio, 'valorDoSelect:', selectNotaObtida.value);
        })

        tableContainer.append(trContainer)
        trContainer.append(tdDescricao, tdValores, tdInputAluno, tdContainerSelect, tdCheckBox, buttonEnviar)
        tdInputAluno.append(inputAluno)
        tdCheckBox.append(inputCheckbox)
        tdContainerSelect.append(selectNotaObtida)
        selectNotaObtida.append(optionVazia, optionTrue, optionFalse)
    });


}

criterioForEach()