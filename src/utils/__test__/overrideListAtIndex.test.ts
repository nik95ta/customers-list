import overrideListAtIndex from '../overrideListAtIndex';

describe('overrideListAtIndex', () => {
  test('should override the item at the target index in the array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const newItem = 'x';
    const targetIndex = 2;
    const expectedArray = ['a', 'b', 'x', 'd'];
    const result = overrideListAtIndex(array, newItem, targetIndex);
    expect(result).toEqual(expectedArray);
  });

  test('should not modify the original array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const newItem = 'x';
    const targetIndex = 2;
    overrideListAtIndex(array, newItem, targetIndex);
    expect(array).toEqual(['a', 'b', 'c', 'd']);
  });
});
