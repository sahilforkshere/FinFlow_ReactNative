import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../ui/Button';
import Input from './Input'

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
    const [inputValue, setInputValue] = useState({
        amount: '',
        date: '',
        description: ''
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
        const expenseData = {
            amount: +inputValue.amount,
            date: new Date(y, m - 1, d),
            description: inputValue.description
        };
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