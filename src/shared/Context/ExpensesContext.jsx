import React, { useState, useContext } from "react";

import { DUMMY_EXPENSES } from "../data/DummyExpenses";

const ExpensesContext = React.createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

export function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const deleteExpense = () => {
    navigation.goBack();
  };
  const addExpense = () => {};
  const updateExpense = () => {};

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContext;
