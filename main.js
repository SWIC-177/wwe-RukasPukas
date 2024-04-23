import { BELTS, CHAMPIONS } from "./src/data";

import { removeCorrespondingItemsByTerm } from "./src/lib";

/* //THIS PORTION IS OF THE HOMEWORK FROM THURSDAY PART I
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
const UPDATED_BELTS = filteredBelts;
const UPDATED_CHAMPIONS = filteredChampions;
console.log(UPDATED_BELTS);
console.log(UPDATED_CHAMPIONS);
