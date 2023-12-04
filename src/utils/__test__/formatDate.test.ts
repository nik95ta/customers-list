import formatDate from '../formatDate';

describe('formatDate Function', () => {
  test('formats date string correctly', () => {
    const date = '2021-01-01T12:00:00Z';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('2021-01-01');
  });

  test('returns empty string for empty input', () => {
    const formattedDate = formatDate('');
    expect(formattedDate).toBe('');
  });

  test('returns empty string for invalid date string', () => {
    const formattedDate = formatDate('invalid-date-string');
    expect(formattedDate).toBe('');
  });
});
