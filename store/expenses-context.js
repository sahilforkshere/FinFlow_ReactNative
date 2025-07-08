import { Children, createContext, useReducer } from "react";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 2100,
        date: new Date('2025-07-06'),
    },
    {
        id: 'e2',
        description: 'Groceries at Walmart',
        amount: 5400,
        date: new Date('2025-06-28'),
    },
    {
        id: 'e3',
        description: 'Monthly gym membership',
        amount: 1500,
        date: new Date('2025-07-01'),
    },
    {
        id: 'e4',
        description: 'Spotify subscription',
        amount: 999,
        date: new Date('2025-07-05'),
    },
    {
        id: 'e5',
        description: 'Dinner out',
        amount: 3200,
        date: new Date('2025-06-29'),
    },
    {
        id: 'e6',
        description: 'New headphones',
        amount: 12500,
        date: new Date('2025-05-15'),
    },
    {
        id: 'e7',
        description: 'Cinema tickets',
        amount: 900,
        date: new Date('2025-07-07'),
    },
    {
        id: 'e8',
        description: 'Books from Amazon',
        amount: 2300,
        date: new Date('2025-04-12'),
    },
    {
        id: 'e9',
        description: 'Coffee shop',
        amount: 450,
        date: new Date('2025-07-03'),
    },
    {
        id: 'e10',
        description: 'Electricity bill',
        amount: 6700,
        date: new Date('2025-06-30'),
    },

    // +5 new entries:
    {
        id: 'e11',
        description: 'Uber ride',
        amount: 1200,
        date: new Date('2025-07-04'),
    },
    {
        id: 'e12',
        description: 'Birthday gift',
        amount: 3500,
        date: new Date('2025-06-25'),
    },
    {
        id: 'e13',
        description: 'Online course fee',
        amount: 7500,
        date: new Date('2025-03-20'),
    },
    {
        id: 'e14',
        description: 'Restaurant brunch',
        amount: 2800,
        date: new Date('2025-07-02'),
    },
    {
        id: 'e15',
        description: 'Car service',
        amount: 9800,
        date: new Date('2025-05-30'),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: (expenses) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});


function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
           
            return [{ ...action.payload, id: id }, ...state]
            console.log('Adding:', action.payload);

        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data }
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)

        case 'SET':
            const inverted=action.payload.reverse();
            return action.payload
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);


    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }
    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses })
    }

    const value = {
        expenses: expensesState,
        setExpenses:setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider