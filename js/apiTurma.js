'use strict'

export const getTodasTurmas = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/turma`
    const response = await fetch(url)
    const data = await response.json()

    return data.turmas

}