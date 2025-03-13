import { describe, it, expect } from '@jest/globals';

describe('Basic Math', () => {
  it('should correctly add two numbers', () => {
    // Given
    const a = 1;
    const b = 1;

    // When
    const result = a + b;

    // Then
    expect(result).toBe(2);
  });
});
