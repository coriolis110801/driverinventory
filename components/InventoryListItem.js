import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InventoryListItem = ({ item }) => {
  const { productName, stockLevel } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{productName}</Text>
      <Text style={styles.stockLevel}>{`Stock Level: ${stockLevel}`}</Text>
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
  stockLevel: {
    fontSize: 16,
    color: '#666',
  },
});

export default InventoryListItem;
