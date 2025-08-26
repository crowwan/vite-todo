import { describe, it, expect } from 'vitest';

import { createTodo, makeTodoText, isValidTodoText, MAX_TODO_TEXT_LENGTH } from './model';

describe('Todo entity utilities', () => {
  it('createTodo 생성 결과가 올바르다', () => {
    const t = createTodo('  hello world  ');
    expect(typeof t.id).toBe('string');
    expect(t.id.length).toBeGreaterThan(0);
    expect(t.id.includes('-')).toBe(true); // ts-rand 조합으로 생성되는 형식

    expect(t.text).toBe('hello world');
    expect(t.completed).toBe(false);
    expect(typeof t.createdAt).toBe('string');
    expect(isNaN(Date.parse(t.createdAt))).toBe(false);
  });

  it('길이 제한이 적용된다', () => {
    const long = 'x'.repeat(MAX_TODO_TEXT_LENGTH + 20);
    const t = createTodo(long);
    expect((t.text as string).length).toBeLessThanOrEqual(MAX_TODO_TEXT_LENGTH);
  });

  it('makeTodoText는 빈 문자열을 허용하지 않는다', () => {
    expect(() => makeTodoText('   ')).toThrow();
  });

  it('isValidTodoText 동작 확인', () => {
    expect(isValidTodoText('ok')).toBe(true);
    expect(isValidTodoText('')).toBe(false);
    expect(isValidTodoText(' '.repeat(5))).toBe(false);
    expect(isValidTodoText('a'.repeat(MAX_TODO_TEXT_LENGTH))).toBe(true);
    expect(isValidTodoText('a'.repeat(MAX_TODO_TEXT_LENGTH + 1))).toBe(false);
  });
});
