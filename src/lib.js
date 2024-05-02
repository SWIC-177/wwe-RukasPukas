/**
 * @typedef {Object} RemoveCorrespondingItemsByTermArgs
 * @property {string[]} terms1
 * @property {string[]} terms2
 * @property {string} filterTerm
 */
/**
 * @typedef {Object} Terms
 * @property {string[]} terms1
 * @property {string[]} terms2
 */

/**
 * @param {RemoveCorrespondingItemsByTermArgs} args
 * @returns {Terms}
 */
export function removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm }) {
  return terms1.reduce(
    (accumulatedResults, term, index) => {
      // Avoid any mutation or reassignment of the parameter object.
      const accumulatedResults2Modify = { ...accumulatedResults };

      // As we iterate, if the current `term` does not include the `filterTerm`, add it to the 'results arrays.'
      if (!term.includes(filterTerm)) {
        accumulatedResults2Modify.terms1 = [
          ...accumulatedResults2Modify.terms1,
          term,
        ];

        // Also add the corresponding term from `terms2` to the 'results arrays.'
        accumulatedResults2Modify.terms2 = [
          ...accumulatedResults2Modify.terms2,
          terms2[index],
        ];
      }

      return accumulatedResults2Modify;
    },

    // Initialize the results.
    { terms1: [], terms2: [] },
  );
}

export function alphabetizeNames({ first, second }) {
  const sortedFirst = [...first].sort();
  const sortedSecond = [];

  sortedFirst.forEach((champion) => {
    const index = first.indexOf(champion);
    sortedSecond.push(second[index]);
  });

  return { first: sortedFirst, second: sortedSecond };
}

// EXTRA CREDIT
/**
 * @param {string[]} array1
 * @param {string[]} array2
 */
export function printCorrespondingElements(array1, array2) {
  for (
    let i = 0;
    i < array1.length;
    i++ // I know it wants 3 "+++s" but vite says there is an error when I do so.
  ) {
    console.log(`${array1[i]} : ${array2[i]}`);
  }
}

export function merge2ArraysIntoAnArrayOfObjects({ a1, a2, key1, key2 }) {
  return a1.reduce((acc, item, index) => {
    const accumulatedResults2Modify = [...acc];

    return [
      ...accumulatedResults2Modify,
      {
        [key1]: item,
        [key2]: a2[index],
      },
    ];
  }, []);
}

export function getLastName(fullName) {
  const parts = fullName.trim().split(" ");
  return parts[parts.length - 1];
}
