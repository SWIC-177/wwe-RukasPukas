import { CHAMPIONS } from "./src/data";

const championVacantTitleRemoval = CHAMPIONS.filter(
  (championVacancy) => championVacancy !== "Vacant Title",
);
console.log(championVacantTitleRemoval);
