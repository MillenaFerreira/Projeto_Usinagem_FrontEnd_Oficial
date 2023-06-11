'use strict'

export const pegarProfessoresApi = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/professor`
    const response = await fetch(url)
    const data = await response.json()

    return data

}