import axios from "axios";

const BASE_URL = 'https://react-native-e4c19-default-rtdb.firebaseio.com/expenses';

export async function storeExpense(expenseData) {
  const response = await axios({
    method: 'post',
    url: BASE_URL + '.json',
    data: expenseData,
  });

  const id=response.data.name;
  console.log('stored expense:', response.data);
  return id;
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


 export function updateExpense (id,expenseData){
   return  axios.put(BASE_URL+`/${id}.json`,expenseData);
 }


 export function deleteExpensehttp(id){
    return axios.delete(BASE_URL+`/${id}.json`);

 }

