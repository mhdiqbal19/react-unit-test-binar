const multiple = (a, b) => {
  return a * b;
}

test("result test function perkalian", () => {
  const perkalian = multiple(3, 2);
  expect(perkalian).toBe(6);
});

