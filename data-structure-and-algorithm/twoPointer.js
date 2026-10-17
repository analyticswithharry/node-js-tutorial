const twoPointerSearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left<right){
        const sum = arr[left] + arr[right];
        if(sum === target){
            return [arr[left], arr[right]];
        }
        else if(sum<target){
            left++;
        }
        else{
            right--;
        };
    };
    return null;
};

let arr = [1, 2, 4, 6, 8, 9];
let target = 12;

console.log(twoPointerSearch(arr, target));
