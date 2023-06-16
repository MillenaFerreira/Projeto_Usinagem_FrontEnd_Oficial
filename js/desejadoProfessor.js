'use strict'

import { pesquisarDesejadoPeloIdCriterio, createDesejado, createMargemErro, pesquisarMargemErro, updateResultadoDesejado, updateMargemErro , deleteResultadoDesejado} from './apiCriterios.js';


const buttonAdicionar = document.getElementById('adicionar')
const modalCriterioAdc = document.getElementById('modal__adicionar__criterio')

const idDoCriterio = localStorage.getItem('idCriterio')

const titleCriterio = document.querySelector('.titleCriterio')

titleCriterio.textContent = 'Resultado desejado do critério: ' + idDoCriterio

const criterioDados = await pesquisarDesejadoPeloIdCriterio(idDoCriterio);

const margemErros = await pesquisarMargemErro();


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
  const containerTable = document.getElementById('tabela');

  criterioDados.forEach((criterio) => {
    const resultadoDados = document.createElement('tr');
    resultadoDados.classList.add('resultadoDados');

    const valorResultado = document.createElement('td');
    valorResultado.textContent = criterio.valor;

    const margem1 = document.createElement('td');
    margem1.classList.add('click')
    const margem2 = document.createElement('td');
    margem2.classList.add('click')

    let hasButtonsCreated = false;

    margemErros.forEach((margemErro) => {
      if (margemErro.id_resultado_desejado == criterio.id_resultado_desejado) {
        console.log('possuem mesmos ids');
        margem1.textContent = margemErro.minimo;
        margem2.textContent = margemErro.maximo;
        margem1.addEventListener('click', () => {
          window.location.href = "#modal__editar--margem__erro"
          document.getElementById("myInputNomeValor--MargemMais").value = margemErro.maximo
          document.getElementById("myInputNomeValor--MargemMenos").value = margemErro.minimo
        })
      } else {
        if (!hasButtonsCreated && margem1.textContent === '' && margem2.textContent === '') {
          function abrirModalMargemErro(event) {
            // localStorage.setItem('id_resultado_desejado', criterio.id_resultado_desejado);
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
          buttonMargemErro1.title = 'Abre modal margem de erro';
          buttonMargemErro1.addEventListener('click', abrirModalMargemErro);

          const buttonMargemErro2 = document.createElement('button');
          buttonMargemErro2.classList.add('buttonMargemErro');
          buttonMargemErro2.title = 'Abre modal margem de erro';
          buttonMargemErro2.addEventListener('click', abrirModalMargemErro);

          margem1.append(buttonMargemErro1);
          margem2.append(buttonMargemErro2);
          hasButtonsCreated = true;
        }
      }
    });

    const colunaAtualizar = document.createElement('td');
    colunaAtualizar.classList.add('colunaAtualizarDesejado')
    const colunaExcluir = document.createElement('td');

    const colunaAtualizarDesejado = document.createElement('td');
    colunaAtualizarDesejado.classList.add('colunaAtualizarDesejado')
    const colunaExcluirDesejado = document.createElement('td');


    //const certo = margemErros.map()

    // const buttonAtualizar = document.createElement('a');
    // buttonAtualizar.classList.add('buttonAtualizar');
    // buttonAtualizar.classList.add('far');
    // buttonAtualizar.classList.add('fa-edit');
    // buttonAtualizar.textContent = "Atualizar"
    // buttonAtualizar.title = 'Atualizar margem de erro';
    // buttonAtualizar.addEventListener('click', () => {
    //   localStorage.setItem('id_margem_erro', margemErros[0].id)
    //   window.location.href = "#modal__editar--margem__erro"
    //   document.getElementById("myInputNomeValor--MargemMais").value = margemErros[0].maximo
    //   document.getElementById("myInputNomeValor--MargemMenos").value = margemErros[0].minimo
    // });


    const buttonAtualizarDesejado = document.createElement('a');
    buttonAtualizarDesejado.classList.add('buttonAtualizar');
    buttonAtualizarDesejado.classList.add('far');
    buttonAtualizarDesejado.classList.add('fa-edit');
    buttonAtualizarDesejado.textContent = "Atualizar"
    buttonAtualizarDesejado.title = 'Atualizar resultado desejado';
    buttonAtualizarDesejado.addEventListener('click', () => {
      localStorage.getItem('id_update_desejado')
      localStorage.setItem('id_resultado_desejado', criterio.id_resultado_desejado);
      window.location.href = "#modal__editar--resultado__desejado"
      console.log(criterio);
      document.getElementById("myInputNomeValor").value = criterio.valor;

    })


    // const buttonExcluir = document.createElement('a');
    // buttonExcluir.classList.add('buttonExcluir');
    // buttonExcluir.classList.add('fas');
    // buttonExcluir.classList.add('fa-trash');
    // buttonExcluir.textContent = "Excluir"
    // buttonExcluir.title = 'Excluir margem erro';
    // buttonExcluir.addEventListener('click', () => {
    //   localStorage.setItem('id_resultado_desejado', criterio.id_resultado_desejado);
    //   window.location.href = "#modal__deletar"
    // })

    const buttonExcluirDesejado = document.createElement('a');
    buttonExcluirDesejado.classList.add('buttonExcluir');
    buttonExcluirDesejado.classList.add('fas');
    buttonExcluirDesejado.classList.add('fa-trash');
    buttonExcluirDesejado.textContent = "Excluir"
    buttonExcluirDesejado.title = 'Excluir resultado desejado';
    buttonExcluirDesejado.addEventListener('click', () => {
      localStorage.setItem('id_resultado_desejado', criterio.id_resultado_desejado);
      window.location.href = "#modal__deletar"
    })

    const colunaPaiBotoesFinais = document.createElement('div')
    colunaPaiBotoesFinais.classList.add('colunaPaiBotoesFinais')

    const colunaPaiBotoesInicial = document.createElement('div')
    colunaPaiBotoesInicial.classList.add('colunaPaiBotoesInicial')

    // buttonExcluir.addEventListener('click', () => {

    //   console.log('Excluir resultado desejado:', criterio.id_resultado_desejado);
    // });

    //   colunaAtualizar.appendChild(buttonAtualizar);
    //   colunaExcluir.appendChild(buttonExcluir);

    //   colunaAtualizarDesejado.appendChild(buttonAtualizarDesejado)
    //   colunaAtualizarDesejado.appendChild(buttonExcluirDesejado)

    //colunaPaiBotoesFinais.append(buttonExcluir)
    colunaPaiBotoesInicial.append(buttonAtualizarDesejado, buttonExcluirDesejado)
    containerTable.append(resultadoDados);
    resultadoDados.append(colunaPaiBotoesInicial, valorResultado, margem1, margem2);
  });
};


