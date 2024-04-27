import { expect, test } from "vitest";
import { removeCorrespondingItemsByTerm, alphabetizeNames } from "./lib";

test("removeCorrespondingItemsByTerm", () => {
  // Arrange
  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert
  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});

test("alphabetizeNames function sorts names alphabetically", () => {
  // Arrange
  const unsortedNames = ["John", "Alice", "Bob"];
  const expectedSortedNames = ["Alice", "Bob", "John"];

  // Act
  const sortedNames = alphabetizeNames({ first: unsortedNames });

  // Assert
  expect(sortedNames).toEqual(expectedSortedNames);
});
