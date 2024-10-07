import ExpensiveItem from "./ExpensiveItem";
import Card from "../components/UI/Card";
import "./Expenses.css";

export default function items(props) {
  return (
    <Card className="expenses">
      <ExpensiveItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      />
      <ExpensiveItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <ExpensiveItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      />
      <ExpensiveItem
        title={props.items[3].title}
        price={props.items[3].price}
        date={props.items[3].date}
      />
    </Card>
  );
}
