import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
import { ExpensesContext } from '../store/expenses-context';
import { TextInput } from 'react-native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { deleteExpensehttp, storeExpense, updateExpense } from '../util/http';

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseCtx.expenses.find(expense => expense.id === editedExpenseId)

  useLayoutEffect(() => {
    console.log('Setting title, isEditing =', isEditing);
    navigation.setOptions({ title: isEditing ? 'Edit Expense' : 'Add Expense' });
  }, [navigation, isEditing]);

  async function deleteExpense() { 
    await deleteExpensehttp(editedExpenseId);
   expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId,
        expenseData
      );
      await updateExpense(expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expenseCtx.addExpense(
        { ...expenseData, id: id }


      );
    }
    navigation.goBack();
  }



  return (

    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update  ' : 'Add'} onSubmit={confirmHandler} defaultValues={selectedExpense} />


      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton name="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpense} />
        </View>

      )}

    </View>
  )

}

export default ManageExpense;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center"
  }
})
