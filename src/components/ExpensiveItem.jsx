import "./ExpensiveItem.css";

export default function ExpensiveItem(props) {
  // 다른 값으로 변경하기

  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}원</div>
      </div>
    </div>
  );
}
