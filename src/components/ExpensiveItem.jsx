import "./ExpensiveItem.css";

export default function ExpensiveItem() {
  // 다른 값으로 변경하기
  const today = new Date();

  const year = today.getFullYear(); // 연도 (예: 2024)
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 1을 더함)
  const day = String(today.getDate()).padStart(2, "0"); // 일

  const expenseDate = `${year}-${month}-${day}`;

  const expenseTitle = "자동차보험";
  const expensePrice = "180000";

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}원</div>
      </div>
    </div>
  );
}
