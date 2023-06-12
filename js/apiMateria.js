'use strict'

export const pesquisarMaterias = async () => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/materia`;
  const response = await fetch(url);
  const data = await response.json();
  return data.materias;

}

export const createMateria = async (materia) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/materia`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(materia)
  };

  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.log('Erro ao criar a materia.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });
}