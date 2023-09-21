import { useState } from 'react';
import "./App.css";

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {
  const [todos, setTodos] = useState([

  ]);


  // --> Funcão para pequisar Tarefa
const [search, setSearch] = useState ("");

// --> Funcão para filtrar Tarefa
const [filter, setFilter] = useState ("All");
const [sort, setSort] = useState  ("Asc");




  //--> criaçao de tarefas na lista

  const addTodo = (text, category) => {
    const newTodos = [...todos,
      {
      id:Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

    setTodos(newTodos);
  };

  //--> Remover Todo(tarefas)

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterdTodos = newTodos.filter(todo => todo.id !== id? todo : null);
    setTodos(filterdTodos);
  };

  //--> Tarefa Completada

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
          <div className="app">
            <h1>Lista de Tarefas</h1>
            <Search search={search} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter}/>
            <div className="todo-list">
              {todos
              .filter((todo) => 
              filter === "All" 
              ? true 
              : filter === "Completed" 
              ? todo.isCompleted 
              : !todo.isCompleted)
              .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
              ).map((todo) => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo ={completeTodo}/> 
              ))}
            </div>
            <TodoForm addTodo={addTodo} />
          </div>
  );
}

export default App
