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

const productList = ["Cap", "Hat", "T-shirt"];
const productKey = "Hat";
console.log(linearSearch(productList, productKey))
