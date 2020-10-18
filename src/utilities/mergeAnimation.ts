function getMergeAnimations (arr: number[]){
    const animations:object[] = [];
    if (arr.length <= 1) return arr;
    const auxArr: number[] = arr.slice();
    mergeHelper(arr, 0, arr.length-1, auxArr, animations)
    return animations
}

function mergeHelper(
    mainArr:number[],
    beginInd: number,
    endInd: number,
    tempArr: number[],
    animations: object[]
) {
    if(beginInd === endInd) return;
    const middleInd: number = Math.floor((beginInd+endInd)/2);
    mergeHelper(tempArr,beginInd,middleInd,mainArr,animations)
    mergeHelper(tempArr,middleInd+1,endInd,mainArr,animations)
    mergeSort(mainArr,beginInd,middleInd,endInd,tempArr,animations)
}

function mergeSort(
    mainArr:number[],
    start:number,
    middle:number,
    end:number,
    tempArr:number[],
    animations:object[]
){
    let k = start;
    let i = start;
    let j = middle+1;

    while(1<=middle && j <=end){
        animations.push([i,k]);

        animations.push([i,k]);

        if (tempArr[i] <= tempArr[j]){
            animations.push([k, tempArr[i]]);
            mainArr[k++] = tempArr[i++];
        }
        else{
            animations.push([k, tempArr[j]]);
            mainArr[k++] = tempArr[j++]
        }
    }
    while ( i<= middle){
        animations.push([i,i]);

        animations.push([i,i]);

        animations.push([k, tempArr[i]]);

        mainArr[k++] = tempArr[i++];
    }

    while (j <= end){
        animations.push([j,j]);

        animations.push([j,j]);

        animations.push([k, tempArr[j]]);
        mainArr[k++] = tempArr[j++]
    }
}

export {getMergeAnimations}

