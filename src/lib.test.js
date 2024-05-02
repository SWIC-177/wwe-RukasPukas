import { expect, test, describe } from "vitest";
import {
  removeCorrespondingItemsByTerm,
  alphabetizeNames,
  merge2ArraysIntoAnArrayOfObjects,
  getLastName,
} from "./lib";

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

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with extra spaces", () => {
    // Arrange
    const fullName = " John     Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a multi-word full name", () => {
    // Arrange
    const fullName = "John Michael Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });
  test("returns the last name from a full name with special characters", () => {
    // Arrange
    const fullName = "Starsky & Hutch";
    const expected = "Hutch";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });
});

test("merge2ArraysIntoAnArrayOfObjects", () => {
  // Arrange
  const a1 = ["title1", "title2", "title3"];
  const a2 = ["champion1", "champion2", "champion3"];
  const key1 = "title";
  const key2 = "champion";

  const expected = [
    { title: "title1", champion: "champion1" },
    { title: "title2", champion: "champion2" },
    { title: "title3", champion: "champion3" },
  ];

  // Act
  const result = merge2ArraysIntoAnArrayOfObjects({ a1, a2, key1, key2 });

  // Assert - Check if the function correctly merges the two arrays expect
  expect(result).toEqual(expected);
});
