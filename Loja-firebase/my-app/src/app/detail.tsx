import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { getDoc, doc } from 'firebase/firestore';
import { useRouter, useSearchParams } from 'expo-router';
import { db } from '../config/firebase-config';

const DetailScreen: React.FC = () => {
  const [produto, setProduto] = useState(null);
  const { id } = useSearchParams();

  useEffect(() => {
    if (id) {
      const fetchProduto = async () => {
        try {
          const docRef = doc(db, 'Produtos', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProduto({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Erro ao buscar produto: ', error);
        }
      };

      fetchProduto();
    }
  }, [id]);

  if (!produto) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{produto.nome}</Text>
      <Text>{produto.descricao}</Text>
      <Text>{produto.preco}</Text>
      {produto.foto && <Image source={{ uri: produto.foto }} style={styles.imagem} />}
      {produto.desconto && <Text>Desconto: {produto.desconto}%</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'grey',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
});

export default DetailScreen;
