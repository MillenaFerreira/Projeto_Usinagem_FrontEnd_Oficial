import { pesquisarMaterias } from './apiMateria.js'

const criarDadosMateria = async () => {
    console.log('foi');
    const tarefasDados = await pesquisarMaterias();
    console.log(tarefasDados);

    const containerTarefa = document.querySelector('.cards_turma')
    console.log(containerTarefa);

    tarefasDados.forEach((materia) => {


        const aLinkCard = document.createElement('a')
        aLinkCard.classList.add('cardLink')


        const card = document.createElement('div')
        card.classList.add('card2')

        const spanome = document.createElement('span')
        spanome.textContent = materia.nome + ' - ' + materia.sigla;

        const spanDescricao = document.createElement('span')
        spanDescricao.classList.add('descricaoMateria')
        spanDescricao.textContent = materia.descricao;

        // const imgPeca = document.createElement('img')
        // imgPeca.src = tarefa.foto_peca

        const nomeTarefa = document.createElement('p')
        nomeTarefa.textContent = materia.carga_horaria + 'hrs'

        card.append(aLinkCard,  spanome, spanDescricao, nomeTarefa)


        containerTarefa.append(card)

    })

}

criarDadosMateria()