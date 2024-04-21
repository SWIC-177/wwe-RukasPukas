import { BELTS, CHAMPIONS } from "./src/data";

const filteredChampions = CHAMPIONS.filter(
  (champion) => champion !== "Vacant Title",
);

const filteredBelts = BELTS.filter((belt) => belt !== "Women's World Champion");
