import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 여러개의 상태 관리 방법
  // 1. 1개의 핸들러마다 1개의 state 생성 (권장)
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // 2. 새로운 useState안에 해당 객체 담기
  // const [userInput, setUserInput] = useState({
  //   enterTitle: "", // "" => 초기값
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const titleChangeHandler = (event) => {
    // 1.
    setEnterTitle(event.target.value);
    // 2.
    // setUserInput({
    //   ...userInput, // userInput 안에 있는 객체 결과복사
    //   enterTitle: event.target.value, // 해당 부분만 입력한 값에 적용
    // });
    // 이전 상태에 의존해 상태를 업데이트 할 경우 사용하는 문법
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnterTitle(value);
    } else if (identifier === "date") {
      setEnterDate(value);
    } else {
      setEnterAmount(value);
    }
  };

  //   양식(Form) 제출 처리
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onExpense();
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* 해당 구간까지 양식 제출 처리 */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler}
            // onChange={(event) =>
            //   inputChangeHandler("title", event.target.value)
            // }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            // onChange={(event) =>
            //   inputChangeHandler("amount", event.target.value)
            // }
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            // onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
