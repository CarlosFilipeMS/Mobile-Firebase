import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Botao } from '../components/botao';
import { Card } from 'react-native-paper';
import ProductCard from '../components/card';

export interface HomescreenProps {

}

export function Homescreen (props: HomescreenProps) {
    return (
        <View>
            <Text>Home</Text>
            <ScrollView>
                <View style={styles.cont}>
                    <ProductCard
                        imageUrl="https://static.netshoes.com.br/produtos/camiseta-adidas-3-listras-masculina/26/FB8-3907-026/FB8-3907-026_zoom1.jpg?ts=1695700959&"
                        name="Produto 1"
                        price={100}
                        discount={20}
                    />
                    <ProductCard
                        imageUrl="https://static.netshoes.com.br/produtos/camiseta-adidas-3-listras-masculina/26/FB8-3907-026/FB8-3907-026_zoom1.jpg?ts=1695700959&"
                        name="Produto 1"
                        price={100}
                        discount={20}
                    />
                    <ProductCard
                        imageUrl="https://static.netshoes.com.br/produtos/camiseta-adidas-3-listras-masculina/26/FB8-3907-026/FB8-3907-026_zoom1.jpg?ts=1695700959&"
                        name="Produto 1"
                        price={100}
                        discount={20}
                    /><ProductCard
                        imageUrl="https://static.netshoes.com.br/produtos/camiseta-adidas-3-listras-masculina/26/FB8-3907-026/FB8-3907-026_zoom1.jpg?ts=1695700959&"
                        name="Produto 1"
                        price={100}
                        discount={20}
                    />
                    <ProductCard
                        imageUrl="https://static.netshoes.com.br/produtos/camiseta-adidas-3-listras-masculina/26/FB8-3907-026/FB8-3907-026_zoom1.jpg?ts=1695700959&"
                        name="Produto 1"
                        price={100}
                        discount={20}
                    />
                    <ProductCard
                        imageUrl="https://static.netshoes.com.br/produtos/camiseta-adidas-3-listras-masculina/26/FB8-3907-026/FB8-3907-026_zoom1.jpg?ts=1695700959&"
                        name="Produto 1"
                        price={100}
                        discount={20}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        marginTop: '10%',
        height: '95%',
        backgroundColor: 'blue',
    }
});