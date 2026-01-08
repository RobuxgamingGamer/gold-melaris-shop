const prices = {
  small:   { common: 5,  rare: 12, epic: 20, legendary: 50 },
  middle:  { common: 10, rare: 22, epic: 40, legendary: 65 },
  large:   { common: 20, rare: 30, epic: 55, legendary: 80 }
};

const priceEl = document.getElementById("price");
const giftsEl = document.getElementById("gifts");

document.getElementById("size").onchange =
document.getElementById("rarity").onchange = updatePrice;

function updatePrice() {
  const size = sizeEl.value;
  const rarity = rarityEl.value;

  if (!size || !rarity) {
    priceEl.textContent = "€0";
    giftsEl.textContent = "";
    return;
  }

  priceEl.textContent = "€" + prices[size][rarity];

  giftsEl.textContent =
    rarity === "legendary" ? "🎁 Includes 3 bonus gifts!" : "";
}

function confirmPack() {
  const rarity = document.getElementById("rarity").value;
  if (!rarity) return;

  spawnBeads(rarity);
  shakeScreen(rarity);
}

function spawnBeads(rarity) {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "bead";
    b.style.left = Math.random() * 100 + "vw";
    b.style.top = "40vh";
    b.style.background =
      rarity === "legendary" ? "gold" :
      rarity === "epic" ? "magenta" :
      rarity === "rare" ? "cyan" : "#aaa";

    document.body.appendChild(b);
    setTimeout(() => b.remove(), 1200);
  }
}

function shakeScreen(rarity) {
  document.body.className = "";
  if (rarity === "rare") document.body.classList.add("shake-small");
  if (rarity === "epic") document.body.classList.add("shake-medium");
  if (rarity === "legendary") document.body.classList.add("shake-big");

  setTimeout(() => document.body.className = "", 900);
}