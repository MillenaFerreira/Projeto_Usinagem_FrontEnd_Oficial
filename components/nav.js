'use strict'

// POR ENQUANTO NÃO TEM COMO TROCAR OS NOMES
// MUDAR ISSO

class nav extends HTMLElement {
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

    nav {
        height: 100%;
        background-color: #3084B4;
    }
    
    .busca {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    
    .busca a {
        background-color: #3084B4;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.5rem;
        text-align: center;
    }
    
    .busca :hover {
        background-color: #074A71;
    }
    
    @media (max-width: 999px) {
        .busca {
            width: 100%;
        }
         .busca a {
            font-size: 1rem;
        }
    }

    `
        return css
    }

    component() {
        // Container Principal - container-header
        const nav = document.createElement('nav')

        //dentro do nav
        const ul = document.createElement('ul')
        ul.classList.add('busca')

        const cursos = document.createElement('a')
        cursos.textContent = 'Cursos'
        cursos.href = './cursos.html'

        const turmas = document.createElement('a')
        turmas.textContent = 'Turmas'
        turmas.href = './turmas.html'

        const alunos = document.createElement('a')
        alunos.textContent = 'Alunos'
        alunos.href = './alunos.html'
        
        nav.append(ul)
        ul.append(cursos, turmas, alunos)

        return nav

    }

}

customElements.define('nav-professor', nav)