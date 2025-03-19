# @saul-atomrigs/react

A collection of abstracted utilities for react applications

## Usage

### `createContext`

```tsx
import { createContext } from '@saul-atomrigs/react';

const [ThemeProvider, useThemeContext] = createContext<{ mode: 'light' | 'dark' }>(
  'Theme'
);

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
