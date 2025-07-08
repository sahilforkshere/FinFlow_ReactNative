import axios from 'axios';

export async function storeExpense(expenseData) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://react-native-e4c19-default-rtdb.firebaseio.com/expenses.json',
      data: expenseData,
    });
    console.log('stored expense:', response.data);
    return response.data.name; // Firebase returns the new key under `name`
  } catch (error) {
    console.error('Error storing expense:', error);
    throw error;
  }
}
