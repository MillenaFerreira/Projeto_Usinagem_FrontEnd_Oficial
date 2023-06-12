'use strict'

import { pesquisarMaterias } from "../js/apiMateria.js"

const materia = await pesquisarMaterias()

const criarTable = (materia) => {

    //Principal
    const tr = document.createElement('tr')

    const td_nome = document.createElement('td')
    td_nome.classList.add('dataCurso')
    td_nome.dataset.title = 'Name'
    td_nome.textContent = materia.nome

    const td_sigla = document.createElement('td')
    td_sigla.classList.add('dataSigla')
    td_sigla.dataset.title = 'Registro'
    td_sigla.textContent = materia.sigla

    const td_carga = document.createElement('td')
    td_carga.classList.add('dataCargaHoraria')
    td_carga.dataset.title = 'Usuario'
    
    //dentro td_carga terá:
    const iconHora = document.createElement('i')
    iconHora.classList.add('fa-solid')
    iconHora.classList.add('fa-clock')

    const carga_horaria = document.createElement('span')
    carga_horaria.textContent = ' ' + materia.carga_horaria + 'H'

    const td_icon_editar = document.createElement('td')
    td_icon_editar.classList.add('IconEditar')

    //dentro td_icon_editar terá:
    const iconEditar = document.createElement('a')
    iconEditar.classList.add('far')
    iconEditar.classList.add('fa-edit')
    iconEditar.href = '#modal__editar'
    // iconEditar.addEventListener('click', function () {
    //     localStorage.setItem('id_update', materia.id)

    //     // document.getElementById("myInputNomeValor").value = materia.nome;
    //     // document.getElementById("myInputCargaHorariaValor").value = materia.carga_horaria;
    //     // document.getElementById("myInputDescricaoValor").value = materia.descricao;
    //     // document.getElementById("myInputSiglaValor").value = materia.sigla;
    //     // document.getElementById("myInputUrlValor").value = materia.foto;
        
    // })

    const td_icon_deletar = document.createElement('td')
    td_icon_deletar.classList.add('IconEditar')

    //dentro td_icon_deletar terá:
    const iconDeletar = document.createElement('a')
    iconDeletar.classList.add('fas')
    iconDeletar.classList.add('fa-trash')
    iconDeletar.href = "#modal__deletar"
    // iconDeletar.addEventListener('click', function () {
    //     localStorage.setItem('id', materia.id)
    // })
    

    tr.append(td_nome, td_sigla, td_carga, td_icon_editar, td_icon_deletar)
    td_carga.append(iconHora, carga_horaria)
    td_icon_editar.append(iconEditar)
    td_icon_deletar.append(iconDeletar)

    return tr
}

export const carregarTableMaterias = () => {
    const table = document.querySelector('.tabelaItemsMaterias')
    const tableJSON = materia.map(criarTable)

    table.replaceChildren(...tableJSON)
}

carregarTableMaterias()