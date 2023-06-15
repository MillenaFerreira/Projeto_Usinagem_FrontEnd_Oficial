'use strict'

export const pegarAlunosApi = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/aluno`
    const response = await fetch(url)
    const data = await response.json()

    return data

}

export const createAlunoApi = async (aluno) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/aluno/dados`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    };

    fetch(url, options)
    .then(response => {
        if(response.ok) {
            location.reload();
        } else {
            console.log('Erro ao criar o aluno')
        }
    })
    .catch(error => {
        console.log('Ocorreu um erro na requisição: ', error);
    });

}

export const updateAlunoApi = async (aluno) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/aluno/dados/${aluno.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    };

    fetch(url, options)
    .then(response => {
        if (response.ok) {
            location.reload();
        } else {
            console.log('Erro ao criar um aluno.')
        }
    })
    .catch (error => {
        console.log('Erro na requisição: ', error)
    });
}

export const updateStatusAlunoPorIdApi = async (aluno) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/aluno/dados/status/${aluno.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    };

    fetch(url, options)
    .then(response => {
        if (response.ok) {
            location.reload();
        } else {
            console.log('Erro ao deletar o aluno.')
        }
    })
    .catch (error => {
        console.log('Erro na requisição: ', error)
    })
}

export const pegarAlunoPorIdApi = async (id) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/aluno/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}
