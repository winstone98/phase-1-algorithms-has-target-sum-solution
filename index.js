
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // 1 step
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
