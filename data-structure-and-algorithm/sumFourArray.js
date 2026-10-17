const fourSum = (arr, target) => {
    arr = [...arr].sort((a,b) => a - b);
    for(let i = 0; i< arr.length - 3; i++){
        for(let j = i + 1; j<arr.length - 2; j++){
            let left = j + 1;
            let right = arr.length - 1;
            while(left < right){
                const sum = arr[i] + arr[j] + arr[left] + arr[right];
                if(sum === target){
                    return [arr[i], arr[j], arr[left], arr[right]];
                }
                else if(sum < target){
                    left++;
                }
                else{
                    right--;
                };
            };
        };
    };
    return null;
};

console.log(fourSum([1, 2, 3, 4, 5, 6], 14));
