import { Branded } from '@shared/types/branded';

type TodoId = Branded<string, 'TodoId'>;
type TodoText = Branded<string, 'TodoText'>;

export type Todo = {
  id: TodoId;
  text: TodoText; // 사용자 표시 텍스트 (최대 50자)
  completed: boolean;
  createdAt: string; // ISO 날짜 문자열
};

type IsValidTodoText = (text: TodoText) => boolean;

export const isValidTodoText: IsValidTodoText = (text) => {
  const MAX_TODO_TEXT_LENGTH = 50;
  return text.length > 0 && text.length <= MAX_TODO_TEXT_LENGTH;
};
