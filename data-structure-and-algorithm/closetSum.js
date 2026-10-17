const closestTwoSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let bestPair = null;
    let bestDifference = Infinity;
    while(left < right){
        const sum = arr[left] + arr[right];
        const difference = Math.abs(sum - target);

        if (difference < bestDifference){
            bestDifference = difference;
            bestPair = [arr[left], arr[right]];
        }
        if(sum === target) return bestPair;
        if(sum < target) left++;
        else right --;
    };
    return bestPair;
};

console.log(closestTwoSum([1, 3, 5, 8, 12], 10));
console.log(closestTwoSum([1, 3, 5, 8, 12], 19));
console.log(closestTwoSum([1, 3, 5, 8, 12], 15));
