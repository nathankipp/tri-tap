const keys = [
  0,
  1,
  1.25,
  1.5,
  1.75,
  2,
  2.25,
  2.5,
  2.75,
  3,
  3.25,
  3.5,
  3.75,
  4,
  4.25,
  4.5,
  4.75,
  5,
  5.25,
  5.5,
  5.75,
  6,
  6.25,
  6.5,
  6.75,
  7,
  7.25,
  7.5,
  7.75,
  8,
  8.25,
  8.5,
  8.75,
  9,
  9.25,
  9.5,
  9.75,
  10,
];
const motivated = [
  0,
  2.5,
  3.125,
  3.75,
  4.375,
  5,
  5.625,
  6.25,
  6.875,
  7.5,
  8.125,
  8.75,
  9.375,
  10,
  10.625,
  11.25,
  11.875,
  12.5,
  13.125,
  13.75,
  14.375,
  15,
  15.625,
  16.25,
  16.875,
  17.5,
  18.125,
  18.75,
  19.375,
  20,
  20.625,
  21.25,
  21.875,
  22.5,
  23.125,
  23.75,
  24.375,
  25,
];
const fast = [
  0,
  2.5,
  3.125,
  3.75,
  4.375,
  5,
  5.625,
  6.25,
  6.875,
  7.5,
  8.125,
  8.75,
  9.375,
  10,
  10.625,
  11.25,
  11.875,
  12.5,
  13.125,
  13.75,
  14.375,
  15,
  15.625,
  16.25,
  16.875,
  17.5,
  18.125,
  18.75,
  19.375,
  20,
  20.625,
  21.25,
  21.875,
  22.5,
  23.125,
  23.75,
  24.375,
  25,
];
const sleep = [
  0,
  2.5,
  3.125,
  3.75,
  4.375,
  5,
  5.625,
  6.25,
  6.875,
  7.5,
  8.125,
  8.75,
  9.375,
  10,
  10.625,
  11.25,
  11.875,
  12.5,
  13.125,
  13.75,
  14.375,
  15,
  15.625,
  16.25,
  16.875,
  17.5,
  18.125,
  18.75,
  19.375,
  20,
  20.625,
  21.25,
  21.875,
  22.5,
  23.125,
  23.75,
  24.375,
  25,
];
const sleepHours = [
  0,
  1,
  1.05,
  1.1,
  1.15,
  1.2,
  1.25,
  1.3,
  1.35,
  1.45,
  1.6,
  1.95,
  2.5,
  3.3,
  4.2,
  5.2,
  6.3,
  7.5,
  8.8,
  10.2,
  11.7,
  13.45,
  15.2,
  16.95,
  18.45,
  19.7,
  20.95,
  22.2,
  23.2,
  23.95,
  24.45,
  24.75,
  24.9,
  25,
  25,
  25,
  25,
  25,
];

const build = (type) =>
  type.reduce(
    (acc, cur, idx) => ({
      ...acc,
      [keys[idx]]: cur,
    }),
    {}
  );

export default {
  motivated: build(motivated),
  fast: build(fast),
  sleep: build(sleep),
  sleepHours: build(sleepHours),
};
