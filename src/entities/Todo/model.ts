import { Branded } from '@shared/types/branded';

type TodoId = Branded<string, 'TodoId'>;
type TodoText = Branded<string, 'TodoText'>;

export type Todo = {
  id: TodoId;
  text: TodoText; // 사용자 표시 텍스트 (최대 50자)
  completed: boolean;
  createdAt: string; // ISO 날짜 문자열
};

const MAX_TODO_TEXT_LENGTH = 50;

export function isValidTodoText(text: TodoText): boolean {
  return text.trim().length > 0 && text.trim().length <= MAX_TODO_TEXT_LENGTH;
}
