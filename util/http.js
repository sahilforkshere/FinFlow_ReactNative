import axios from "axios";

const BASE_URL = 'https://react-native-e4c19-default-rtdb.firebaseio.com/expenses';

export async function storeExpense(expenseData) {
  const response = await axios({
    method: 'post',
    url: BASE_URL + '.json',
    data: expenseData,
  });
  console.log('stored expense:', response.data);
  return response.data.name;
}

export async function fetchExpenses() {
  const response = await axios.get(BASE_URL + '.json');
  const expenses = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }
  return expenses;
}
