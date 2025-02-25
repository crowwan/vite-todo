import { Todo } from '../model/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: Todo['id']) => void;
  onRemove: (id: Todo['id']) => void;
}

export const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>X</button>
    </div>
  );
};
