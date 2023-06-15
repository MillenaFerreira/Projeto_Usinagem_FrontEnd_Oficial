'use strict'

import { pesquisarDesejadoPeloIdCriterio, createDesejado } from './apiCriterios.js';


const buttonAdicionar = document.getElementById('adicionar')
const modalCriterioAdc = document.getElementById('modal__adicionar__criterio')

const idDoCriterio = localStorage.getItem('idCriterio')

const titleCriterio = document.querySelector('.titleCriterio')

titleCriterio.textContent = 'Resultado desejado do critério: ' + idDoCriterio

const criterioDados = await pesquisarDesejadoPeloIdCriterio(idDoCriterio);
console.log(criterioDados);


buttonAdicionar.addEventListener('click', (event) => {
    event.preventDefault()
    modalCriterioAdc.classList.add('d-flex2')
    modalCriterioAdc.classList.remove('d-none')


    const sairModalAdc = document.getElementById('sair')
    sairModalAdc.classList.add('d-none')
    sairModalAdc.classList.remove('d-flex2')


})

const createDesejadoFuncao = async () => {
    const desejado = document.getElementById('desejado')
    const margemMais = document.getElementById('margemMais')
    const margemMenos = document.getElementById('margemMenos')

    console.log(desejado.value);
    console.log(margemMais.value);
    console.log(margemMenos.value);

    const desejadoCriar = {
        "valor": desejado.value,
        "id_criterio": parseInt(idDoCriterio)
    }

    console.log(desejadoCriar);
    createDesejado(desejadoCriar)

}

const sendTarefa = document.getElementById('sendTarefa')

sendTarefa.addEventListener('click', (event) => {
    event.preventDefault()
    createDesejadoFuncao()
})

const createTableDesejado = () => {

    const containerTable = document.getElementById('tabela')

    criterioDados.forEach((criterio) => {


        const resultadoDados = document.createElement('tr')
        resultadoDados.classList.add('resultadoDados')

        const valorResultado = document.createElement('td')
        valorResultado.textContent = criterio.valor

        const margem1 = document.createElement('td')
        const margem2 = document.createElement('td')

        if (criterio.margem_erro) {

            criterio.margem_erro.forEach((margemErro) => {

                if (margemErro.minimo) {
                    margem1.textContent = margemErro.minimo
                }

                if (margemErro.maximo) {
                    margem2.textContent = margemErro.maximo
                }

            })



        }

        containerTable.append(resultadoDados)
        resultadoDados.append(valorResultado, margem1, margem2)

    })
}

createTableDesejado()