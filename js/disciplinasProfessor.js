'use strict'

import { pesquisarMateriasPeloIdDoProfessorTurma } from "../js/apiMateria.js"


var idTurma = localStorage.getItem('id_turma')
console.log(idTurma);

const pegarMateriaPeloIdProfessorMateria = async () => {

    const materiasProfessor = await pesquisarMateriasPeloIdDoProfessorTurma(1, idTurma);
    const materias = materiasProfessor
    
    const container = document.querySelector('.cards_discipinas_professor')

    materias.forEach((materia) => {
        console.log(materia);

        const linkCardDisciplina = document.createElement('a')
        linkCardDisciplina.classList.add('card_disciplina')

        const nomeMateria = document.createElement('h3')
        nomeMateria.classList.add('nome_disciplina')
        nomeMateria.textContent = materia.sigla_materia

        const descricaoMateria = document.createElement('p')
        descricaoMateria.classList.add('descricao_disciplina')
        descricaoMateria.textContent = materia.descricao_materia

        const cargaHoraria = document.createElement('span')
        cargaHoraria.classList.add('horario')
        cargaHoraria.textContent = materia.carga_horaria_materia

        const iconeHorario = document.createElement('i')
        iconeHorario.classList.add('fa-solid')
        iconeHorario.classList.add('fa-clock')

        container.append(linkCardDisciplina)
        linkCardDisciplina.append(nomeMateria,descricaoMateria,cargaHoraria)
        cargaHoraria.append(iconeHorario)

    });
}

pegarMateriaPeloIdProfessorMateria()