import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
import { ExpensesContext } from '../store/expenses-context';

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    console.log('Setting title, isEditing =', isEditing);
    navigation.setOptions({ title: isEditing ? 'Edit Expense' : 'Add Expense' });
  }, [navigation, isEditing]);

  function deleteExpense() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack();
  }
 function confirmHandler() {
  if (isEditing) {
    expenseCtx.updateExpense(editedExpenseId, {
      description: 'Test',
      amount: 2000,       
      date: new Date()    
    });
  } else {
    expenseCtx.addExpense({
      description: 'Test',
      amount: 1000,
      date: new Date()
    });
  }
  navigation.goBack();
}



  return (

    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button onPress={confirmHandler}>{isEditing ? 'Update  ' : 'Add'}</Button>
      </View>

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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    minWidth: 120,

  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center"
  }
})
