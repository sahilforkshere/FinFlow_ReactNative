import React, { useContext } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date';

function RecentExpenses() {
  const expenseCtx=useContext(ExpensesContext);

  const recentExpenses=expenseCtx.expenses.filter((expense)=>{
    const today= new Date();
    const date7DaysAgo=getDateMinusDays(today,7);
    return expense.date>date7DaysAgo;
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days"/>
}

export default RecentExpenses
