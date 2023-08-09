function linearSearch (arr, target) {
  // Can you solve this in one line?
  return arr.indexOf(target);
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let start = 0;
  let end = arr.length - 1;
  // While high and low indices do not overlap...
  while (start <= end) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((start + end) / 2);
    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    if (arr[mid] === target) {
      // Return the midpoint index
      return mid;
    }
    // If the target is higher than the midpoint...
    else if (arr[mid] < target) {
      // Move the low pointer to midpoint + 1
      start = mid + 1;
    }
    // If the target is less than the midpoint...
    else {
      // Move the high pointer to midpoint - 1
      end = mid - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

module.exports = [linearSearch, binarySearch]
