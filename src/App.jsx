import { useState } from 'react';
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([

    {
      id: 1,
      text: "Criar funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: "false",
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: "false",
    },
    {
      id: 3,
      text: "Estudar Programação",
      category: "Estudos",
      isCompleted: "false",
    }



  ]);

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
            <div className="todo-list">
              {todos.map((todo) =>(
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo ={completeTodo}/> 
              ))}
            </div>
            <TodoForm addTodo={addTodo} />
          </div>
  );
}

export default App
