export function renderCryptoModes(container) {
  container.innerHTML = `
    <p>Crypto mode:</p>
    <button data-mode="simple">Simple (initial vs current)</button>
    <button data-mode="detailed">Detailed (transactions + staking)</button>
  `;
}

export function renderCryptoWizard(mode, contentEl) {
  // similar to shares, plus staking rewards
}

export function buildCryptoCashflows(mode) {
  return {
    cashflows: [],
    labels: []
  };
}
