const fiveSum = (arr, tr) => {
    arr = [...arr].sort((a,b) => a-b);
    for (let i = 0; i < arr.length - 4; i++){
        for (let j = i + 1; j < arr.length - 3; j++){
            for (let k = j + 1; k < arr.length - 2; k++){
                let left = k + 1;
                let right = arr.length - 1;
                while(left<right){
                  const sum = arr[i] + arr[j] + arr[k] + arr[left] + arr[right];
                  if(sum === tr){
                      return [arr[i], arr[j], arr[k], arr[left], arr[right]];
                  }
                  else if(sum < tr){
                      left ++;
                  }
                  else{
                      right--;
                  };
                };
            };
        };
    };
    return null;
};

console.log(fiveSum([1, 2, 3, 4, 5, 6], 20));
