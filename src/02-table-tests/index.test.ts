import { simpleCalculator, Action } from './index';

describe('simpleCalculator (table-driven tests)', () => {
  const validCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 5, b: 3, action: Action.Subtract, expected: 2 },
    { a: 4, b: 3, action: Action.Multiply, expected: 12 },
    { a: 10, b: 2, action: Action.Divide, expected: 5 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  ];

  test.each(validCases)(
    'returns $expected for $a $action $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    }
  );

  const invalidCases = [
    { a: '2', b: 3, action: Action.Add, expected: null },
    { a: 2, b: '3', action: Action.Add, expected: null },
    { a: '2', b: '3', action: Action.Add, expected: null },
    { a: 2, b: 3, action: '%', expected: null },
    { a: undefined, b: 3, action: Action.Multiply, expected: null },
    { a: 2, b: undefined, action: Action.Divide, expected: null },
    { a: 2, b: 3, action: undefined, expected: null },
  ];

  test.each(invalidCases)(
    'returns null for invalid input ($a, $b, $action)',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    }
  );
});
