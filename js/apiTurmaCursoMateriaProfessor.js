

export const getCursoProfessor = async (idProfessor) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/cursos-professor/${idProfessor}`
    const response = await fetch(url)
    const data = await response.json()

    return data.dados

}



export const getTurmaProfessor = async (idCurso) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/turmas-professor/${idProfessor}?idCurso=${idCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data

}

//https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma-curso-materia-prof/cursos-professor/1id