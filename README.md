# @saul-atomrigs/react

A collection of abstracted utilities for react applications

## Usage

### `createContext`

```tsx
import { createContext } from '@saul-atomrigs/react';

const [ThemeProvider, useTheme] = createContext<{ mode: 'light' | 'dark' }>(
  'Theme'
);

function ChildComponent() {
  const theme = useTheme();
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
