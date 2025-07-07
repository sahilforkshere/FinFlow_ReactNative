import React, { useContext } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

function AllExpenses() {
const expenseCtx=  useContext(ExpensesContext);
  return <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total" fallBackText="No Expenses Found" />
  
}

export default AllExpenses
