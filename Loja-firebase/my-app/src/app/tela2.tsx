import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { useRouter } from 'expo-router';


const App = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [contato, setContato] = useState('');

    const router = useRouter();

    const handleCadastro = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            Alert.alert('Sucesso', 'Usuário criado com sucesso');
            router.push('tela1');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível criar o usuário, tente novamente');
        }
    };

    return (
        <View style={styles.background}>
            <Text style={styles.logo}>BHM</Text>
            <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#ffffff"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        placeholderTextColor="#ffffff"
                        keyboardType="numeric"
                        value={idade}
                        onChangeText={setIdade}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CEP"
                        placeholderTextColor="#ffffff"
                        keyboardType="numeric"
                        value={cep}
                        onChangeText={setCep}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nº"
                        placeholderTextColor="#ffffff"
                        keyboardType="numeric"
                        value={numero}
                        onChangeText={setNumero}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contato"
                        placeholderTextColor="#ffffff"
                        keyboardType="phone-pad"
                        value={contato}
                        onChangeText={setContato}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#ffffff"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#ffffff"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
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
        height: '100%',
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
    scroll:{
        width: '90%',
        
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

export default App;
