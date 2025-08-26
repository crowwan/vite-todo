# Todo App 개발 진행상황

## 프로젝트 개요
- **프레임워크**: Vite + React + TypeScript
- **아키텍처**: FSD (Feature-Sliced Design)
- **목표**: 하루 단위로 초기화되는 Todo 앱

## 완료된 작업

### ✅ 1. Todo 엔티티 설계 및 구현 (2025-08-26)
**파일**: `src/entities/Todo/model.ts`

#### 구현된 기능
- **타입 정의**
  - `TodoId`: Branded 타입 (string 기반)
  - `TodoText`: Branded 타입 (string 기반, 최대 50자)
  - `Todo`: 핵심 도메인 객체 (id, text, completed, createdAt)

- **유틸리티 함수**
  - `isValidTodoText(text: string): text is TodoText` - 텍스트 유효성 검증 (타입 가드)
  - `makeTodoText(text: string): TodoText` - 텍스트 정규화 및 브랜딩
  - `createTodo(text: string): Todo` - Todo 객체 생성
  - `generateId()` - 타임스탬프 + 랜덤값 기반 고유 ID 생성

- **상수**
  - `MAX_TODO_TEXT_LENGTH = 50` - 최대 텍스트 길이

#### 설계 특징
- Branded 타입으로 타입 안전성 확보
- 사용자 입력(string)을 받아 내부에서 검증/정규화 후 브랜딩
- 라이브러리 의존성 없는 ID 생성 (crypto.randomUUID 대신 Date.now() + Math.random() 조합)

### ✅ 2. 테스트 코드 작성 (2025-08-26)
**파일**: `src/entities/Todo/model.test.ts`

#### 테스트 커버리지
- `createTodo` 생성 결과 검증 (ID 형식, 텍스트 정규화, 기본값)
- 길이 제한 적용 확인
- `makeTodoText` 빈 문자열 예외 처리
- `isValidTodoText` 다양한 케이스 검증

**테스트 실행 결과**: 4개 테스트 모두 통과 ✅

## 다음 작업 계획

### 🔄 2. 로컬 스토리지 래퍼 구현
**예상 파일**: `src/shared/storage/localStorage.ts`

#### 구현 예정 기능
- 날짜 키 기반 데이터 관리 (`todos:YYYY-MM-DD`)
- get/set/clear API
- 날짜 변경 감지 및 자동 초기화
- (선택) 멀티탭 동기화 (BroadcastChannel 또는 storage 이벤트)

### 🔄 3. useTodos 훅 구현
**예상 파일**: `src/shared/hooks/useTodos.ts`

#### 구현 예정 기능
- CRUD 작업 (add, toggle, remove, clear)
- 로컬 스토리지 연동
- 자정 초기화 스케줄링
- visibility/focus 이벤트 기반 날짜 재검사

### 🔄 4. UI 컴포넌트 구현
#### 우선순위 순서
1. `src/widgets/AddTodo/` - 입력창 + 검증 + Enter 처리
2. `src/widgets/Header/` - 오늘 날짜 표시
3. `src/widgets/ProgressBar/` - 완료 비율 시각화
4. `src/widgets/TodoList/` + `src/widgets/TodoItem/` - 리스트 렌더링 + 개별 아이템

## 주요 설계 결정사항

### 1. 시간 기반 초기화 전략
- **기본**: 앱 시작 시 날짜 키 비교로 필터링
- **보완**: visibility/focus 이벤트에서 재검사
- **선택**: setTimeout + 폴백 타이머 (필요시)

### 2. 타입 안전성
- Branded 타입으로 도메인 객체 보호
- 사용자 입력은 string으로 받아 내부에서 검증/변환
- 타입 가드 활용으로 런타임 안전성 확보

### 3. 의존성 최소화
- 외부 라이브러리 없는 ID 생성
- 브라우저 네이티브 API 활용 (localStorage, Date, etc.)

## 요구사항 대응 상황

### 기능 요구사항
- ✅ F-8: 입력 길이 최대 50자 (MAX_TODO_TEXT_LENGTH)
- ✅ F-16: 빈 입력/공백 비허용 (makeTodoText 예외 처리)
- 🔄 F-1: 입력창 + 추가 버튼
- 🔄 F-2: 오늘 날짜 표시
- 🔄 F-3: 체크박스 완료 처리
- 🔄 F-6: 하루 지나면 자동 삭제

### 비기능 요구사항
- 🔄 NF-9: 새로고침 시 데이터 유지
- 🔄 NF-10: 자정 기준 자동 초기화
- ✅ P-2: XSS 방지 (텍스트 정규화로 기본 대응)

## 커밋 히스토리
- `659f878`: feat(todo): add Todo entity utilities and tests

---
*마지막 업데이트: 2025-08-26*
