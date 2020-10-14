function mergeSort(unsorted){
    console.log(unsorted)
    if (unsorted.length <= 1){
        return unsorted
    }
    const middle = Math.floor(unsorted.length/2)
    const left = unsorted.slice(0,middle)
    const right= unsorted.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [];
    let leftInd = 0;
    let rightInd = 0;
    while (leftInd < left.length && rightInd < right.length){
        if (left[leftInd] < right[rightInd]){
            result.push(left[leftInd])
            leftInd++
        }
        else {
            result.push(right[rightInd])
            rightInd++
        }
    }
    return result
        .concat(left.slice(leftInd))
        .concat(right.slice(rightInd))

}



console.log(mergeSort([6,4,53,45,34,23,65,8677,2343,21,5454,875,334,2,234,65,34,43,2321,999]))
