import { useState } from 'react'
import './App.css'
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";



const TodoContainer = styled.div`
  max-width:400px;
  margin: 20px auto;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='container' >
      <header >
        <h1 className='header-text text-justify'>TO DO LİST</h1>
      </header>

      <TodoContainer >
        <Form>
          <Form.Group>
            <Form.Label className='goals-form'>Add Your Goals</Form.Label>
            <Form.Control
              type="text"
               placeholder="book, computer, pizza, etc."
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
          </Form.Group>

          <Button className='custom-btn btn' onClick={addTodo}>Add</Button>


        </Form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={() => removeTodo(index)} style={{ cursor: "pointer" }}>
              {todo}
            </li>
          ))}
        </ul>
      </TodoContainer>
    </div>
   
  );
}

export default App;

