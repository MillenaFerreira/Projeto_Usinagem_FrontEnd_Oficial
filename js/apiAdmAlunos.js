'use strict'

export const pegarAlunosApi = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/aluno`
    const response = await fetch(url)
    const data = await response.json()

    return data

}