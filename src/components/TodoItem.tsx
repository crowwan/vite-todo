import { Todo } from '../types';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo)} />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
};
