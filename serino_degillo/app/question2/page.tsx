"use client";

import React, { useState } from "react";

import { useGlobalState } from "@/components/contexts/GlobalStateContext";
import { Todo } from "@/lib/reducers/todos";

export const TodoList = () => {
  const { state, dispatch } = useGlobalState()

  const [newTodo, setNewTodo] = useState('')

  const deleteTodo = (text: string) => {
    dispatch({ type: 'REMOVE_TODO', payload: { text } })
  }

  const addTodo = (text: string) => {
    if (!text) {
      alert('empty todo text')
      return
    }

    dispatch({ type: 'ADD_TODO', payload: { completed: false, text } })
    setNewTodo('')
  }

  const toggleCompleted = (todo: Todo) => {
    dispatch({ type: 'SET_TODO_STATUS', payload: { text: todo.text, completed: !todo.completed } })
  }

  return (
    <div className="w-full mx-auto text-center">
      <ul className="list-none">
        {state?.todos.map((todo) => (
          <li key={todo.text}>
            <p className="inline" onClick={() => toggleCompleted(todo)}>{todo.completed ? '✅' : '⬜'}</p>
            <p className="inline">{todo.text}</p>
            <button className="ml-2" onClick={() => deleteTodo(todo.text)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <input type="text" className="text-black" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button className="ml-2" onClick={() => addTodo(newTodo)}>
          Add todo <p className="inline text-green-shadow">➕</p>
        </button>
      </div>
    </div>
  );
};

export default TodoList
