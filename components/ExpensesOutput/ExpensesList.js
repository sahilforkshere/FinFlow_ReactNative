import React from 'react'
import { FlatList, Text } from 'react-native'
import ExpenseItem from './ExpenseItem'

function renderExpenseItem({ item }) {
  console.log("renderExpenseItem item:", item);
  return (
    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}
    />
  );
}


function ExpensesList({ expenses }) {



    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => {
       return item.id
    }} />
}

export default ExpensesList
