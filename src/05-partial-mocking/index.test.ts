import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule = jest.requireActual<typeof import('./index')>('./index');
  return {
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne();
    mockTwo();
    mockThree();

    expect(console.log).not.toHaveBeenCalledWith('foo');
    expect(console.log).not.toHaveBeenCalledWith('bar');
    expect(console.log).not.toHaveBeenCalledWith('baz');
  });

  test('unmockedFunction should log into console', () => {
    console.log = jest.fn(); // Mock console.log to track calls
    unmockedFunction();

    expect(console.log).toHaveBeenCalledWith('I am not mocked');
  });
});