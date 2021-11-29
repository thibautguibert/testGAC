import { spaceThousands, dateFormatting } from './formatting';

test('spaceThousands', () => {
  expect(spaceThousands(0)).toBe('0');
  expect(spaceThousands('0')).toBe('0');
  expect(spaceThousands('193')).toBe('193');
  expect(spaceThousands('1000')).toBe('1 000');
  expect(spaceThousands('1000929')).toBe('1 000 929');
});

test('dateFormatting', () => {
  expect(dateFormatting('2018-01-01')).toBe('1er janvier 2018');
  expect(dateFormatting('2021-11-30')).toBe('30 novembre 2021');
  expect(dateFormatting('19 novembre 2020')).toBe('19 novembre 2020');
});
