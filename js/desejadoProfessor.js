'use strict'

import { pesquisarDesejadoPeloIdCriterio, createDesejado, createMargemErro, pesquisarMargemErro } from './apiCriterios.js';


// const pegarValorIdDesejado = localStorage.getItem('idDesejado')
// console.log('id desejado: ', pegarValorIdDesejado);

console.log();

const buttonAdicionar = document.getElementById('adicionar')
const modalCriterioAdc = document.getElementById('modal__adicionar__criterio')

const idDoCriterio = localStorage.getItem('idCriterio')

const titleCriterio = document.querySelector('.titleCriterio')

titleCriterio.textContent = 'Resultado desejado do critério: ' + idDoCriterio

const criterioDados = await pesquisarDesejadoPeloIdCriterio(idDoCriterio);

const margemErros = await pesquisarMargemErro();



//console.log(margemErros);


buttonAdicionar.addEventListener('click', (event) => {
    event.preventDefault()
    modalCriterioAdc.classList.add('d-flex2')
    modalCriterioAdc.classList.remove('d-none')


    const sairModalAdc = document.getElementById('sair')
    sairModalAdc.classList.add('d-none')
    sairModalAdc.classList.remove('d-flex2')


})

const createDesejadoFuncao = async () => {
    const desejado = document.getElementById('desejado')
    const margemMais = document.getElementById('margemMais')
    const margemMenos = document.getElementById('margemMenos')

    console.log(margemMais.value);
    console.log(margemMenos.value);

    const desejadoCriar = {
        "valor": desejado.value,
        "id_criterio": parseInt(idDoCriterio)
    }

    console.log(desejadoCriar);
    createDesejado(desejadoCriar)

}

const sendTarefa = document.getElementById('sendTarefa')

sendTarefa.addEventListener('click', (event) => {
    event.preventDefault()
    createDesejadoFuncao()
})

const createTableDesejado = () => {

    const containerTable = document.getElementById('tabela')

    criterioDados.forEach((criterio) => {



        const resultadoDados = document.createElement('tr')
        resultadoDados.classList.add('resultadoDados')

        const valorResultado = document.createElement('td')
        valorResultado.textContent = criterio.valor

        const margem1 = document.createElement('td')
        const margem2 = document.createElement('td')

        let hasButtonsCreated = false;

        margemErros.forEach((margemErro) => {
            if (margemErro.id_resultado_desejado == criterio.id_resultado_desejado) {
                console.log('possuem mesmos ids');
                margem1.textContent = margemErro.minimo;
                margem2.textContent = margemErro.maximo;
            } else {
                if (!hasButtonsCreated && margem1.textContent === '' && margem2.textContent === '') {
                    function abrirModalMargemErro(event) {
                        localStorage.setItem('id_resultado_desejado', criterio.id_resultado_desejado);
                        event.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        const modal__adicionar__margem = document.getElementById('modal__adicionar__margem');
                        modal__adicionar__margem.classList.add('d-flex2');
                        modal__adicionar__margem.classList.remove('d-none');
                    }

                    const buttonMargemErro1 = document.createElement('button');
                    buttonMargemErro1.classList.add('buttonMargemErro');
                    buttonMargemErro1.title = "Abre modal margem de erro";
                    buttonMargemErro1.addEventListener('click', abrirModalMargemErro);

                    const buttonMargemErro2 = document.createElement('button');
                    buttonMargemErro2.classList.add('buttonMargemErro');
                    buttonMargemErro2.title = "Abre modal margem de erro";
                    buttonMargemErro2.addEventListener('click', abrirModalMargemErro);

                    margem1.append(buttonMargemErro1);
                    margem2.append(buttonMargemErro2);
                    hasButtonsCreated = true;
                }
            }
        });

        containerTable.append(resultadoDados)
        resultadoDados.append(valorResultado, margem1, margem2)

    })
}


const createMargemErroFunction = () => {

    const idDoResultadoDesejado = localStorage.getItem('id_resultado_desejado')
    const idDoResultadoDesejadoFormatado = parseInt(idDoResultadoDesejado)

    const margemMais = document.getElementById('margemMais').value
    const margemMenos = document.getElementById('margemMenos').value

    const margemErro = {
        "minimo": margemMenos,
        "maximo": margemMais,
        "id_resultado_desejado": idDoResultadoDesejadoFormatado
    }

    console.log(margemErro);
    createMargemErro(margemErro)

}

const sendmargem = document.querySelector('.editEnviar')
console.log(sendmargem);

sendmargem.addEventListener('click', (event) => {
    event.preventDefault()
    createMargemErroFunction()

})

createTableDesejado()