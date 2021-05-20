import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const FormEl = styled.form`
  background: #fff;
  max-width: 450px;
  margin: 0 auto 5rem;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  @media (max-width: 500px) {
    max-width: 350px;
    font-size: 15px;
  }
  @media (max-width: 370px) {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Input = styled.input`
  background: hsl(210, 36%, 96%);
  border-color: transparent;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
`;

const FormWrapper = styled.div`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  @media (max-width: 370px) {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Button = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border-color: transparent;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
  padding: 0.15rem 0.25rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const Form = (props) => {
  const { addTodoItem } = props;
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState(false);

  function getDate() {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    console.log(`${date}.${month}.${year}`);
    return `${date}.${month}.${year}`;
  }

  const colorArr = [
    "rgb(243, 150, 215)",
    "rgb(161, 204, 224)",
    "rgb(211, 161, 224)",
    "rgb(209, 161, 224)",
    "rgb(219, 143, 159)",
    "rgb(248, 241, 177)",
    "rgb(248, 194, 177)",
    "rgb(181, 183, 204)",
    "rgb(248, 250, 139)",
    "rgb(202, 145, 153)",
    "rgb(161, 202, 145)",
    "rgb(72, 228, 255)",
  ];

  function getRandomColor() {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)];
    return color;
  }

  getRandomColor();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem) {
      const newTodo = {
        text: todoItem,
        id: new Date().getTime().toString(),
        date: getDate(),
        bg: getRandomColor(),
      };
      addTodoItem(newTodo);
      setError(false);
    } else {
      console.log("please enter value");
      setError(true);
    }
    setTodoItem("");
  };

  const closeModal = () => {
    setError(false);
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      {error && <Modal closeModal={closeModal} />}
      <FormWrapper>
        <label htmlFor="firstName"> New Task: </label>{" "}
        <Input
          type="text"
          id="todo"
          value={todoItem}
          name="todoItem"
          onChange={(e) => setTodoItem(e.target.value)}
        />{" "}
      </FormWrapper>{" "}
      <Button type="submit"> add todo </Button>
    </FormEl>
  );
};

export default Form;
