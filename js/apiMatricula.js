export const getTodasMatriculas = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/matricula`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return data.matriculas;
  }