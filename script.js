// function threeSum(arr, target) {
// // write your code here
  
// }

function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  let closestSum = Infinity; // Initialize with a large value
  let minDiff = Infinity; // Initialize with a large value
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(target - sum);
      
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }
      
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return closestSum;
}




module.exports = threeSum;
