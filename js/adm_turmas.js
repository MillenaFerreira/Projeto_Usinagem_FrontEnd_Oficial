'use strict'

import { getTodasTurmas } from "../js/apiTurma.js"

const turmas = await getTodasTurmas()


const criarTable = (turmas) => {

    //Principal
    const tr = document.createElement('tr')

    const td_nome = document.createElement('td')
    td_nome.classList.add('dataTurma')
    td_nome.dataset.title = 'Name'
    td_nome.textContent = turmas.nome

    const td_data_inicio = document.createElement('td')
    td_data_inicio.classList.add('dataInicio')
    td_data_inicio.dataset.title = 'Inicio'
    td_data_inicio.textContent = turmas.data_inicio

    const td_data_conclusao = document.createElement('td')
    td_data_conclusao.classList.add('dataConclusao')
    td_data_conclusao.dataset.title = 'Conclusao'
    td_data_conclusao.textContent = turmas.data_conclusao
    
    const td_semestre = document.createElement('td')
    td_semestre.classList.add('dataSemestre')
    td_semestre.dataset.title = 'Semestre'
    td_semestre.textContent = turmas.semestre + 'ºSemestre'

    const td_icon_editar = document.createElement('td')
    td_icon_editar.classList.add('IconEditar')

    //dentro td_icon_editar terá:
    const iconEditar = document.createElement('a')
    iconEditar.classList.add('far')
    iconEditar.classList.add('fa-edit')
    iconEditar.href = '#modal__editar'
    iconEditar.addEventListener('click', function () {
        localStorage.setItem('id_update', turmas.id)

        // document.getElementById("myInputNomeValor").value = turmas.nome;
        // document.getElementById("myInputCargaHorariaValor").value = turmas.carga_horaria;
        // document.getElementById("myInputDescricaoValor").value = turmas.descricao;
        // document.getElementById("myInputSiglaValor").value = turmas.sigla;
        // document.getElementById("myInputUrlValor").value = turmas.foto;
        
    })

    const td_icon_deletar = document.createElement('td')
    td_icon_deletar.classList.add('IconEditar')

    //dentro td_icon_deletar terá:
    const iconDeletar = document.createElement('a')
    iconDeletar.classList.add('fas')
    iconDeletar.classList.add('fa-trash')
    iconDeletar.href = "#modal__deletar"
    iconDeletar.addEventListener('click', function () {
        localStorage.setItem('id', turmas.id)
    })
    

    tr.append(td_nome, td_data_inicio, td_data_conclusao, td_semestre, td_icon_editar, td_icon_deletar)
    td_icon_editar.append(iconEditar)
    td_icon_deletar.append(iconDeletar)

    return tr
}

export const carregarTableTurmas = () => {
    const table = document.querySelector('.tabelaItemsTurmas')
    const tableJSON = turmas.map(criarTable)

    table.replaceChildren(...tableJSON)
}

carregarTableTurmas()