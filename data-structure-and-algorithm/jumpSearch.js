const jumpSearch = (arr, target) => {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let start = 0;
    let end = step;
    while(start < n && arr[Math.min(end, n) - 1] < target){
        start = end;
        end += step;
    }
    for(let i = start; i < Math.min(end, n); i++){
        if (arr[i] === target){
           return i; 
        }
        if(arr[i]>target){
            break;
        };
    };
    return -1;
};

let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log(jumpSearch(arr, 14)); 
console.log(jumpSearch(arr, 10)); 
console.log(jumpSearch(arr, 15)); 
