function insertion(arr){
    for (let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1
        while (j >=0 && arr[j]>key){
            arr[j+1] =arr[j];
            j--
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertion([2,5,34,23,432455,656543,43534,232,209,0, 88, 69, 23]))