import { BELTS, CHAMPIONS } from "./src/data";

import { removeCorrespondingItemsByTerm } from "./src/lib";

const championVacantTitleRemoval = CHAMPIONS.filter(
  (championVacancy) => championVacancy !== "Vacant Title",
);
const correspondingTitleRemoval = BELTS.filter(
  (beltVacancy) => beltVacancy !== "Women's World Champion",
);

const { terms1: filteredBelts, terms2: filteredChampions } =
  removeCorrespondingItemsByTerm({
    terms1: correspondingTitleRemoval,
    terms2: championVacantTitleRemoval,
    filterTerm: "Tag Team Champions",
  });
const UPDATED_BELTS = filteredBelts;
const UPDATED_CHAMPIONS = filteredChampions;
console.log(UPDATED_BELTS);
console.log(UPDATED_CHAMPIONS);
