import { BELTS, CHAMPIONS } from "./src/data";

import { removeCorrespondingItemsByTerm } from "./src/lib";

/*
const championVacantTitleRemoval = CHAMPIONS.filter(
  (championVacancy) => championVacancy !== "Vacant Title",
);
console.log(championVacantTitleRemoval);
*/

const { terms1: filteredBelts, terms2: filteredChampions } =
  removeCorrespondingItemsByTerm({
    terms1: BELTS,
    terms2: CHAMPIONS,
    filterTerm: "Tag Team Champions",
  });
export const UPDATED_BELTS = filteredBelts;
export const UPDATED_CHAMPIONS = filteredChampions;
console.log(UPDATED_BELTS);
console.log(UPDATED_CHAMPIONS);
