import './App.css';
import { Toast, TodoItem } from './components';
import { TodoData } from './constants';
import { useTodo, useToast } from './hooks';

function App() {
  const { message, showToast, hideToast } = useToast();
  const { todos, toggleTodo, deleteTodo } = useTodo(TodoData);

  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => {
              deleteTodo(todo.id);
              showToast(`Todo ${todo.text} is deleted`);
            }}
            onToggle={() => {
              toggleTodo(todo.id);
              showToast(`Todo ${todo.text} is ${todo.done ? 'completed' : 'not completed'}`);
            }}
          />
        ))}
      </div>
      <Toast message={message ?? ''} isOpen={!!message} close={hideToast} />
    </div>
  );
}

export default App;
