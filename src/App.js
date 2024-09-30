import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    // props = title, price, date
    {
      id: "cost1",
      title: "자동차보험",
      price: 180000,
      date: new Date(2024, 9, 30),
    },
    { id: "cost2", title: "주유비", price: 30000, date: new Date(2024, 9, 29) },
    { id: "cost3", title: "정비", price: 100000, date: new Date(2024, 9, 28) },
    {
      id: "cost4",
      title: "기타 부품",
      price: 50000,
      date: new Date(2024, 9, 27),
    },
  ];
  return (
    <>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />;
    </>
  );
}

export default App;
