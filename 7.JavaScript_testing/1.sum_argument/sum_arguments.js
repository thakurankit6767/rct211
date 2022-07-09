function sum(...args) {
    const AddSumValue = [...args].reduce((a, b) => a + Number(b), 0);
    return Number(AddSumValue.toFixed(1));
  }
  
  module.exports = sum;