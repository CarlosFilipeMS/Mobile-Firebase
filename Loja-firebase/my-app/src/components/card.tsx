import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

type ProductCardProps = {
  imageUrl: string;
  name: string;
  price: number;
  discount?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price, discount }) => {
  const finalPrice = discount ? price - (price * discount / 100) : price;

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imageUrl }} style={styles.image} />
      <Card.Content style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceContainer}>
          {discount && <Text style={styles.discount}>${price.toFixed(2)}</Text>}
          <Text style={[styles.price, discount && styles.discountedPrice]}>
            ${finalPrice.toFixed(2)}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4d4d4d',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    height: 150,
  },
  content: {
    padding: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  discount: {
    color: '#000',
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    color: '#fff',
  },
});

export default ProductCard;
