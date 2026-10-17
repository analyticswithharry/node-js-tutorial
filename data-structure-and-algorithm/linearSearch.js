const linearSearch = (arr, target) => {
    for(let i in arr){
        if(arr[i] === target) return i 
    };
    return -1
};

let numList = [10, 20, 30]
console.log(linearSearch(numList, 10))
console.log(linearSearch(numList, 20))
console.log(linearSearch(numList, 30))
