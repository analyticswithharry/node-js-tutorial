const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        if(arr[mid]===target){
            return mid;
        }else if (arr[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        };
    };
    return -1;        
};
const list = [2, 4, 6, 8, 10];
const key = 6;
const index = binarySearch(list, key);
console.log(index)

const productList = ["Cap", "Hat", "T-shirt"];
const productKey = "Hat";
const productIndex = binarySearch(productList, productKey)
console.log(productIndex)
