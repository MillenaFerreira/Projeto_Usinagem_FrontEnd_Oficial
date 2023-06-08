'use strict'

import { getTodosCursos } from "../js/api/professor_curso.js"

const cursos = await getTodosCursos()

//const deletar = await deleteCurso()

//console.log(cursos.cursos);


const criarCard = (curso) => {

    //console.log('entrei no criar card');

    const card = document.createElement('div')
    card.classList.add('card_curso')

    //dentro do card_curso terá:
    const segura_tudo = document.createElement('div')
    segura_tudo.classList.add('segura_tudo')

    const editar_excluir = document.createElement('div')
    editar_excluir.classList.add('editar_excluir_cursos')

    //dentro do editar_excluir terá:
    const editar = document.createElement('a')
    editar.classList.add('far')
    editar.classList.add('fa-edit')
    editar.href = "#modal__editar"
    editar.addEventListener('click', function () {
        localStorage.setItem('id_update', curso.id)
        console.log(curso.id);

        document.getElementById("myInputNomeValor").value = curso.nome;
        document.getElementById("myInputCargaHorariaValor").value = curso.carga_horaria;
        document.getElementById("myInputDescricaoValor").value = curso.descricao;
        document.getElementById("myInputSiglaValor").value = curso.sigla;
        document.getElementById("myInputUrlValor").value = curso.foto;
        
    })

    const excluir = document.createElement('a')
    excluir.classList.add('fas')
    excluir.classList.add('fa-trash')
    excluir.href = "#modal__deletar"
    excluir.addEventListener('click', function () {
        localStorage.setItem('id', curso.id)
        console.log(curso.id);
    })

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
    hora_curso.textContent = `${curso.carga_horaria}h`


    card.append(segura_tudo, editar_excluir)
    editar_excluir.append(editar, excluir)
    segura_tudo.append(imagem, nome_carga)
    nome_carga.append(nome, carga_horaria)
    nome.append(nomeSigla, nomeCompleto)
    carga_horaria.append(icone, hora_curso)


    return card

}

export const carregarCardCursos = () => {
    const cards = document.querySelector('.cards_cursos')
    const cardsJSON = cursos.cursos.map(criarCard)
    //console.log(cards);

    cards.replaceChildren(...cardsJSON)
}

//carregarCard()