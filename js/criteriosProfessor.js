'use strict'

import { createCriterio , pesquisarCriteriosPeloIdTarefa} from './apiCriterios.js'

const tarefaNome = localStorage.getItem('tarefaNome')
const tarefaId = localStorage.getItem('tarefaId')
const parseIntId = parseInt(tarefaId)


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

const showCriterioPeloIdTarefa = async () => {
    const criterioDados = await pesquisarCriteriosPeloIdTarefa(tarefaId);
    
    criterioDados.forEach((criterio) => {
        const cardsContainer = document.querySelector('.cards_criterio_professor')

        const cardCriterio = document.createElement('a')
        cardCriterio.classList.add('cardCriterio')

        const descCriterio = document.createElement('span')
        const tipoCritico = document.createElement('span')
        const observacao = document.createElement('span')

        descCriterio.textContent = "Descrição: " + criterio.descricao_criterio
        tipoCritico.textContent = "Tipo Crítico: " + criterio.tipo_critico
        observacao.textContent = "Observação nota: " + criterio.observacao_nota_criterio

        cardsContainer.append(cardCriterio)
        cardCriterio.append(descCriterio, tipoCritico, observacao)

        cardCriterio.addEventListener('click', () => {
           const modal_mensagem = document.querySelector('.modal_mensagem')
           modal_mensagem.classList.remove('d-none')
           modal_mensagem.classList.add('d-flex2')
           const sairModalMensagem = document.getElementById('sairModalMensagem')
           sairModalMensagem.addEventListener('click', (event) => {
               event.preventDefault();
               const modalMensgaem = document.querySelector('.modal_mensagem')
               modalMensgaem.classList.add('d-none')
               modalMensgaem.classList.remove('d-flex2')
           })
        })

        const editarModalButton = document.getElementById('editarTarefaButton')
        editarModalButton.addEventListener('click', (event)=> {
            event.preventDefault();
            
            const modal__editar__criterio = document.querySelector('.modal__editar__criterio')
            modal__editar__criterio.classList.add('d-flex')
            modal__editar__criterio.classList.remove('d-none')

            const modalMensgaem = document.querySelector('.modal_mensagem')
            modalMensgaem.classList.add('d-none')
            modalMensgaem.classList.remove('d-flex2')
        })

    })
    
}

showCriterioPeloIdTarefa()

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
    
    const criterio = {
        "descricao": `${descricaoCriterio.value}`,
        "observacao": observacaoNotaStatus,
        "tipo_critico": valorCriticoStatus,
        "id_tarefa": parseIntId
    }
    console.log(criterio);
    createCriterio(parseIntId, criterio)
    
}

sendCriterio.addEventListener('click', (event) => {
    event.preventDefault()
    adicionarCriterio()
})