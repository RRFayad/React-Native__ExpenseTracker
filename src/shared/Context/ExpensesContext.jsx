import React, { useState, useContext, useReducer } from "react";

import { DUMMY_EXPENSES } from "../data/DummyExpenses";

const ExpensesContext = React.createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = Date.now().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const toBeUpdatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      const toBeUpdatedExpense = state[toBeUpdatedExpenseIndex];
      const updatedExpense = {
        ...toBeUpdatedExpense,
        ...action.payload.expenseData,
      };
      const newStateArr = [...state];
      newStateArr[toBeUpdatedExpenseIndex] = updatedExpense;
      return newStateArr;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

export function ExpensesContextProvider({ children }) {
  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
    navigation.goBack();
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContext;
