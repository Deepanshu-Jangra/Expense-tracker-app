import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New expense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "a1",
    date: new Date(2023, 6, 11),
    title: "Library Fee",
    amount: 100,
  },
  {
    id: "a2",
    date: new Date(2022, 5, 8),
    title: "College Fee",
    amount: 400,
  },
  {
    id: "a3",
    date: new Date(2021, 9, 22),
    title: "Food",
    amount: 525,
  },
  {
    id: "a4",
    date: new Date(2021, 10, 30),
    title: "House Rent",
    amount: 750,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
