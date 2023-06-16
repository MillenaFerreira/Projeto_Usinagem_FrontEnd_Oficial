export const getCursoProfessor = async (idProfessor) => {
    console.log(idProfessor);
    
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/cursos-professor/${idProfessor}`
    const response = await fetch(url)
    const data = await response.json()

    return data.dados

}

export const getTurmaProfessor = async (idProfessor, idCurso) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/cursos-professor/${idProfessor}?idCurso=${idCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data.dados
}

export const getDisciplinaProfessor = async (idProfessor, idTurma) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/materias-professor/${idProfessor}?idTurma=${idTurma}`
    const response = await fetch(url)
    const data = await response.json()

    return data.dados
}

export const getAlunosProfessor = async (idTurma) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-matricula?idTurma=${idTurma}`
    const response = await fetch(url)
    const data = await response.json()

    return data.matriculas
}

export const getMatriculaAluno = async (idMatricula) => {
    const url = `https://usinagem-senai-api.cyclic.app//v1/projeto-usinagem/turma-curso-materia-prof/materias-matricula/${idMatricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data.dados
}

///v1/projeto-usinagem/turma-curso-materia-prof/materias-matricula/1