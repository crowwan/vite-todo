import './App.css';
import { TodoItem } from './components';
import { TodoData } from './constants';
import { useTodo } from './hooks';

function App() {
  const { todos, toggleTodo, deleteTodo } = useTodo(TodoData);

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default App;
