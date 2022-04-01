import demo from '../app';

test('Тест функции demo', () => {
  const expected = 'test';
  const result = demo('test');

  expect(result).toBe(expected);
});
