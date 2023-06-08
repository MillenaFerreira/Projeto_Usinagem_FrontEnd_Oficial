'use strict'

export const getTodosCursos = async () => {
  const url = `http://localhost:8080/v1/projeto-usinagem/curso`
  const response = await fetch(url)
  const dado = await response.json()

  return dado
}


export const createCurso = async (curso) => {
  const url = `http://localhost:8080/v1/projeto-usinagem/curso/`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(curso)
  };

  fetch(url, options)
}

export const updateCurso = async (curso) => {
  const url = `http://localhost:8080/v1/projeto-usinagem/curso/${curso.id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(curso)
  };

  fetch(url, options)

}

export const deleteCurso = async (idAluno) => {
  const url = `http://localhost:8080/v1/projeto-usinagem/curso/${idAluno}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
}
