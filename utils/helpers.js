// Function to format a number as currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
};


// Function to group an array of objects by a specific key
export const groupBy = (array, key) => {
  return array.reduce((result, item) => ({
    ...result,
    [item[key]]: [...(result[item[key]] || []), item],
  }), {});
};

// Function to generate a unique ID
export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
