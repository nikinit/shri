export function pyramidSort(arr, compareFn) {
    const sorted = [...arr].sort(compareFn);
    const pyramidSorted = new Array(arr.length)

    for (let i = 0; i < sorted.length; i++) {
        const originalIndex = sorted.length / i > 2 ? i * 2 : (sorted.length - i) * 2 - 1;
        pyramidSorted[i] = sorted[originalIndex]
    }

    return pyramidSorted;
}
