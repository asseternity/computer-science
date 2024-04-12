#!/usr/bin/node

// iterator
function FibonacciLooper(howManyNumbers) {
    let fibonacciArray = [];
    if (howManyNumbers == 0) {
        return fibonacciArray;
    } else if (howManyNumbers == 1) {
        fibonacciArray = [0];
        return fibonacciArray;
    } else if (howManyNumbers == 2) {
        fibonacciArray = [0, 1];
        return fibonacciArray;
    } else {
        fibonacciArray = [0, 1];
        for (let i = 2; i < howManyNumbers; i++) {
            fibonacciArray.push(fibonacciArray[(i - 1)] + fibonacciArray[(i - 2)]);
        }
        return fibonacciArray;    
    }
}

// recurser
function FibonacciRecurser(howManyNumbers, fibonacciArray) {
    if (howManyNumbers == 0) {
        return fibonacciArray;
    } else if (howManyNumbers == 1) {
        fibonacciArray = [0];
        return fibonacciArray;
    } else if (howManyNumbers == 2) {
        fibonacciArray = [0, 1];
        return fibonacciArray;
    } else {
        if (fibonacciArray.length == 0) {
            fibonacciArray = [0, 1];
        }
        fibonacciArray.push(fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1]);
        if (fibonacciArray.length == howManyNumbers) {
            return fibonacciArray;
        } else {
            return FibonacciRecurser(howManyNumbers, fibonacciArray);
        }
    }
}

// merge-sort
function mergeSort(unsortedArray) {
    // if one element
    if (unsortedArray.length <= 1) {
        // quit
    return unsortedArray;
    // else
    } else {
        // sort the left half
        let halfIndex = Math.ceil(unsortedArray.length / 2);
        let leftHalfArray = unsortedArray.slice(0, halfIndex);
        let leftHalfArraySorted = mergeSort(leftHalfArray);
        // sort the right half
        let rightHalfArray = unsortedArray.slice(halfIndex, unsortedArray.length);
        let rightHalfArraySorted = mergeSort(rightHalfArray);
        // merge the two arrays
        return mergeHalves(leftHalfArraySorted, rightHalfArraySorted);        
    }

}

function mergeHalves(leftArray, rightArray) {
    let mergedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            mergedArray.push(leftArray.shift());
        } else {
            mergedArray.push(rightArray.shift());
        }
    }
    return [...mergedArray, ...leftArray, ...rightArray];
}

// test
// console.log(FibonacciRecurser(8, []));
console.log(mergeSort([1, 13, 8, 5, 3, 4, 99, 0, -13, 99]));