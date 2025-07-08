import axios from "axios";

export function storeExpense(expenseData) {
    axios.post('https://react-native-e4c19-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    );
}