import * as React from 'react';

/**
 * originally from: https://github.com/radix-ui/primitives/blob/6e75e117977c9e6ffa939e6951a707f16ba0f95e/packages/react/context/src/create-context.tsx
 */
export function createContext<ContextValueType extends object | null>(
  rootComponentName: string,
  defaultContext?: ContextValueType
) {
  const Context = React.createContext<ContextValueType | undefined>(
    defaultContext
  );

  const Provider: React.FC<ContextValueType & { children: React.ReactNode }> = (
    props
  ): JSX.Element => {
    const { children, ...context } = props;
    // Only re-memoize when prop values change
    const value = React.useMemo(
      () => context,
      Object.values(context)
    ) as ContextValueType;
    return React.createElement(Context.Provider, { value }, children);
  };

  Provider.displayName = rootComponentName + 'Provider';

  function useContext() {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== undefined) return defaultContext;
    // if a defaultContext wasn't specified, it's a required context.
    throw new Error(`must be used within \`${rootComponentName}\``);
  }

  return [Provider, useContext] as const;
}
