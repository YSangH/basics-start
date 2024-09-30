import ExpensiveItem from "./components/ExpensiveItem";

function App() {
  const expenses = [
    // props = title, price, date
    { id: "cost1", title: "자동차보험", price: "180000", date: "2024.9.30" },
    { id: "cost2", title: "주유비", price: "30000", date: "2024.9.29" },
    { id: "cost3", title: "정비", price: "100000", date: "2024.9.28" },
    { id: "cost4", title: "기타 부품", price: "50000", date: "2024.9.27" },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensiveItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpensiveItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpensiveItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpensiveItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
