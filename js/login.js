'use strict'


import { pegarUsuarioPerLogin } from './validacao-usuarioApi.js'


const validarUsuario = async () => {
    const inputLogin = document.getElementById('inputLogin')

    const inputSenha = document.getElementById('inputSenha')
    
  
    const botao = document.getElementById('botaoEntrar')
    botao.addEventListener('click', async () => {

        const login = inputLogin.value
        const senhaHash = inputSenha.value
        
        const teste = await pegarUsuarioPerLogin(login, senhaHash)

      
        if (teste.status == 200 && teste.usuarios[0].nivel == 'Administrador') {
            window.location = '/pages/adm/administrador.html'
        } else if (teste.status == 200 && teste.usuarios[0].nivel == 'Aluno') {
            window.location = '/pages/aluno/aluno.html'
        } else if (teste.status == 200 && teste.usuarios[0].nivel == 'Professor') {
            window.location = '/pages/professor/professor.html'
        } else {
            informativoSenhaIncorreta()
        }

    })

}

await validarUsuario()

const informativoSenhaIncorreta = () => {
    const container = document.getElementById('containerLogin')

    const fundoTelaAviso = document.createElement('div')
    fundoTelaAviso.classList.add('fundoTelaAviso__telaAviso')

    const telaAviso = document.createElement('div')
    telaAviso.classList.add('telaAviso')

    const iconeFechar = document.createElement('ion-icon')
    iconeFechar.name = 'close-outline'
    iconeFechar.classList.add('telaAviso__iconeFechar')

    iconeFechar.addEventListener('click', () => {
        fundoTelaAviso.classList.remove('fundoTelaAviso__telaAviso')
        fundoTelaAviso.classList.add('fundoTelaAviso__telaAviso--none')
    })

    const tituloAviso = document.createElement('span')
    tituloAviso.classList.add('telaLogin__tituloAviso')
    tituloAviso.textContent = 'Senha ou Email incorretos!'

    fundoTelaAviso.append(
        telaAviso
    )

    telaAviso.append(
        tituloAviso,
        iconeFechar
    )

    container.append (
        fundoTelaAviso
    )

    return container

}


