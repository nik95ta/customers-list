import removeItemAtIndex from '../removeItemAtIndex';

describe('removeItemAtIndex', () => {
  test('should remove the item at the specified index from the array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const index = 2;
    const expectedArray = ['a', 'b', 'd'];
    const result = removeItemAtIndex(array, index);
    expect(result).toEqual(expectedArray);
  });

  test('should not modify the original array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const index = 2;
    removeItemAtIndex(array, index);
    expect(array).toEqual(['a', 'b', 'c', 'd']);
  });
});
