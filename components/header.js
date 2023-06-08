'use strict'

class header extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.imagem_logo = '../img/logo.png'
        this.text_button = 'Login'
        this.color_button = 'black'
        this.link_button = '#'
        this.color_top = 'black'
    }

    static get observedAttributes() {
        return ['imagem_logo', 'text_button', 'color_button', 'link_button', 'color_top' ]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())

    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }

    .topo {
        color: white;
        height: 32px;
        padding: 0 26px;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    
    .informacao_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2vh;
        border-bottom: 3px solid #3084B4;
    }
    
    .logo {
        max-width: 100%;
        max-height: 100px;
    }
    
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 175px;
        height: 49px;
        border: 0;
        border-radius: 10px;
        color: white;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        cursor: pointer;
    }
    
    @media (max-width:640px) {
        .informacao_header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 2vh;
        }
    
        .login {
            width: 50%;
        }
    }
    `
        return css
    }

    component() {
        // Container Principal - container-header
        const container = document.createElement('div')
        container.classList.add('container-header')

        //dentro do container-header
        const topo = document.createElement('div')
        topo.classList.add('topo')
        topo.textContent = 'SENAI'
        topo.style.backgroundColor = this.color_top
        
        const informacao = document.createElement('div')
        informacao.classList.add('informacao_header')
        

        //dentro da informação
        const img = document.createElement('img')
        img.classList.add('logo')
        img.src = this.imagem_logo

        const login = document.createElement('a')
        login.classList.add('login')
        login.textContent = this.text_button
        login.style.backgroundColor = this.color_button
        login.href = this.link_button

        container.append(topo, informacao)
        informacao.append(img, login)

        return container

    }

}

customElements.define('header-padrao', header)