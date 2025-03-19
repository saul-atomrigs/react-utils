import * as React from 'react';

/**
 * originally from: https://github.com/radix-ui/primitives/blob/main/packages/react/context/src/create-context.tsx
 */
export function createContext<ContextValueType extends Record<string, unknown>>(
  rootComponentName: string,
  defaultContext?: ContextValueType
) {
  const Context = React.createContext<ContextValueType | undefined>(
    defaultContext
  );

  type ProviderProps = ContextValueType & { children: React.ReactNode };

  const Provider: React.FC<ProviderProps> = ({ children, ...context }) => {
    const contextValue = context as unknown as ContextValueType;
    const memoizedValue = React.useMemo(
      () => contextValue,
      Object.keys(context).map((key) => context[key])
    );

    return (
      <Context.Provider value={memoizedValue}>{children}</Context.Provider>
    );
  };

  Provider.displayName = `${rootComponentName}Provider`;

  function useContext() {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== undefined) return defaultContext;
    throw new Error(
      `\`${rootComponentName}Context\` must be used within a \`${rootComponentName}Provider\`.`
    );
  }

  return [Provider, useContext] as const;
}
