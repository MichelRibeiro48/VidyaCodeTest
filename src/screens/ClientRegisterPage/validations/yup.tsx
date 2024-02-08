/* eslint-disable react-hooks/rules-of-hooks */
import {useValidationsBR} from 'validations-br';
import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
  name: yup.string().required('Necessário preencher o nome'),
  CNPJ: yup
    .string()
    .required('Necessário preencher o CNPJ')
    .test({
      message: 'CNPJ Invalido',
      test: value => {
        useValidationsBR('cnpj', value);
      },
    }),
  phone: yup
    .string()
    .required('Necessário Preencher o Telefone')
    .test({
      message: 'Telefone Invalido',
      test: value => {
        useValidationsBR('phone', value);
      },
    }),
  CEP: yup
    .string()
    .required('Necessário Preencher o CEP')
    .test({
      message: 'CEP Invalido',
      test: value => {
        useValidationsBR('cep', value);
      },
    }),
  state: yup.string().required('Necessário Preencher o Estado'),
  city: yup.string().required('Necessário Preencher a Cidade'),
  district: yup.string().required('Necessário Preencher o Bairro'),
  address: yup.string().required('Necessário Preencher o Endereço'),
  number: yup.string().required('Necessário Preencher o Numero'),
});
