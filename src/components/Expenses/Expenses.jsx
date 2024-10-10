import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

export default function items(props) {
  const [filterYear, setFilterYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}
