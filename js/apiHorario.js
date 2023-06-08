'use strict'

export const pesquisarHorario = async () => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo`;
    const response = await fetch(url);
    const data = await response.json();
    return data.registro_tempos;
  }

  export const createHorario = async (horario) => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(horario)
    };
  
    fetch(url, options)
  }


  export const updateHorario = async (idHorario, bodyUpdate) => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo/${idHorario}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyUpdate)
    };
  
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          console.log('Horário atualizado com sucesso!');
          // Faça algo após a atualização do horário, se necessário
        } else {
          console.log('Erro ao atualizar o horário.');
        }
      })
      .catch(error => {
        console.log('Ocorreu um erro na requisição:', error);
      });
  }
  

  export const deleteHorario = async (idHorario) => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo/${idHorario}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options)
  }