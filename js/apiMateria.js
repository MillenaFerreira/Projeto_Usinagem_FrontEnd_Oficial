'use strict'

export const pesquisarMaterias = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/materia`;
    const response = await fetch(url);
    const data = await response.json();
    return data.materias;
    console.log('api');
  }