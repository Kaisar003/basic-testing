// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by comparison with snapshot
  test('should generate linked list from values 1', () => {
    const elements = [1, 2, 3];
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    };
    expect(generateLinkedList(elements)).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const elements = [4, 5, 6];
    const linkedList = generateLinkedList(elements);
    expect(linkedList).toMatchSnapshot();
  });
});