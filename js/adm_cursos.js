'use strict'

import { getTodosCursos } from "../js/apiCurso.js"

const cursos = await getTodosCursos()

const criarTable = (curso) => {

    //Principal
    const tr = document.createElement('tr')

    const td_nome = document.createElement('td')
    td_nome.classList.add('dataCurso')
    td_nome.dataset.title = 'Name'
    td_nome.textContent = curso.nome

    const td_sigla = document.createElement('td')
    td_sigla.classList.add('dataSigla')
    td_sigla.dataset.title = 'Registro'
    td_sigla.textContent = curso.sigla

    const td_carga = document.createElement('td')
    td_carga.classList.add('dataCargaHoraria')
    td_carga.dataset.title = 'Usuario'
    td_carga.textContent = curso.carga_horaria + 'h'

    //dentro td_carga terá:
    const iconHora = document.createElement('i')
    iconHora.classList.add('fa-solid')
    iconHora.classList.add('fa-clock')

    const td_icon_editar = document.createElement('td')
    td_icon_editar.classList.add('IconEditar')

    //dentro td_icon_editar terá:
    const iconEditar = document.createElement('a')
    iconEditar.classList.add('far')
    iconEditar.classList.add('fa-edit')
    iconEditar.href = '#modal__editar'
    iconEditar.addEventListener('click', function () {
        localStorage.setItem('id_update', curso.id)

        document.getElementById("myInputNomeValor").value = curso.nome;
        document.getElementById("myInputCargaHorariaValor").value = curso.carga_horaria;
        document.getElementById("myInputDescricaoValor").value = curso.descricao;
        document.getElementById("myInputSiglaValor").value = curso.sigla;
        document.getElementById("myInputUrlValor").value = curso.foto;
        
    })

    const td_icon_deletar = document.createElement('td')
    td_icon_deletar.classList.add('IconEditar')

    //dentro td_icon_deletar terá:
    const iconDeletar = document.createElement('a')
    iconDeletar.classList.add('fas')
    iconDeletar.classList.add('fa-trash')
    iconDeletar.href = "#modal__deletar"
    iconDeletar.addEventListener('click', function () {
        localStorage.setItem('id', curso.id)
    })
    

    tr.append(td_nome, td_sigla, td_carga, td_icon_editar, td_icon_deletar)
    td_carga.append(iconHora)
    td_icon_editar.append(iconEditar)
    td_icon_deletar.append(iconDeletar)

    return tr
}

export const carregarTableCursos = () => {
    const table = document.querySelector('.tabelaItems')
    const tableJSON = cursos.cursos.map(criarTable)

    table.replaceChildren(...tableJSON)
}

carregarTableCursos()