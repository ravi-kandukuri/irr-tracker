export function renderTermWizard(contentEl) {
  contentEl.innerHTML = `
    <div class="card">
      <h3>Term Deposit</h3>
      <!-- deposit amount, rate, compounding, start year, maturity year, payout -->
    </div>
  `;
}

export function buildTermCashflows() {
  return {
    cashflows: [],
    labels: []
  };
}
