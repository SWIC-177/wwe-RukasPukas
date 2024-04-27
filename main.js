import { BELTS, CHAMPIONS } from "./src/data";

import {
  alphabetizeNames,
  printCorrespondingElements,
  removeCorrespondingItemsByTerm,
} from "./src/lib";

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

const { first: sortedChampions, second: sortedBelts } = alphabetizeNames({
  first: UPDATED_CHAMPIONS,
  second: UPDATED_BELTS,
});

printCorrespondingElements(sortedChampions, sortedBelts);
