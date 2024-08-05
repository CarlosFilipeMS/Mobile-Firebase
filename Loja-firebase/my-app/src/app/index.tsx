import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { Link, useRouter } from 'expo-router';


const HomeScreen: React.FC = () => {
  const [produtos, setProdutos] = useState([]);
  

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Produtos'));
        const produtosList = [];
        querySnapshot.forEach((doc) => {
          produtosList.push({ id: doc.id, ...doc.data() });
        });
        setProdutos(produtosList);
      } catch (error) {
        console.error("Erro ao buscar produtos: ", error);
      }
    };

    fetchProdutos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text>{item.descricao}</Text>
      <Text>{item.preco}</Text>
      {item.foto && <Image source={{ uri: item.foto }} style={styles.imagem} />}
      {item.desconto && <Text>Desconto: {item.desconto}%</Text>}
      <Link href={`/detail?id=${item.id}`} style={styles.verMaisButton}>
        <Text style={styles.verMaisButtonText}>Ver mais</Text>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.logo}>BHM</Text>
        <View style={styles.authView}>
          <Link href='/tela1'><Text style={styles.authLink}>Entrar</Text></Link>
          <Link href='/tela2'><Text style={styles.authLink}>Cadastrar</Text></Link>
        </View>
      </View>  
      <Text style={styles.tituloReferecia}>Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:'15%',
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  authView: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authLink: {
    fontSize: 15,
    fontWeight:'bold',
    color: 'white'
  },
  tituloReferecia: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom:'5%',
    color: 'grey',
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  verMaisButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  verMaisButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
