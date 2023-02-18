import axios from 'axios';

const API_BASE_URL = 'https://example.com/api/';

// Function to get the current stock levels
export const getStockLevels = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}stock-levels/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Function to update the stock levels for a specific product
export const updateStockLevel = async (productId, newStockLevel) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}products/${productId}/`, { stockLevel: newStockLevel });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Function to get the sales data for a specific driver
export const getSalesData = async (driverId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}sales/?driver=${driverId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Function to sync the data with the backend API
export const syncData = async (stockLevels, salesData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}sync/`, { stockLevels, salesData });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
