const sum = require("./index");

describe("Test Sum Args", () => {
  test("Sum of 2 Positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Sum of 2 Negative number", () => {
    expect(sum(-1, -4)).toBe(-5);
  });

  test("Sum of 2 float integer", () => {
    expect(sum(1.5, 3.5)).toBe(5);
  });

  test("Sum of 2 String number", () => {
    expect(sum("3", "2")).toBe(5);
  });
});