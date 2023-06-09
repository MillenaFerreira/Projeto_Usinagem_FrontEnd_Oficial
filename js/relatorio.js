'use strict'

import { pesquisarCriterios } from './apiCriterios.js'
import { updateCriterio } from './apiCriterios.js'

const criterioForEach = async () => {

    const criterios = await pesquisarCriterios();


    const registroCriterios = criterios;
    //console.log(registroCriterios);

    registroCriterios.forEach((criterio) => {
        console.log(criterio);

        const container_relatorio = document.getElementById('container-relatorio')

        const container_dados = document.createElement('div')
        container_dados.classList.add('dados')
        container_dados.classList.add('criteriosDados')
        container_dados.id = 'dados'

        const descricaoCriterio = document.createElement('i');
        descricaoCriterio.classList.add('descricaoCriterio');
        if (criterio.descricao_criterio && criterio.descricao_criterio !== "") {
            descricaoCriterio.textContent = criterio.descricao_criterio.slice(0, 9) + "...";
        } else {
            descricaoCriterio.textContent = 'Este critério não possui uma descrição. Caso possua alguma dúvida, solicite ajuda ao seu professor'.slice(0, 9) + "...";
        }



        const desejadoContainer = document.createElement('div')
        desejadoContainer.classList.add('desejadoContainer')

        const desejado = document.createElement('i')
        desejado.textContent = criterio.resultado_desejado_criterio

        const margemErroContainer = document.createElement('div')
        margemErroContainer.classList.add('margemErroContainer')
        const margemMinimo = document.createElement('span')
        const margemMaximo = document.createElement('span')

        const desejadoContainer2 = document.createElement('div')
        desejadoContainer2.classList.add('desejadoContainer')

        const desejado2 = document.createElement('i')
        desejado2.textContent = criterio.resultado_desejado_criterio

        const margemErroContainer2 = document.createElement('div')
        margemErroContainer2.classList.add('margemErroContainer')
        const margemMinimo2 = document.createElement('span')
        const margemMaximo2 = document.createElement('span')


        // if (criterio.margem_erro.resultados != null) {

        //     if (criterio.margem_erro.resultados[0] != null) {
        //         margemMinimo.textContent = criterio.margem_erro.resultados[0].descricao;
        //     }

        //     if (criterio.margem_erro.resultados[1] != null) {
        //         margemMaximo.textContent = criterio.margem_erro.resultados[1].descricao;
        //     }


        // }



        const obtido = document.createElement('i')
        obtido.classList.add('fa-sharp')
        obtido.classList.add('fa-solid')
        obtido.classList.add('fa-xmark')

        const avaliacao = document.createElement('i')
        avaliacao.classList.add('fa-sharp')
        avaliacao.classList.add('fa-solid')
        avaliacao.classList.add('fa-xmark')



        const container = document.createElement('div')
        container.classList.add('containerInput')

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('my-checkbox');
        checkbox.disabled = true;

        const spanCheck = document.createElement('span')
        spanCheck.classList.add('checkmark')

        if (criterio.tipo_critico == 1) {
            checkbox.checked = true;
        }

        const divButtonEdit = document.createElement('div')
        divButtonEdit.classList.add('adicionar_editar_deletar')
        divButtonEdit.classList.add('criterio-button')

        const buttonEdit = document.createElement('button')
        buttonEdit.classList.add('far')
        buttonEdit.classList.add('fa-edit')

        const modalEditar = document.createElement('div')
        modalEditar.classList.add('d-none')
        modalEditar.classList.add('modal')

        const modalEditarContent = document.createElement('div')
        modalEditar.classList.add('modalContent')

        const btnBack = document.createElement('button')
        btnBack.classList.add('buttonBack')

        const iconeBack = document.createElement('i')
        iconeBack.classList.add('fa-solid')
        iconeBack.classList.add('fa-right-from-bracket')

        const editH2 = document.createElement('h2')
        editH2.textContent = 'Área de edição'
        editH2.classList.add('editH2')

        const contentEditRelatorio = document.createElement('div')
        contentEditRelatorio.classList.add('contentEditRelatorio')

        const contentShowDesc = document.createElement('div')
        contentShowDesc.classList.add('contentShowDesc')

        const showH3 = document.createElement('h3')
        showH3.classList.add('showH3')
        showH3.textContent = 'Descrição do critério:'

        const textDesc = document.createElement('textarea')
        textDesc.classList.add('textDesc')
        if (criterio.descricao_criterio && criterio.descricao_criterio !== "") {
            textDesc.textContent = criterio.descricao_criterio
        } else {
            textDesc.textContent = 'Este critério não possui uma descrição. Caso possua alguma dúvida, solicite ajuda ao seu professor';
        }

        textDesc.disabled = true

        const showDesejadoContainer = document.createElement('div')
        showDesejadoContainer.classList.add('showDesejadoContainer')

        const spanDesejado = document.createElement('h3')
        spanDesejado.classList.add('showH3')
        spanDesejado.textContent = 'Desejado: '



        const avaliacaoObtidoContainer = document.createElement('div')
        avaliacaoObtidoContainer.classList.add('avaliacaoObtidoContainer')


        const spanObtido = document.createElement('h3')
        spanObtido.classList.add('showH3')
        spanObtido.textContent = 'Obtido: '

        const inputObtido = document.createElement('input')
        inputObtido.type = 'number'

        const avaliacaoContainer = document.createElement('div')
        avaliacaoContainer.classList.add('avaliacaoContainer')

        const formAvaliacao = document.createElement('form')
        formAvaliacao.method = 'post'

        const spanAvaliacao = document.createElement('h3')
        spanAvaliacao.classList.add('showH3')
        spanAvaliacao.textContent = 'Avaliação: '

        const opçoes = document.createElement('select')
        opçoes.name = 'S/N'

        const simOption = document.createElement('option')
        simOption.value = 1
        simOption.textContent = 'sim'

        const noOption = document.createElement('option')
        noOption.value = 'nada'
        noOption.textContent = ''

        const naoOption = document.createElement('option')
        naoOption.value = 2
        naoOption.textContent = 'não'

        const obtidoContainer = document.createElement('div')
        obtidoContainer.classList.add('obtidoContainer')


        const btnSave2 = document.createElement('button')
        btnSave2.classList.add('botaoEditarSave')
        btnSave2.classList.add('d-none')

        const textSave = document.createElement('i')
        textSave.textContent = 'Save'

        container_relatorio.append(container_dados)
        container_dados.append(descricaoCriterio, desejadoContainer, obtido, avaliacao, container, divButtonEdit, modalEditar)
        modalEditar.append(modalEditarContent)
        modalEditarContent.append(btnBack, editH2, contentEditRelatorio)
        contentEditRelatorio.append(contentShowDesc)
        btnSave2.append(textSave)

        contentShowDesc.append(showH3, textDesc, showDesejadoContainer, avaliacaoObtidoContainer, btnSave2)
        avaliacaoObtidoContainer.append(avaliacaoContainer, obtidoContainer)
        avaliacaoContainer.append(spanAvaliacao, formAvaliacao)
        obtidoContainer.append(spanObtido, inputObtido)
        formAvaliacao.append(opçoes)

        opçoes.append(noOption, simOption, naoOption)
        showDesejadoContainer.append(spanDesejado, desejadoContainer2)
        btnBack.append(iconeBack)
        desejadoContainer.append(desejado, margemErroContainer)
        margemErroContainer.append(margemMinimo, margemMaximo)
        desejadoContainer2.append(desejado2, margemErroContainer2)
        margemErroContainer2.append(margemMinimo2, margemMaximo2)
        container.append(checkbox, spanCheck)
        divButtonEdit.append(buttonEdit)

        buttonEdit.addEventListener('click', (event) => {
            event.preventDefault();
            modalEditar.classList.add('d-flex')
            modalEditar.classList.remove('d-none')
        })

        btnBack.addEventListener('click', (event) => {
            event.preventDefault();
            modalEditar.classList.remove('d-flex')
            modalEditar.classList.add('d-none')
        })

        const updateMudancas = [opçoes, inputObtido]

        let mudancaInput;
        let mudancaSelect;

        updateMudancas.forEach((mudanca) => {
            mudanca.addEventListener('change', function () {
                if (mudanca.tagName === 'INPUT') {
                    mudancaInput = mudanca.value;
                } else if (mudanca.tagName === 'SELECT') {

                    mudancaSelect = mudanca.value
                } else {
                    console.log('Mudança em outro tipo de elemento:', mudanca);
                }

                btnSave2.classList.add('d-flex');
                btnSave2.classList.remove('d-none');
            });
        });
        btnSave2.addEventListener('click', (event) => {
            event.preventDefault();

            // const novoValor1 = mudancaInput;
            const novoValor2 = mudancaSelect;
            console.log(novoValor2);

            const idCriterio = criterio.id;

            //const notaValidaCriterio = criterio.nota_valida_criterio;
            console.log(idCriterio);

            if(criterio.margem_erro.resultados != null){
                console.log('não é nulo o json resultados');
                if(criterio.margem_erro.resultados.length == 1){

                    console.log('apenas 1');
                }else{
                   
                    console.log('apenas 2');
                }
            }else{
                const criterioAPI = {
                    "id": criterio.id,
                    "descricao_criterio": `${criterio.descricao_criterio}`,
                    "nota_valida_criterio": `${novoValor2}`,
                    "resultado_desejado_criterio": `${criterio.resultado_desejado_criterio}`,
                    "tipo_critico_criterio": `${criterio.descricao_criterio}`,
                    "id_tarefa_criterio": `${criterio.tipo_critico_criterio}`,
                    "nome_tarefa": `${criterio.nome_tarefa}`,
                    "numero_tarefa": `${criterio.numero_tarefa}`,
                    "foto_peca_tarefa": `${criterio.foto_peca_tarefa}`,
                    "margem_erro":{
                        "status": `${criterio.margem_erro.status}`,
                        "message": `${criterio.margem_erro.status}`,
                    }
                }
                console.log('é nulo');
                console.log(criterioAPI);
                updateCriterio(criterioAPI)
            }

           // const atualizacao = {
              //  nota_valida_criterio: novoValor2
           // };

           // updateCriterio(idCriterio, 'nota_valida_criterio', novoValor2);

                modalEditar.classList.remove('d-flex');
                modalEditar.classList.add('d-none');
        });

    });
}

criterioForEach()