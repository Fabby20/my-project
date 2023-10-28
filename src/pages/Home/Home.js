import React, { useState } from "react";
import moment from "moment";
import ExpensesCategory from "../../components/Expense/ExpenseCategory/ExpensesCategory";
import ExpenseItem from "../../components/Expense/ExpenseItem.js/ExpenseItem";
import TotalExpense from "../../components/insight/TotalExpense";
import ExpenseForm from "../../components/forms/ExpenseForm/ExpenseForm";

const Home = () => {
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
      title: "went to dinner with lewis",
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
      date_created: moment().format("MMMM Do YYYY"),
      category: "Groceries",
    },
    {
      id: "e5",
      title: "Undies laundry",
      amount: 450,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Laundry",
    },

    {
      id: "e6",
      title: "Airtime",
      amount: 2000,
      date_created: moment().format("MMMM Do YYYY"),
      category: "internet",
    },
    {
      id: "e7",
      title: "bed sheet",
      amount: 50,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Laundry",
    },
    {
      id: "e8",
      title: "beverages",
      amount: 3000,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Gorceries",
    },
    {
      id: "e9",
      title: "visiting a friend",
      amount: 800,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Transport",
    },
    {
      id: "e10",
      title: "door repair",
      amount: 300,
      date_created: moment().format("MMMM Do YYYY"),
      category: "Services",
    },
  ]);
  const checkTime = () => {
    // Javascript code for writing the auto greeting
    var hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Good Afternoon";
    } else if (hour >= 17 && hour <= 24) {
      return "Good Evening";
    }
    return true;
  };

  const style = {
    height: "15rem",
    backgroundColor: "white",
  };

  const [showEl, setShowEl] = useState(true);
  // asychronous state function used to in rendering the state so it can update in the Expenses
  const addExpensesHandler = (ev) => {
    setDUMMYEXPENSE((DUMMY_EXPENSE) => {
      const data = [...DUMMY_EXPENSE, ev];
      return data;
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <p className="fs-6 fw-bold my-4">Welcome Lewis, {checkTime()}</p>
        </div>
        <div className="col-sm-auto col-md-auto ms-auto">
          {/* lifting up state */}
          <ExpenseForm
            expense_categories={EXPENSE_CATEGORY}
            addExpenses={addExpensesHandler}
          />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6">
          <TotalExpense data={style} />
        </div>
        <div className="col-md-6">
          <div className="card-body p-2 rounded" style={style}>
            <h5>Chart</h5>
          </div>
        </div>
        <div className="col-md-6 pb-2">
          <ExpenseItem expenses={DUMMY_EXPENSE} data={style} showEl={showEl} />
        </div>
        <div className="col-md-6">
          <ExpensesCategory
            expense_categories={EXPENSE_CATEGORY}
            data={style}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
