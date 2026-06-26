export let investments = [];

export function addOrUpdateInvestment(index, inv) {
  if (index == null) {
    investments.push(inv);
    return investments.length - 1;
  } else {
    investments[index] = inv;
    return index;
  }
}

export function getInvestments() {
  return investments;
}

export function exportPayload() {
  return JSON.stringify({ investments }, null, 2);
}

export function importPayload(json) {
  const data = JSON.parse(json);
  investments = data.investments || [];
}
