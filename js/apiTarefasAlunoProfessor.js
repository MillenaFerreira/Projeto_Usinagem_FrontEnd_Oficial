'use strict'

export const pegarListaTarefasTurmaProfessorApi = async (idTurma, idProfessor, idMatricula) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/tarefa-turma-curso-materia-prof?idTurma=${idTurma}&idProfessor=${idProfessor}&idMatricula=${idMatricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

