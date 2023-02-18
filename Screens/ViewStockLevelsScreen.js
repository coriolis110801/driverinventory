import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import InventoryListItem from '../components/InventoryListItem';
import { getInventoryItems } from '../api/inventory';

const ViewStockLevelsScreen = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    // Fetch inventory data from your Django backend API
    getInventoryItems().then((data) => {
      setInventoryItems(data);
    });
  }, []);

  const renderItem = ({ item }) => <InventoryListItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Inventory Levels</Text>
      <FlatList
        data={inventoryItems}
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

export default ViewStockLevelsScreen;
