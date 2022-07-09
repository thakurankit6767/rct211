function sum(...args) {
  const sumValue = [...args].reduce((a, b) => a + Number(b), 0);
  return Number(sumValue.toFixed(1));
}

module.exports = sum;