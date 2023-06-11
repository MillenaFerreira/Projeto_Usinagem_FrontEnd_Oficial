'use strict'

// POR ENQUANTO NÃO TEM COMO TROCAR OS NOMES
// MUDAR ISSO

class nav extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome1 = 'Nome'
        this.nome2 = 'Nome'
        this.nome3 = 'Nome'
        this.nome4 = 'Nome'
        this.link1 = '#'
        this.link2 = '#'
        this.link3 = '#'
        this.link4 = '#'
    }

    static get observedAttributes() {
        return ['nome1', 'nome2', 'nome3', 'nome4', 'link1', 'link2' , 'link3', 'link4']
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
        cursos.textContent = this.nome1
        cursos.href = this.link1

        const turmas = document.createElement('a')
        turmas.textContent = this.nome2
        turmas.href = this.link2

        const disciplinas = document.createElement('a')
        disciplinas.textContent = this.nome3
        disciplinas.href = this.link3

        const alunos = document.createElement('a')
        alunos.textContent = this.nome4
        alunos.href = this.link4
        
        nav.append(ul)
        ul.append(cursos, turmas, disciplinas, alunos)

        return nav

    }

}

customElements.define('nav-professor', nav)