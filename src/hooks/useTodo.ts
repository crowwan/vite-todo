import { useState } from 'react';
import { Todo } from '../types';

export const useTodo = (defaultValue: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(defaultValue);

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    toggleTodo,
    deleteTodo,
  };
};
