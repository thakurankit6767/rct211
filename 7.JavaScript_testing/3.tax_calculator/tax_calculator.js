function TaxCalculation(amount) {
  if (amount <= 250000) {
    return "no tax";
  } else if (amount >= 250000 && amount <= 500000) {
    let tax_cal = amount * (10 / 100);
    return tax_cal;
  } else if (amount > 500000 && amount < 1000000) {
    let tax_cal = amount * (20 / 100);
    return tax_cal;
  } else if (amount > 1000000) {
    let tax_cal = amount * (30 / 100);
    return tax_cal;
  }
}

module.exports = TaxCalculation;
 