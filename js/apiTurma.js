'use strict'

export const getTodasTurmas = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma`
    const response = await fetch(url)
    const data = await response.json()

    return data.turmas

}

export const getTurmasByIDCurso = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma`
    const response = await fetch(url)
    const data = await response.json()

    return data.turmas

}

export const createTurma = async (turma) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(turma)
    };
  
    fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload();
      } else {
        console.log('Erro ao criar a turma.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error);
    });
}

export const updateTurma = async (turma) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma/${turma.id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(turma)
  };

  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.log('Erro ao atualizar a turma.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });

}

export const deleteTurma= async (idTurma) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma/${idTurma}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.log('Erro ao deletar a turma.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });
}