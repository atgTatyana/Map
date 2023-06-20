import ErrorRepository from '../ErrorRepository';

const errors = new ErrorRepository();

test.each([
  [4, 'Remote Alarm Indication'],
  [5, 'Unknown error'],
])('testing translate function with error = %i', (error, expected) => {
  const result = errors.translate(error);
  expect(result).toBe(expected);
});
