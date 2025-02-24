import { Todo } from '../types';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '8px',
        margin: '4px 0',
        minWidth: '200px',
        gap: '8px',
      }}
    >
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo)} />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
};
