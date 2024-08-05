import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase-config';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert('Sucesso', 'Usuário logado com sucesso');
        router.push(''); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Erro', errorMessage);
      });
  };

  return (
    <View style={styles.background}>
      <Text style={styles.logo}>BHM</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%'
  },
  logo: {
    fontSize: 45,
    color: 'white',
    margin: '15%',
    fontWeight: 'bold',
  },
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#333333',
    width: '80%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
