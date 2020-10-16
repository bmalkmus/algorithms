function quickSort(unsorted){
    if (unsorted.length <= 1){
        return unsorted
    }
    const pivot = unsorted.pop();
    let left = []
    let right = []
    let sorted = []
    console.log([left,right,pivot])

    for (let i = 0; i< unsorted.length; i++){
        if (unsorted[i] <= pivot){
            left.push(unsorted[i])
        }
        else {
            right.push(unsorted[i])
        }
    }
    return sorted.concat(quickSort(left), pivot, quickSort(right))
}


console.log(quickSort([2,3,34,234,453,234,56876,8987,6,4,45,676,343,45]))

