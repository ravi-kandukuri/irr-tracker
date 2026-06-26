import { computeIRR, computeNPV, computeROI, computePayback } from "./calculations.js";

export function renderSharesModes(container) {
  container.innerHTML = `
    <p>Shares mode:</p>
    <button data-mode="simple">Simple (initial vs current + dividends)</button>
    <button data-mode="detailed">Detailed (transactions)</button>
  `;
}

export function renderSharesWizard(mode, contentEl) {
  if (mode === "simple") {
    contentEl.innerHTML = `
      <div class="card">
        <h3>Simple shares</h3>
        <!-- initial buy, current value, dividends -->
      </div>
    `;
  } else {
    contentEl.innerHTML = `
      <div class="card">
        <h3>Transactions</h3>
        <div id="sharesTxList"></div>
        <button id="addSharesTxBtn">Add transaction</button>
      </div>
      <div class="card">
        <h3>Final holdings</h3>
        <!-- units held, current price -->
      </div>
    `;
  }
}

export function buildSharesCashflows(mode) {
  return {
    cashflows: [],
    labels: []
  };
}