const updateCardDesejado = () => {
  //chamando o botão que vai editar
  const editarCardDesejado = document.getElementById("editar");

  editarCardDesejado.addEventListener('click', () => {
    const valorInput = document.getElementById("myInputNomeValor");

    const valor = valorInput.value;

    const idDesejadoUpdate = localStorage.getItem('id_resultado_desejado');
    const dadosAtualizado = {
      "id": parseInt(idDesejadoUpdate),
      "valor": `${valor}`,
      "id_criterio": parseInt(idDoCriterio)
    };
    console.log(dadosAtualizado.id + 'TESTE');
    console.log(dadosAtualizado);

    updateResultadoDesejado(dadosAtualizado.id, dadosAtualizado)

  })
}

const updateCardMargem = () => {
  //chamando o botão que vai editar
  const editarCardMargem = document.getElementById("editarMargem");

  editarCardMargem.addEventListener('click', () => {
    const maisInput = document.getElementById("myInputNomeValor--MargemMais");
    const menosInput = document.getElementById("myInputNomeValor--MargemMenos");

    const mais = maisInput.value;
    const menos = menosInput.value;

    const idResultadoDesejado = localStorage.getItem('id_resultado_desejado')
    const idMargemUpdate = localStorage.getItem('id_margem_erro');
    console.log(idMargemUpdate);
    const dadosAtualizado = {
      "id": parseInt(idMargemUpdate),
      "minimo": `${menos}`,
      "maximo": `${mais}`,
      "id_resultado_desejado": parseInt(idResultadoDesejado)
    };
    console.log(dadosAtualizado.id + 'TESTE');
    console.log(dadosAtualizado);

    updateMargemErro(dadosAtualizado.id, dadosAtualizado)

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

const deleteCardResultadoDesejado = () => {
  //chamando o botão que vai deletar
  const deletarCardDesejado = document.getElementById("Deletar");
  const idDoResultadoDesejado = localStorage.getItem('id_resultado_desejado')
  deletarCardDesejado.addEventListener('click', () => {
      deleteResultadoDesejado(idDoResultadoDesejado)
  })
}

createTableDesejado()
updateCardDesejado()
updateCardMargem()
deleteCardResultadoDesejado()