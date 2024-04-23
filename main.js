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
