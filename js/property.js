import { computeIRR, computeNPV, computeROI, computePayback } from "./calculations.js";

export function renderPropertyModes(container) {
  container.innerHTML = `
    <p>Property strategy:</p>
    <button data-mode="rent-hold">Buy & Rent (still holding)</button>
    <button data-mode="rent-sell">Buy & Rent (sold later)</button>
    <button data-mode="flip">Buy & Sell (flip)</button>
  `;
}

export function renderPropertyWizard(mode, contentEl) {
  // TODO: build full forms per mode
  if (mode === "rent-hold") {
    contentEl.innerHTML = `
      <div class="card">
        <h3>Purchase & Loan</h3>
        <!-- purchase fields, loan fields -->
      </div>
      <div class="card">
        <h3>Year-by-year rent & expenses</h3>
        <div id="propertyYearRows"></div>
        <button id="addPropertyYearBtn">Add year</button>
      </div>
      <div class="card">
        <h3>Final valuation</h3>
        <!-- current value, outstanding loan -->
      </div>
    `;
  }
  // rent-sell, flip similar
}

export function buildPropertyCashflows(mode) {
  // TODO: read DOM, build cashflows array
  return {
    cashflows: [],
    labels: []
  };
}
