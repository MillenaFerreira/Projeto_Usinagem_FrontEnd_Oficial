'use strict'

export const getTodosCursos = async () => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/curso`
  const response = await fetch(url)
  const dado = await response.json()

  return dado
}


export const createCurso = async (curso) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/curso`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(curso)
  };

  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.log('Erro ao criar o curso.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });
}

export const updateCurso = async (curso) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/curso/${curso.id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(curso)
  };

  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.log('Erro ao criar o curso.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });

}

export const deleteCurso = async (idAluno) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/curso/${idAluno}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.log('Erro ao criar o curso.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });
}
