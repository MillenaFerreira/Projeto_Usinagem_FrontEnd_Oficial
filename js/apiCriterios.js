'use strict'

export const pesquisarCriterios = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio`;
    const response = await fetch(url);
    const data = await response.json();
    return data.criterios;
  }
export const pesquisarMargemErro = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/margem-erro`;
    const response = await fetch(url);
    const data = await response.json();
    return data.margem_erro;
  }

export const pesquisarDesejadoPeloIdCriterio = async (idCriterio) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/resultado-desejado?idCriterio=${idCriterio}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.resultado_desejado;
  }


  export const createDesejado = async (desejado) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/resultado-desejado`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(desejado)
    };
    fetch(url, options)
    .then(response => {
      if (response.ok) {
         location.reload()
      } else {
        console.log('Erro ao criar o desejado.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error);
    });
  }

  export const createMargemErro = async (margemErro) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/margem-erro`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(margemErro)
    };
    fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload();
  
      } else {
        console.log('Erro ao criar o desejado.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error);
    });
  }

export const pesquisarCriteriosPeloIdTarefa = async (idTarefa) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio?idTarefa=${idTarefa}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.criterios;
  }

  export const updateCriterio = async (idCriterio, bodyCriterio) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio/${idCriterio}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyCriterio)
    };
  
    fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload();
  
      } else {
        console.log('Erro ao atualizar critério.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error);
    });
  
  }

  export const deleteCriterio = async (idCriterio) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio/${idCriterio}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload();
  
      } else {
        console.log('Erro ao deletar critério.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error);
    });
  }

export const createCriterio = async (idTarefa, criterio) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio?idTarefa=${idTarefa}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(criterio)
  };
  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();

    } else {
      console.log('Erro ao criar o critério.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });
}