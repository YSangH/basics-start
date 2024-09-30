import ExpenseDate from "./ExpenseDate";
import "./ExpensiveItem.css";

export default function ExpensiveItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}원</div>
      </div>
    </div>
  );
}
