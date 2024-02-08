import axios from 'axios';

export const getAddressByCep = async (cep: string) => {
  const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return data;
};

export const getUFBrazil = async () => {
  const {data} = await axios.get(
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  );
  return data;
};
