import "./Expense.css";

// Component that shows the total income and expense
const Expense = (props) => {
  let expenseAmount = 0;
  let incomeAmount = 0;

  props.items.forEach((item) => {
    if (item.income) {
      incomeAmount += item.amount;
    } else if (item.income === false) {
      expenseAmount += item.amount;
    }
  });

  // RegEx used for thousand separators
  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <>
      <div className="income">
        <h2 className="income-t">INCOME</h2>
        <p className="income-p">{`$${incomeAmount
          .toFixed(2)
          .toString()
          .replace(search_value, ",")}`}</p>
      </div>
      <div className="separator"></div>
      <div className="expense">
        <h2 className="expense-t">EXPENSE</h2>
        <p className="expense-p">{`$${expenseAmount
          .toFixed(2)
          .toString()
          .replace(search_value, ",")}`}</p>
      </div>
    </>
  );
};

export default Expense;
