import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BarcodeScanner from '../components/BarcodeScanner';

const ScanProductScreen = () => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
    setScannedData(data);
  };

  return (
    <View style={styles.container}>
      <BarcodeScanner onScan={handleScan} />
      {scannedData && (
        <View style={styles.scannedDataContainer}>
          <Text style={styles.scannedDataLabel}>Scanned Data:</Text>
          <Text style={styles.scannedDataValue}>{scannedData}</Text>
        </View>
      )}
      <Button title="Save Product" onPress={() => saveProduct(scannedData)} disabled={!scannedData} />
    </View>
  );
};

const saveProduct = (data) => {
  // Implement the logic for saving the product to the inventory
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannedDataContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  scannedDataLabel: {
    fontWeight: 'bold',
  },
  scannedDataValue: {
    marginTop: 5,
  },
});

export default ScanProductScreen;
