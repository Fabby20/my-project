import React from "react";

const ExpensesCategory = (props) => {
  const { expense_categories, data } = props; // Assuming 'categories' is passed as a prop
  return (
    <div>
      <div className="card-body mt-3 p-2 rounded" style={data}>
        <p className="text-danger fw-bold">Expense categories</p>

        <div className="container">
          <div className="row ">
            {expense_categories.map((item, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center border rounded cursor-pointer"
                    style={{
                      height: "60px",
                      width: "100px",
                    }}
                  >
                    <p className="mb-0">{item.name}</p>
                    <p className="my-0 fw-bold">(5)</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesCategory;
