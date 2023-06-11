'use strict'

export const pegarUsuarioPerLogin = async (email, senha) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/usuario/email/senha/${email}?senha=${senha}`
    const response = await fetch(url)
    const data = await response.json()

    return data

}