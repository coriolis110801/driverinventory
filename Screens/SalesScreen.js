import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import SalesListItem from '../components/SalesListItem';
import { getSalesData, saveSale } from '../api/sales';

const SalesScreen = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data from your Django backend API
    getSalesData().then((data) => {
      setSalesData(data);
    });
  }, []);

  const renderItem = ({ item }) => <SalesListItem item={item} />;

  const handleAddSale = (sale) => {
    // Save the sale to the backend API
    saveSale(sale).then((data) => {
      setSalesData([...salesData, data]);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sales</Text>
      <Button title="Add Sale" onPress={() => handleAddSale({ product: 'Product Name', quantity: 1, price: 10 })} />
      <FlatList
        data={salesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
});

export default SalesScreen;
