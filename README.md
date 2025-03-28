# @saul-atomrigs/react

A collection of abstracted utilities for react applications

```
npm i @saul-atomrigs/react
```

## Usage

### `createContext`

Abstracted boilerplate code for context API.

```tsx
import { createContext } from '@saul-atomrigs/react';

const [ThemeProvider, useThemeContext] = createContext<{
  mode: 'light' | 'dark';
}>('Theme');

function ChildComponent() {
  const theme = useThemeContext();
  console.log('🚀 ~ ChildComponent ~ theme:', theme);
  return <p>current theme: {theme.mode}</p>;
}

function App() {
  return (
    <ThemeProvider mode='light'>
      <ChildComponent />
    </ThemeProvider>
  );
}
```

### `QueryAsyncBoundary`

Suspense + ErrorBoundary + useQueryErrorResetBoundary (react-query).
If no rejectedFallback is provided as props, it will render the reset (Try again) button.

```tsx
import { QueryAsyncBoundary } from '@saul-atomrigs/react';

function App() {
  return (
    <QueryAsyncBoundary rejectedFallback={} pendingFallback={}>
      <DataComponent />
    </QueryAsyncBoundary>
  );
}
```

### `tryCatch`

A utility function that wraps asynchronous operations and returns a standardized result object.
This helps to handle promise-based operations in a consistent way, without try-catch blocks everywhere.

```tsx
import { tryCatch } from '@saul-atomrigs/react';

const { data: user, error } = await tryCatch(fetchUser);
```
