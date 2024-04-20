export const CHAMPIONS = [
  "Bayley",
  "Charlie Dempsey",
  "Ilja Dragunov ",
  "Oba Femi",
  "Logan Paul",
  "Roxanne Perez",
  "Damian Priest",
  "Cody Rhodes",
  "Sami Zayn",
];

export const BELTS = [
  "WWE Women’s Champion",
  "NXT Heritage Cup Champion",
  "NXT Champion",
  "NXT North American Champion",
  "United States Champion",
  "NXT Women's Champion",
  "World Heavyweight Champion",
  "Undisputed WWE Champion",
  "Intercontinental Champion",
];

export const CHAMPIONSHIPS = [];

BELTS.forEach((title, index) => {
  const champion = CHAMPIONS[index];
  CHAMPIONSHIPS.push({ title, champion });
});
console.log(CHAMPIONSHIPS);
