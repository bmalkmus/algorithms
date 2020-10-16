function shell(arr){
    let increment = arr.length/2
    while (increment > 0 ){
        console.log(arr)
        for (let i = increment; i < arr.length; i++){
            let j = i;
            let temp = arr[i];
            while (j >= increment && arr[j-increment] > temp){
                arr[j] = arr[j-increment];
                j = j-increment
            }
            arr[j] = temp
        }
        if (increment == 2) {
            increment = 1;
        }
        else {
            increment = parseInt(increment*5/11);
        }
        console.log(arr[increment])
    }
    return arr
}

console.log(shell([43,54,65,3,2,23,4543,646,23,1,2,77,88,9,3435,342,2312,423,4,2312,756745,534542]))