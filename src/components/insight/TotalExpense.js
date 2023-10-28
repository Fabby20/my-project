import React from "react";

const TotalExpense = (props) => {
  const style = props.data;
  const allTimeExpensetitle = " Total expenses";
  const yearlyExpenseAmount = 35000;
  const monthlyExpenseTitle = "This month";
  const monthlyExpenseAmount = 17800;
  return (
    <div>
      <div
        className="card-body p-2 rounded d-flex align-items-center justify-content-center"
        style={style}
      >
        <div className="d-flex align-items-center gap-4">
          <div className="d-block text-center">
            <p className="mb-0 text-muted">
              <small>{allTimeExpensetitle}</small>
            </p>
            <p className="fw-bold fs-4">
              &#8358; {yearlyExpenseAmount.toFixed(2)}
            </p>
          </div>
          <div className="vr my-2"></div>
          <div className="d-block text-center">
            <p className="mb-0 text-muted">
              <small>{monthlyExpenseTitle}</small>
            </p>
            <p className="fw-bold fs-4">
              &#8358; {monthlyExpenseAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalExpense;
