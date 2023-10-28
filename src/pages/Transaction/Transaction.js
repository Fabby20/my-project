import React, { useState } from "react";
import moment from "moment";
import Dropdown from "react-bootstrap/Dropdown";
import ExpenseItem from "../../components/Expense/ExpenseItem.js/ExpenseItem";

const Transaction = () => {
  console.log(moment().format("DD/MM/YYYY"));
  const [showEl, setShowEl] = useState(false);
  const EXPENSE_CATEGORY = [
    {
      id: 1,
      name: "Transport",
      description: "",
      icon: "",
    },
    {
      id: 2,
      name: "Food",
      description: "",
      icon: "",
    },
    {
      id: 3,
      name: "Internet",
      description: "",
      icon: "",
    },
    {
      id: 4,
      name: "Service",
      description: "",
      icon: "",
    },
  ];

  const [DUMMY_EXPENSE, setDUMMYEXPENSE] = useState([
    {
      id: "e1",
      title: "visiting a friend",
      amount: 94.12,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Transport",
    },
    {
      id: "e2",
      title: "went on a  dinner with lewis",
      amount: 799.49,
      date_created: moment().format("MMMM Do YYYY"),
      category: "internet",
    },
    {
      id: "e3",
      title: "Rice purchase",
      amount: 294.67,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Grocercies",
    },
    {
      id: "e4",
      title: "New pot",
      amount: 10000,
      date_created: moment(date).format("MMMM Do YYYY"),
      category: "Groceries",
    },
    {
      id: "e5",
      title: "Undies laundry",
      amount: 450,
      date_created: moment(date).format("MMMM Do YYYY"),
      category: "Laundry",
    },

    {
      id: "e6",
      title: "Airtime",
      amount: 2000,
      date_created: moment(date).format("MMMM Do YYYY"),
      category: "internet",
    },
    {
      id: "e7",
      title: "bed sheet",
      amount: 50,
      date_created: moment(date).format("MMMM Do YYYY"),
      category: "Laundry",
    },
    {
      id: "e8",
      title: "beverages",
      amount: 3000,
      date_created: moment(date).format("MMMM Do YYYY"),
      category: "Gorceries",
    },
    {
      id: "e9",
      title: "visiting a friend",
      amount: 800,
      date_created: moment(date).format("MMMM Do YYYY"),
      category: "Transport",
    },
    {
      id: "e10",
      title: "door repair",
      amount: 300,
      date_created: moment(date).format("MMMM Do YYYY"),

      category: "Services",
    },
  ]);

  // const setfilter = (data) => {
  //   const newList = ondelete.filter((item) => item !== deletingItem);
  //   setOnDelete(newList);
  //   console.log(newList);
  // };

  // const addExpensesHandler = (ev) => {
  //   setDUMMYEXPENSE((DUMMY_EXPENSE) => {
  //     const data = [...DUMMY_EXPENSE, ev];
  //     return data;
  //   });
  // };
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-10 col-lg-8">
        <div className="row">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 mt-5 mb-0">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onInput={(e) => {
                  setfilter({
                    data: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 mt-5 mb-0 text-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-funnel-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {EXPENSE_CATEGORY.map((item, index) => {
                  return (
                    <Dropdown.Item href="#/action-1" key={index}>
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-10 col-lg-8">
        <ExpenseItem expenses={DUMMY_EXPENSE} showEl={showEl} />
      </div>
    </div>
  );
};

export default Transaction;
