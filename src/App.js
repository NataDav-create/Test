import React, { useState, useEffect } from "react";
import "./App.css";
import { GlobalStyle } from "./components/Style/GlobalStyle";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Board from "./components/Board";
import { Context } from "./components/functions/context";
import { boardData } from "./data";
const url = "./data.js";

function App() {
  const [todoList, setTodoList] = useState([]);

  const getBoards = async () => {
    const response = await fetch(url);
    const todoList = await response.json();
    setTodoList(todoList[0].todos);
  };
  useEffect(() => {
    getBoards();
  }, []);

  const addTodoItem = (todo) => {
    console.log(todo);
    setTodoList((prevTodos) => {
      return [todo, ...prevTodos];
    });
    boardData[0].todos.push(todo);
  };

  return (
    <Context.Provider value={{ todoList }}>
      <GlobalStyle />
      <Navbar />
      <Form addTodoItem={addTodoItem} />
      <Board boardData={boardData} />
    </Context.Provider>
  );
}

export default App;
