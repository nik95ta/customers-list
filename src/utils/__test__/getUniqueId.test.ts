import getUniqueId from '../getUniqueId';

describe('getUniqueId', () => {
  test('should generate unique ids in two calls', () => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();

    expect(id1).not.toBe(id2);
  });
});
