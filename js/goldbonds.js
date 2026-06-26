export function renderGoldBondsModes(container) {
  container.innerHTML = `
    <p>Gold Bonds mode:</p>
    <button data-mode="simple">Simple (buy → interest → redeem)</button>
    <button data-mode="detailed">Detailed (multiple buys, partial sells, yearly interest)</button>
  `;
}

export function renderGoldBondsWizard(mode, contentEl) {
  if (mode === "simple") {
    contentEl.innerHTML = `
      <div class="card">
        <h3>Gold Bonds – Simple</h3>
        <!-- purchase year, units, price, interest rate, maturity, redemption price -->
      </div>
    `;
  } else {
    contentEl.innerHTML = `
      <div class="card">
        <h3>Gold Bonds – Detailed</h3>
        <div id="goldBondsYearRows"></div>
        <button id="addGoldBondsYearBtn">Add year</button>
        <!-- each year: interest, extra buys, partial redemptions, fees -->
      </div>
      <div class="card">
        <h3>Final redemption</h3>
        <!-- units held, redemption price -->
      </div>
    `;
  }
}

export function buildGoldBondsCashflows(mode) {
  return {
    cashflows: [],
    labels: []
  };
}
