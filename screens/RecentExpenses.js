import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import axios from 'axios';
function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);




  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpenses();
        console.log('Fetched expenses:', expenses);
        expenseCtx.setExpenses(expenses)
      } catch (err) {
        console.error('Error fetching expenses:', err);
      }
    }
    getExpenses();
  }, []);


  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText="No Expenses in 7 days,Trying to Money huh 😊" />
}

export default RecentExpenses
