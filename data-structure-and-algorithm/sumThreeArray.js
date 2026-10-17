const threeSum = (arr, target) => {
    arr = [...arr].sort((a,b) => a - b);
    for(let i = 0; i < arr.length - 2; i++){
        let left = i + 1;
        let right = arr.length - 1;
        while(left < right){
            const sum = arr[i] + arr[left] + arr[right];
            if(sum === target){
                return [arr[i], arr[left], arr[right]];
            }
            else if(sum < target) {
                left++;
            }
            else{
                right--;
            };
        };
    };
    return null;
};

console.log(threeSum([1, 2, 4, 6, 8], 12));
