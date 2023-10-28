import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ExpenseForm = ({ expense_categories, addExpenses }) => {
  // const formDataHandlerRef = useRef();

  const [show, setShow] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  // const [expense_categories, setExpenseCategories] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // SUBMIT STATE
  let [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    // const enteredFormDate = formDataHandlerRef.current.value;
    const regex = /^[A-Za-z ]+$/;
    const number = /^[0-9]*$/;
    let validators = {};

    if (!formData.title.trim()) {
      validators["title"] = "Title field is required";
    } else if (!regex.test(formData.title)) {
      validators["title"] = "Title must characters";
    }

    if (!formData.amount.trim()) {
      validators["amount"] = "Amount field is required";
    } else if (!number.test(formData.amount)) {
      validators["amount"] = "Amount must numbers";
    }

    if (!formData.date) {
      validators["date"] = "Date field is required";
    }

    if (!formData.category) {
      validators["category"] = "Category is required";
    }
    setError(validators);

    if (
      validators.title === undefined ||
      validators.amount === undefined ||
      validators.category === undefined ||
      validators.date === undefined
    ) {
      addExpenses(formData);

      console.log("error", validators);
      // Two way binding to clear the form
      let emptyvals = { title: "", amount: "", date: "", category: "" };
      setFormData(emptyvals);

      setSuccess(true);
      setTimeout(() => {
        setShow(false);
        setSuccess(false);
      }, 1000);
    }
  };

  const style = {
    height: "15rem",
    backgroundColor: "white",
  };

  return (
    <div>
      <div className="col-sm-auto col-md-auto ms-auto">
        <div className="ms-auto my-4">
          <Button variant="outline-success" onClick={handleShow}>
            Add Expense
          </Button>{" "}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add expenses</Modal.Title>
            </Modal.Header>{" "}
            {success && (
              <div class="alert alert-success" role="alert">
                Form submitted successfully
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Enter title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name of your expense"
                    value={formData.title}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        title: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <small>
                  {error && <p className="text-danger "> {error["title"]}</p>}{" "}
                </small>

                <Form.Group className="mb-3" controlId="formBasicAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="&#8358; Amount "
                    value={formData.amount}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        amount: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <small>
                  {error && <p className="text-danger">{error["amount"]}</p>}{" "}
                </small>
                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.date}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        date: e.target.value,
                      });
                    }}
                    placeholder="date "
                  />
                </Form.Group>
                <small>
                  {" "}
                  {error && <p className="text-danger">{error["date"]}</p>}
                </small>
                <Form.Label>Category</Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={formData.category}
                  onInput={(e) => {
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    });
                  }}
                >
                  <option className="fw-bold ">Category:</option>
                  {expense_categories.map((item, index) => {
                    return <option key={index}>{item.name}</option>;
                  })}
                </select>
                <small>
                  {error && <p className="text-danger">{error["category"]}</p>}
                </small>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
