const sum = require("./sum_arguments.js");

describe("Test All testCases", () => {
  test("Add 2 Positive Numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Add 2 Negative Numbers", () => {
    expect(sum(-1, -4)).toBe(-5);
  });

  test("Add 2 float Numbers", () => {
    expect(sum(1.5, 3.5)).toBe(5);
  });

  test("Add 2 String Numbers", () => {
    expect(sum("3", "2")).toBe(5);
  });
});

