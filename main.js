function calculateProfit(amount, percent, period) {
  let currentAmount = amount;
  
  for (let i = 1; i <= period; i++) {
    currentAmount += currentAmount * (percent / 100);
  }

  return currentAmount - amount;
}