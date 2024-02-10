import {useValidationsBR} from 'validations-br';
import * as yup from 'yup';

export const ValidationClientSchema = yup.object().shape({
  name: yup.string().required('Necessário preencher o nome'),
  CNPJ: yup.string().required('Necessário preencher o CNPJ'),
  phone: yup.string().required('Necessário Preencher o Telefone'),

  CEP: yup.string().required('Necessário Preencher o CEP'),

  state: yup.string().required('Necessário Preencher o Estado'),
  city: yup.string().required('Necessário Preencher a Cidade'),
  district: yup.string().required('Necessário Preencher o Bairro'),
  address: yup.string().required('Necessário Preencher o Endereço'),
  number: yup.string().required('Necessário Preencher o Numero'),
});

export const ValidationProductSchema = yup.object().shape({
  name: yup.string().required('Necessário preencher o nome'),
  price: yup.string().required('Necessário preencher o preço'),
  description: yup.string().required('Necessário preencher o preço'),
});
