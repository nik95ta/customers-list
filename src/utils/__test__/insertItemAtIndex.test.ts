import insertItemAtIndex from '../insertItemAtIndex';

describe('insertItemAtIndex', () => {
  test('should insert an item at the specified index in the array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const item = 'x';
    const index = 2;
    const expectedArray = ['a', 'b', 'x', 'c', 'd'];
    const result = insertItemAtIndex(array, item, index);
    expect(result).toEqual(expectedArray);
  });

  test('should not modify the original array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const item = 'x';
    const index = 2;
    insertItemAtIndex(array, item, index);
    expect(array).toEqual(['a', 'b', 'c', 'd']);
  });
});
