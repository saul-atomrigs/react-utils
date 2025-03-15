# react-utils

리액트 유틸 함수 모음 라이브러리

### `createContext`

인터페이스

```ts
// index.d.ts
export function createContext<ContextValueType extends object | null>(
  rootComponentName: string,
  defaultContext?: ContextValueType
): readonly [
  Provider: React.FC<ContextValueType & { children: React.ReactNode }>,
  useContext: () => ContextValueType
];
```

### `QueryAsyncBoundary`

인터페이스

```ts
// index.d.ts
export function QueryAsyncBoundary(props: {
  pendingFallback: React.ReactNode;
  rejecterFallback?: React.ReactNode;
  children: React.ReactNode;
}): JSX.Element;
```
