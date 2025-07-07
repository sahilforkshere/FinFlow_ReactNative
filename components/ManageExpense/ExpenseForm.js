import React from 'react'
import { View } from 'react-native'
import Input from './Input'

function ExpenseForm() {

    function amountChangeHandler() {

    }
    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
        }} />
        <Input label="Date" textInputConfig={{
            placeholder: 'DD/MM/YYYY',
            maxLength: 10,
            onChangeText: () => { }

        }}
        />
        <Input label="Description" textInputConfig={{
          multiline:true,
          autoCorrect:false,
          autoCapitalize:'none'
        }} />
    </View>


}

export default ExpenseForm