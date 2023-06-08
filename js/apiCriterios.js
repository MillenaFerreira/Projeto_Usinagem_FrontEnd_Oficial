'use strict'

export const pesquisarCriterios = async () => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/criterio`;
    const response = await fetch(url);
    const data = await response.json();
    return data.criterios;
  }

  export const updateCriterio = async (idCriterio) => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/criterio/${idCriterio}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idCriterio)
    };
  
    fetch(url, options)
  
  }
  
  