import isNumber from "./isNumber";

describe("isNumber", () => {
  test("это число", () => {
    expect(isNumber(10)).toBe(true);
  });
  test("это строка", () => {
    expect(isNumber("saas")).toBe(false);
  });
});
