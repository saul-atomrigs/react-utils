import { describe, it, expect, vi } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { createContext } from './create-context';

describe('createContext', () => {
  it('should create a context provider and consumer hook', () => {
    // Given
    interface TestContextType {
      value: string;
      count: number;
    }

    const [TestProvider, useTestContext] =
      createContext<TestContextType>('Test');

    // When
    const TestConsumer = () => {
      const context = useTestContext();
      return (
        <div data-testid='test-value'>
          {context.value}-{context.count}
        </div>
      );
    };

    const wrapper = render(
      <TestProvider value='hello' count={42}>
        <TestConsumer />
      </TestProvider>
    );

    // Then
    expect(screen.getByTestId('test-value').textContent).toBe('hello-42');
  });

  it('should use default context when provided', () => {
    // Given
    interface TestContextType {
      value: string;
    }

    const defaultContext = { value: 'default' };
    const [TestProvider, useTestContext] = createContext<TestContextType>(
      'Test',
      defaultContext
    );

    // When
    const TestConsumer = () => {
      const context = useTestContext();
      return <div data-testid='test-value'>{context.value}</div>;
    };

    // Can be used without Provider when default context is provided
    render(<TestConsumer />);

    // Then
    expect(screen.getByTestId('test-value').textContent).toBe('default');
  });

  it('should throw error when used outside provider with no default', () => {
    // Given
    interface TestContextType {
      value: string;
    }

    const [, useTestContext] = createContext<TestContextType>('Test');

    // When
    const TestConsumer = () => {
      const context = useTestContext();
      return <div>{context.value}</div>;
    };

    // Then
    const consoleError = vi.spyOn(console, 'error');
    consoleError.mockImplementation(() => {});

    expect(() => {
      render(<TestConsumer />);
    }).toThrow('must be used within `Test`');

    consoleError.mockRestore();
  });

  it('should update context values when props change', () => {
    // Given
    interface TestContextType {
      value: string;
    }

    const [TestProvider, useTestContext] =
      createContext<TestContextType>('Test');

    // When
    const TestConsumer = () => {
      const context = useTestContext();
      return <div data-testid='test-value'>{context.value}</div>;
    };

    const { rerender } = render(
      <TestProvider value='initial'>
        <TestConsumer />
      </TestProvider>
    );

    // Then
    expect(screen.getByTestId('test-value').textContent).toBe('initial');

    // When context prop changes
    rerender(
      <TestProvider value='updated'>
        <TestConsumer />
      </TestProvider>
    );

    // Then the consumer should render the new value
    expect(screen.getByTestId('test-value').textContent).toBe('updated');
  });
});
