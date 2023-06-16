import { getMatriculaAluno } from './apiTurmaCursoMateriaProfessor.js'

const criarDadosMateria = async () => {

    const idMatricula = localStorage.getItem('idAlunoMatricula') 

    const idMatriculaNumber = parseInt(idMatricula)

    const tarefasDados = await getMatriculaAluno(idMatriculaNumber);
    

    const containerTarefa = document.querySelector('.cards_turma')
    //console.log(containerTarefa);

    tarefasDados.forEach((materia) => {

        console.log(materia);

        const aLinkCard = document.createElement('a')
        aLinkCard.classList.add('cardLink')


        const card = document.createElement('div')
        card.classList.add('card2')

        const spanome = document.createElement('span')
        spanome.textContent = materia.nome_materia + ' - ' + materia.sigla_materia;

        const spanDescricao = document.createElement('span')
        spanDescricao.classList.add('descricaoMateria')
        spanDescricao.textContent = materia.descricao_materia;

        // const imgPeca = document.createElement('img')
        // imgPeca.src = tarefa.foto_peca

        const nomeTarefa = document.createElement('p')
        nomeTarefa.textContent = materia.carga_horaria_materia + 'hrs'

        card.append(aLinkCard,  spanome, spanDescricao, nomeTarefa)


        containerTarefa.append(card)

        aLinkCard.addEventListener('click', () => {
            localStorage.setItem('idMateria', materia.id_materia)
            localStorage.setItem('nomeMateria', materia.nome_materia)
            aLinkCard.href = "./areaAluno.html"
        })

    })

}

criarDadosMateria()