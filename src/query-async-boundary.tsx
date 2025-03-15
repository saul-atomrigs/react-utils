import React, { Suspense, type PropsWithChildren } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

type QueryAsyncBoundaryProps = {
  pendingFallback: React.ReactNode;
  rejecterFallback?: React.ReactNode;
} & PropsWithChildren;

/**
 * reference: https://github.com/ssi02014/react-query-tutorial?tab=readme-ov-file#usequeryerrorresetboundary
 * PLEASE use throwOnError: true in the query options to make sure the error is thrown and caught by the error boundary.
 */
export const QueryAsyncBoundary = ({
  pendingFallback,
  rejecterFallback,
  children,
}: QueryAsyncBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) =>
        rejecterFallback || (
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        )
      }
    >
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
