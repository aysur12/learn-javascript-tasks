// Подмассив наибольшей суммы https://learn.javascript.ru/task/maximal-subarray

const getMaxSubSum = function(arr) {
  let currentSum = 0;
  let maxSum = currentSum;

  arr.forEach(item => {
    currentSum = Math.max(item, currentSum + item);
    if (currentSum < 0) {
      currentSum = 0;
    }
    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));