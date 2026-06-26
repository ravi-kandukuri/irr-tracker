// Core calculation engine

export function computeIRR(cashflows) {
  let guess = 0.1;
  for (let i = 0; i < 100; i++) {
    let npv = 0;
    let derivative = 0;
    for (let t = 0; t < cashflows.length; t++) {
      npv += cashflows[t] / Math.pow(1 + guess, t);
      derivative -= t * cashflows[t] / Math.pow(1 + guess, t + 1);
    }
    if (Math.abs(derivative) < 1e-10) return null;
    const newGuess = guess - npv / derivative;
    if (Math.abs(newGuess - guess) < 1e-7) return newGuess;
    guess = newGuess;
  }
  return null;
}

export function computeNPV(cashflows, discountRate) {
  const r = discountRate / 100;
  return cashflows.reduce((sum, cf, t) => sum + cf / Math.pow(1 + r, t), 0);
}

export function computeROI(cashflows) {
  const initial = cashflows[0];
  const totalReturn = cashflows.slice(1).reduce((a, b) => a + b, 0);
  return (totalReturn + initial) / Math.abs(initial);
}

export function computePayback(cashflows) {
  let cumulative = 0;
  for (let t = 0; t < cashflows.length; t++) {
    cumulative += cashflows[t];
    if (cumulative >= 0) return t;
  }
  return null;
}
