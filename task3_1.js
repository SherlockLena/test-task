module.exports.findMinWeight = (record) => {
    const weights = [0.5, 1, 2.5, 4.54, 5, 10, 11.34, 15, 15.88, 20, 20.41, 25];
    const barWeight = 20;
    const maxAmount = 12; //one side
    let oneSideWeight = (record - barWeight) / 2;
    let minBigger = Infinity;
    let bestCombo = [];

    function combinationsWithRepetition(arr, k) {
        function combine(currentCombination, remainingLength, start) {
          if (remainingLength === 0) {
            let weightsSum = currentCombination.reduce((sum, cur) => sum + cur, 0);
            if (weightsSum < minBigger && weightsSum > oneSideWeight) {
                bestCombo = [...currentCombination];
                minBigger = weightsSum;
            }
            return;
          }
          for (let i = start; i < arr.length; i++) {
            combine([...currentCombination, arr[i]], remainingLength - 1, i);
          }
        }
      
        combine([], k, 0);
    }

    for(let amount = 1; amount <= maxAmount; amount++) {
        combinationsWithRepetition(weights, amount);
    }
    return minBigger * 2 + 20;
}