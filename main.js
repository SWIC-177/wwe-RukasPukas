import { BELTS, CHAMPIONS } from "./src/data";

import { alphabetizeNames, removeCorrespondingItemsByTerm } from "./src/lib";

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
const sortedNames = alphabetizeNames({ first: UPDATED_CHAMPIONS });

console.log("sortedNames:", sortedNames);
console.log(UPDATED_BELTS);
