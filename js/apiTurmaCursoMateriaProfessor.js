export const getCursoProfessor = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/cursos-professor/1`
    const response = await fetch(url)
    const data = await response.json()

    return data

}



export const getTurmaProfessor = async (idCurso) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/turmas-professor/1?idCurso=${idCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data

}

//https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/cursos-professor/1