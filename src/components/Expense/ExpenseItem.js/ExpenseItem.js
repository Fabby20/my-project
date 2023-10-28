import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const data = props.data;
  const showEl = props?.showEl;

  // To delete item from expenseitem
  const [ondelete, setOnDelete] = useState(props.expenses);
  //  useEffect is used to watch changes
  useEffect(() => {
    // Update ondelete when props.expenses changes
    setOnDelete(props.expenses);
  }, [props.expenses]);

  console.log(props.expenses);
  console.log(ondelete);
  // creating the ondelete button handler function
  const handleRemove = (deletingItem) => {
    const newList = ondelete.filter((item) => item !== deletingItem);
    setOnDelete(newList);
    console.log(newList);
  };

  // GIVING COLOR TO THE FIRST CHARACTER
  const getRandomColor = (name) => {
    const firstAlphabet = name.charAt(0).toLowerCase();
    const asciiCode = firstAlphabet.charCodeAt(0);

    const colorNum =
      asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

    var num = Math.round(0xffffff * parseInt(colorNum));
    var r = (num >> 16) & 255;
    var g = (num >> 8) & 255;
    var b = num & 255;

    return {
      color: "rgb(" + r + ", " + g + ", " + b + ", 0.3)",
      character: firstAlphabet.toUpperCase(),
    };
  };

  return (
    <div>
      <div className="card-body mt-1 rounded p-2 " style={data}>
        <div className="d-flex justify-content-between">
          <p className="text-danger fw-bold">Expenses</p>
          {/*  */}

          <Link
            to={`/transaction`}
            className="me-1 cursor-pointer text-danger text-decoration-none "
          >
            <small>View All</small>
          </Link>
        </div>

        <div className="overflow-hidden expense-card" style={{ height: "80%" }}>
          <ul className="list-group">
            {ondelete.map((item, index) => {
              return (
                <li
                  className="list-group-item border-0 border-bottom"
                  key={index}
                >
                  <div className="row align-items-center">
                    <div className="col-2">
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "100%",
                          background: getRandomColor(item.category.split("")[0])
                            .color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.category.split("")[0].toUpperCase()}
                      </div>
                    </div>
                    <div className="col-5 ms-0">
                      <div className="d-block mb-0">
                        <h6 className="mb-0 fw-light text-capitalize ">
                          {item.title}
                        </h6>
                        <p className="mb-0">
                          <small className="fw-bold">
                            {/* Using parseint to change the amount string to interger */}
                            &#8358; {parseInt(item.amount).toFixed(2)}
                          </small>
                        </p>
                      </div>
                    </div>

                    <div className="col-auto ms-auto">
                      <div
                        className="d-block ms-auto text-end"
                        onClick={() => handleRemove(item)}
                      >
                        <i
                          className="fa fa-trash-o text-danger"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <span style={{ fontSize: " 0.7rem" }}>
                        {item?.date_created}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
