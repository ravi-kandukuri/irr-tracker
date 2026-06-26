import { renderPropertyModes, renderPropertyWizard, buildPropertyCashflows } from "./property.js";
import { renderSharesModes, renderSharesWizard, buildSharesCashflows } from "./shares.js";
import { renderCryptoModes, renderCryptoWizard, buildCryptoCashflows } from "./crypto.js";
import { renderGoldWizard, buildGoldCashflows } from "./gold.js";
import { renderGoldBondsModes, renderGoldBondsWizard, buildGoldBondsCashflows } from "./goldbonds.js";
import { renderTermWizard, buildTermCashflows } from "./termdeposit.js";
import { computeIRR, computeNPV, computeROI, computePayback } from "./calculations.js";
import { addOrUpdateInvestment, getInvestments } from "./storage.js";

export function initUI() {
  const homePage = document.getElementById("homePage");
  const wizardPage = document.getElementById("wizardPage");
  const summaryPage = document.getElementById("summaryPage");

  const invTypeSelect = document.getElementById("invType");
  const modeContainer = document.getElementById("modeContainer");
  const wizardContent = document.getElementById("wizardContent");

  document.getElementById("newSessionBtn").onclick = () => {
    homePage.classList.add("hidden");
    wizardPage.classList.remove("hidden");
  };

  invTypeSelect.onchange = () => {
    const type = invTypeSelect.value;
    modeContainer.innerHTML = "";
    wizardContent.innerHTML = "";

    if (type === "property") {
      renderPropertyModes(modeContainer);
      modeContainer.onclick = e => {
        const mode = e.target.dataset.mode;
        if (!mode) return;
        renderPropertyWizard(mode, wizardContent);
        wizardContent.dataset.mode = mode;
      };
    } else if (type === "shares") {
      renderSharesModes(modeContainer);
      modeContainer.onclick = e => {
        const mode = e.target.dataset.mode;
        if (!mode) return;
        renderSharesWizard(mode, wizardContent);
        wizardContent.dataset.mode = mode;
      };
    } else if (type === "crypto") {
      renderCryptoModes(modeContainer);
      modeContainer.onclick = e => {
        const mode = e.target.dataset.mode;
        if (!mode) return;
        renderCryptoWizard(mode, wizardContent);
        wizardContent.dataset.mode = mode;
      };
    } else if (type === "gold") {
      modeContainer.innerHTML = "";
      renderGoldWizard(wizardContent);
    } else if (type === "goldbonds") {
      renderGoldBondsModes(modeContainer);
      modeContainer.onclick = e => {
        const mode = e.target.dataset.mode;
        if (!mode) return;
        renderGoldBondsWizard(mode, wizardContent);
        wizardContent.dataset.mode = mode;
      };
    } else if (type === "termdeposit") {
      modeContainer.innerHTML = "";
      renderTermWizard(wizardContent);
    }
  };

  // initial trigger
  invTypeSelect.dispatchEvent(new Event("change"));
}
