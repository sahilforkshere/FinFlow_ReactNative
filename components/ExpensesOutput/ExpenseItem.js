import React, { use } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { getFormattedDate } from '../../util/date';

function ExpenseItem({ id, description, date, amount }) {
  const amtNum = Number(amount);
const display = isNaN(amtNum) ? '0.00' : amtNum.toFixed(2);

<Text style={styles.amount}>₹{display}</Text>
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id
    });
    
  }
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={expensePressHandler}>
      <View style={styles.item}>
        <View style={styles.textContainer}>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={[styles.date, styles.textBase]}>
           {getFormattedDate(date)}
          </Text>

        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>₹{display}</Text>
       

        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({

  pressed: {
    opacity: 0.75,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
