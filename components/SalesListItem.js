import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SalesListItem = ({ item }) => {
  const { productName, quantity, price } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{productName}</Text>
      <Text style={styles.quantity}>{`Quantity: ${quantity}`}</Text>
      <Text style={styles.price}>{`Price: $${price}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});

export default SalesListItem;
