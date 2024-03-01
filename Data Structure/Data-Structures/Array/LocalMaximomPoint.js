/**
 * [LocalMaxima](https://www.geeksforgeeks.org/find-indices-of-all-local-maxima-and-local-minima-in-an-array/) is an algorithm to find relative bigger numbers compared to their neighbors
 *
 * Notes:
 * - works by using divide and conquer
 * - the function gets the array A with n Real numbers and returns the index of local max point (if more than one exists return the first one)
 *
 * @complexity: O(log(n)) (on average )
 * @complexity: O(log(n)) (worst case)
 * @flow
 */
const findMaxPointIndex = (
    array,
    rangeStartIndex,
    rangeEndIndex,
    originalLength
) => {
  // find index range middle point
  const middleIndex =
      rangeStartIndex + parseInt((rangeEndIndex - rangeStartIndex) / 2)

  // handle array bounds
  if (
      (middleIndex === 0 || array[middleIndex - 1] <= array[middleIndex]) &&
      (middleIndex === originalLength - 1 ||
          array[middleIndex + 1] <= array[middleIndex])
  ) {
    return middleIndex
  } else if (middleIndex > 0 && array[middleIndex - 1] > array[middleIndex]) {
    return findMaxPointIndex(
        array,
        rangeStartIndex,
        middleIndex - 1,
        originalLength
    )
  } else {
    // regular local max
    return findMaxPointIndex(
        array,
        middleIndex + 1,
        rangeEndIndex,
        originalLength
    )
  }
}

const LocalMaximomPoint = (A) => findMaxPointIndex(A, 0, A.length - 1, A.length)

// Call the function with an array and log the result
const testArray = [1, 3, 7, 1, 2, 6, 3, 4, 1];
console.log(LocalMaximomPoint(testArray));

export { LocalMaximomPoint }