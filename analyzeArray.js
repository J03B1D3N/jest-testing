
const merge = (leftArr, rightArr) => {
const output = [];
let leftIndex = 0
let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]
        if(leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl)
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}


//the "merge" part of the merge sort algorithm that merges the sorted arrays into one.
function mergeSort(array) {
    if(array.length <= 1)
    return array
    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)
    return merge(
        mergeSort(leftArr), mergeSort(rightArr)
    )
}

function analyzeArray(array) {
let sortedArray = mergeSort(array)
let min = sortedArray[0]
let length = sortedArray.length
let max = sortedArray[length -1]
let average  = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length
return {average, min, max, length}
}
module.exports = analyzeArray