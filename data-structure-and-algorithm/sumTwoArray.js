const twoSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        const sum = arr[left] + arr[right];
        
        if(sum === target){
            return [arr[left], arr[right]];
        }
        else if(sum < target){
            left++;
        }
        else{
            right--;
            };
         };
    return null;
};

console.log(twoSum([1, 2, 4, 6, 8, 9], 11));
console.log(twoSum([1, 2, 4, 6, 8, 9], 12));
