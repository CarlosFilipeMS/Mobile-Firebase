import { Formik } from 'formik';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Botao } from '../../components/botao';
import * as Yup from 'yup';
import { Link, router } from 'expo-router';


export default function Cadasrtoscreen() {

  const [ resultado, setResultado ] = useState<null|'cadastrado'|'falhou'>(null);

  const handleRegister = async ({nome, dataNascimento, email, senha, confirmSenha, cep, celular}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (senha !== confirmSenha) {
      setResultado('falhou')
    } else {
      // Simule um cadastro bem-sucedido
      setResultado('cadastrado')
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{nome: '', dataNascimento: '', email: '', senha: '', confirmSenha: '', cep: '', celular: ''}}
        validationSchema={Yup.object().shape({
          nome: Yup.string().required('Informe o nome completo'),
          dataNascimento: Yup.date().required('Informe a data de nascimento'),
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres'),
          confirmSenha: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas precisam ser iguais').required('Confirme a senha'),
          cep: Yup.string().required('Informe o CEP').matches(/^\d{5}-\d{3}$/, 'CEP não válido'),
          celular: Yup.string().required('Informe o celular').matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Celular não válido')
        })}
        onSubmit={handleRegister}>
        {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <Text style={styles.logo}>BHM</Text>
            <Text style={styles.titlePage}>Cadastro</Text>
            <View style={styles.form}>
                <Text style={styles.formText}>Nome Completo</Text>
                <TextInput placeholder='Digite seu nome completo' onBlur={handleBlur('nome')} style={styles.textInput} onChangeText={handleChange('nome')}/>
                { errors.nome && touched.nome && <Text style={styles.fail}>{errors.nome}</Text>}
                <Text style={styles.formText}>Data de Nascimento</Text>
                <TextInput placeholder='Digite sua data de nascimento' onBlur={handleBlur('dataNascimento')} style={styles.textInput} onChangeText={handleChange('dataNascimento')}/>
                { errors.dataNascimento && touched.dataNascimento && <Text style={styles.fail}>{errors.dataNascimento}</Text>}
                <Text style={styles.formText}>E-mail</Text>
                <TextInput  placeholder='Digite seu email' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('email')}/>
                { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
                <Text style={styles.formText}>Senha</Text>
                <TextInput  placeholder='Digite sua senha' onBlur={handleBlur('senha')} style={styles.textInput} onChangeText={handleChange('senha')} secureTextEntry/>
                { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
                <Text style={styles.formText}>Confirme a Senha</Text>
                <TextInput  placeholder='Confirme sua senha' onBlur={handleBlur('confirmSenha')} style={styles.textInput} onChangeText={handleChange('confirmSenha')} secureTextEntry/>
                { errors.confirmSenha && touched.confirmSenha && <Text style={styles.fail}>{errors.confirmSenha}</Text>}
                <Text style={styles.formText}>CEP</Text>
                <TextInput placeholder='Digite seu CEP' onBlur={handleBlur('cep')} style={styles.textInput} onChangeText={handleChange('cep')}/>
                { errors.cep && touched.cep && <Text style={styles.fail}>{errors.cep}</Text>}
                <Text style={styles.formText}>Celular</Text>
                <TextInput placeholder='Digite seu celular' onBlur={handleBlur('celular')} style={styles.textInput} onChangeText={handleChange('celular')}/>
                { errors.celular && touched.celular && <Text style={styles.fail}>{errors.celular}</Text>}
                <Botao title="Cadastrar" onPress={handleSubmit} disabled={isSubmitting} />
                { resultado == 'cadastrado' && <Text style={styles.success}>Cadastro realizado com sucesso</Text>}
                { resultado == 'falhou' && <Text style={styles.fail}>Erro no cadastro, verifique os dados</Text>}
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 50,
    color: 'white',
    margin: 25
  },
  titlePage:{
    fontSize: 25,
    color: 'grey',
    marginBottom: 20
  },
  form: {
    width: '90%'
  },
  formText: {
    color: 'white'
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 2,
    marginVertical: 5,
  },
  fail: {
    textAlign:'center',
    color: 'red'
  },
  success: {
    textAlign:'center',
    color: 'green'
  }
});
