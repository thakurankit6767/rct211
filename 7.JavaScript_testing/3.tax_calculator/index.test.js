const TaxCalulation = require("./tax_calculator");

describe("Tax_Calculater_Assignment", () => {
  test("Below 25000", () => {
    expect(TaxCalulation(20000)).toBe("no tax");
  });

  test("Amount earned between 2,50,000 and 5,00,000 - 10% of the amount", () => {
    expect(TaxCalulation(300000)).toBe(30000);
  });

  test("Amount earned between 5,00,000 and 10,00,000 - 20% of the amount", () => {
    expect(TaxCalulation(700000)).toBe(140000);
  });

  test("Amount earned above 10,00,000 - 30% of the amount", () => {
    expect(TaxCalulation(1200000)).toBe(360000);
  });

  test("Amount earned 1,76,500", () => {
    expect(TaxCalulation(176500)).toBe("no tax");
  });

  test("Amount earned 9,40,000", () => {
    expect(TaxCalulation(940000)).toBe(188000);
  });

  test("Amount earned 15,00,000", () => {
    expect(TaxCalulation(1500000)).toBe(450000);
  });

  test("Amount earned 7,00,000", () => {
    expect(TaxCalulation(5200000)).toBe(1560000);
  });
});
