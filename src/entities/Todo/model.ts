import { Branded } from '@shared/types/branded';

export type TodoId = Branded<string, 'TodoId'>;
export type TodoText = Branded<string, 'TodoText'>;

export type Todo = {
  id: TodoId;
  text: TodoText; // 사용자 표시 텍스트 (최대 50자)
  completed: boolean;
  createdAt: string; // ISO 날짜 문자열
};

export const MAX_TODO_TEXT_LENGTH = 50;

export function isValidTodoText(text: string): text is TodoText {
  const trimmed = text.trim();
  return trimmed.length > 0 && trimmed.length <= MAX_TODO_TEXT_LENGTH;
}

export function makeTodoText(text: string): TodoText {
  const normalized = text.trim().slice(0, MAX_TODO_TEXT_LENGTH);
  if (normalized.length === 0) {
    throw new Error('Todo text must not be empty');
  }
  return normalized as TodoText;
}

function generateId(): string {
  // 간단하면서도 충분히 고유한 ID 생성 (라이브러리 의존성 없음)
  // 타임스탬프와 랜덤 값을 결합하여 충돌 가능성을 낮춤
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 9);
  return `${ts}-${rand}`;
}

export function createTodo(text: string): Todo {
  const todoText = makeTodoText(text);
  return {
    id: generateId() as TodoId,
    text: todoText,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}
