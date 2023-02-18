import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SyncDataButton from '../components/SyncDataButton';
import { syncData } from '../api/sync';

const SyncDataScreen = () => {
  const [syncStatus, setSyncStatus] = useState('');

  const handleSyncData = () => {
    // Call the syncData function to sync data with your ERP system
    syncData()
      .then(() => setSyncStatus('Sync Successful'))
      .catch(() => setSyncStatus('Sync Failed'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sync Data</Text>
      <SyncDataButton onPress={handleSyncData} />
      <Text style={styles.status}>{syncStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    marginTop: 20,
  },
});

export default SyncDataScreen;
