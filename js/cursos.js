'use strict'

import { getTodosCursos } from "../js/apiCurso.js"

const cursos = await getTodosCursos()

const criarCard = (curso) => {

    const card = document.createElement('div')
    card.classList.add('card_curso')

    //dentro do segura_tudo terá:
    const imagem = document.createElement('img')
    imagem.src = curso.foto

    const nome_carga = document.createElement('div')
    nome_carga.classList.add('nome_carga')

    //dentro do nome_carga terá:
    const nome = document.createElement('div')
    nome.classList.add('nome')

    const carga_horaria = document.createElement('div')
    carga_horaria.classList.add('carga_horaria')

    //dentro do nome terá:
    const nomeSigla = document.createElement('h2')
    nomeSigla.textContent = curso.sigla

    const nomeCompleto = document.createElement('span')
    nomeCompleto.textContent = curso.nome


    //dentro da carga_horaria terá:
    const icone = document.createElement('i')
    icone.classList.add('fa-solid')
    icone.classList.add('fa-clock')

    const hora_curso = document.createElement('div')
    hora_curso.textContent = `${curso.carga_horaria}H` 

    card.append(imagem, nome_carga)
    nome_carga.append(nome, carga_horaria)
    nome.append(nomeSigla, nomeCompleto)
    carga_horaria.append(icone, hora_curso)


    return card

}

const carregarCardCursos = () => {
    const cards = document.querySelector('.cards_cursos')
    const cardsJSON = cursos.cursos.map(criarCard)

    cards.replaceChildren(...cardsJSON)
}

carregarCardCursos()