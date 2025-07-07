import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Button from '../ui/Button';
import Input from './Input'

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel,defaultValues }) {
    const [inputValue, setInputValue] = useState({
        amount: defaultValues ? defaultValues.amount.toString():' ',
        date: defaultValues ? defaultValues.date.toISOString().slice(0,10): '',
        description: defaultValues ?defaultValues.description : ''
    });



    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValue((currInputValue) => {
            return {
                ...currInputValue,
                [inputIdentifier]: enteredValue

            }
        });
    }
   function submitHandler() {
  const [d, m, y] = inputValue.date.split('/').map(Number);
  const parsed = new Date(y, m - 1, d);

  if (
    parsed.getFullYear() !== y ||
    parsed.getMonth() !== m - 1 ||
    parsed.getDate() !== d
  ) {
    return Alert.alert('Invalid date', 'Please enter a valid date in DD/MM/YYYY');
  }
  const expenseData={
    amount: +inputValue.amount,
    date: parsed,
    description: inputValue.description
  }
  const amountIsValid= !isNaN(expenseData.amount) && expenseData.amount>0;
  const dateIsValid=expenseData.date.toString()!=='Invalid Date';

const descriptionIsValid=expenseData.description.trim().length>0;

if (!amountIsValid || !dateIsValid ||!descriptionIsValid) {
    Alert.alert('Invalid Input','Please Check your input Value');
    return
}

  onSubmit(expenseData);
}



    return <View>

        <Text style={styles.title}>Your Expense </Text>
        <Input label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValue['amount']
        }} />
        <Input label="Date" textInputConfig={{
            placeholder: 'DD/MM/YYYY',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValue['date']

        }}
        />
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCorrect: false,
            autoCapitalize: 'none',
            onChangeText: inputChangeHandler.bind(this, 'description'),
            value: inputValue['description']
        }} />
        <View style={styles.buttonContainer}>
            <Button mode='flat' onPress={onCancel}>Cancel</Button>
            <Button onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
    </View>


}

export default ExpenseForm;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        minWidth: 120,

    }
})