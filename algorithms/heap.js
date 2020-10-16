function heapSort(arr){
    length = arr.length;
    i = Math.floor(length/2-1);
    k = length - 1;

    while (i >= 0 ){
        createHeap(arr, length, i)
        i--
    }

    while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]]
        createHeap(arr, k, 0)
        k--
    }

    function createHeap(array, len, i){
        let largest = i;
        let left = i * 2 +1
        let right = left + 1

        if (left < len && array[left] > array[largest]) {
            largest = left
        }
        if (right < len && array[right] > array[largest]) {
            largest = right
        }
        if (largest != i){
            [array[i], array[largest]] = [array[largest], array[i]]
            createHeap(array, len, largest)
        }
        return array
    }

    return arr
}

console.log(heapSort([6, 5, 3, 1, 8, 7, 2, 4]))