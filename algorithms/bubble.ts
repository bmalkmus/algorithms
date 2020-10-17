function bubble(arr:number[]) {
    let swapped:boolean
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++){
            let temp:number
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }
    while(swapped);
    return arr
}

console.log(bubble([23,322,123,12,12,23213,435,654,567,8678,435,123,1,34,5,545,66,4]))


