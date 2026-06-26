export function renderGoldWizard(contentEl) {
  contentEl.innerHTML = `
    <div class="card">
      <h3>Gold investment</h3>
      <!-- buy, storage, insurance, final value/sale -->
    </div>
  `;
}

export function buildGoldCashflows() {
  return {
    cashflows: [],
    labels: []
  };
}
