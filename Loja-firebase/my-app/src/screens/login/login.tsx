import { Formik } from 'formik';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Botao } from '../../components/botao';
import * as Yup from 'yup';

export default function Loginscreen() {

  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'teste@teste.com' && senha.trim() == '123456') 
      setResultado('logado')
    else
      setResultado('falhou')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
        })}
        onSubmit={handleLogin}>
        {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <Text style={styles.logo}>BHM</Text>
            <Text style={styles.titlePage}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.formText}>E-mail</Text>
                <TextInput  placeholder='Digite seu email' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('email')}/>
                { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
                <Text style={styles.formText}>Senha</Text>
                <TextInput  placeholder='Digite sua senha' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('senha')} secureTextEntry/>
                { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
                <Botao title="Logar" onPress={handleSubmit} disabled={isSubmitting} />
                { resultado == 'logado' && <Text style={styles.success}>Logado com sucesso</Text>}
                { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorreto</Text>}
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