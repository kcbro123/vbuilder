/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    function backtrack(startIdx, path, currentSum) {
        if (currentSum === target) {
            res.push([...path])
            return;
        }

        for (let i = startIdx; i < candidates.length; i++) {
            let currNum = candidates[i]
            if (currentSum + currNum > target) break;
            path.push(currNum);

            backtrack(i, path, currentSum + currNum)
            path.pop()
        }
    }
    let res = [];
    candidates = candidates.sort((a, b) => a - b).filter(item => item <= target);
    backtrack(0, [], 0)
    return res;
};
console.log(combinationSum([2, 3, 6, 7], 7));
