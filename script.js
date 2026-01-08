// ===== PRICES =====
const prices = {
  small:   { common: 5,  rare: 12, epic: 20, legendary: 50 },
  middle:  { common: 10, rare: 22, epic: 40, legendary: 65 },
  large:   { common: 20, rare: 30, epic: 55, legendary: 80 }
};

// ===== ELEMENTS =====
const sizeEl   = document.getElementById("size");
const rarityEl = document.getElementById("rarity");
const priceEl  = document.getElementById("price");
const giftsEl  = document.getElementById("gifts");

// ===== LIVE PRICE UPDATE =====
function updatePrice() {
  const size = sizeEl.value;
  const rarity = rarityEl.value;

  if (!size || !rarity) {
    priceEl.textContent = "€0";
    giftsEl.textContent = "";
    return;
  }

  // PRICE
  priceEl.textContent = "€" + prices[size][rarity];

  // LEGENDARY GIFTS
  if (rarity === "legendary") {
    giftsEl.textContent = "🎁 Includes 3 bonus gifts!";
  } else {
    giftsEl.textContent = "";
  }
}

// ===== EVENTS =====
sizeEl.addEventListener("change", updatePrice);
rarityEl.addEventListener("change", updatePrice);

// ===== CONFIRM PACK =====
function confirmPack() {
  const rarity = rarityEl.value;
  if (!rarity) return;

  // SHAKE
  document.body.className = "";
  void document.body.offsetWidth;

  if (rarity === "rare") document.body.classList.add("shake-small");
  if (rarity === "epic") document.body.classList.add("shake-medium");
  if (rarity === "legendary") document.body.classList.add("shake-big");

  // BEADS (SIMPLE TEST)
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