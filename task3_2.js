module.exports.findTshirts = (arr) => { //arr = ["S", "L", ["M", "S"], "XL", ["XL", "XXL"], "L"]
    const tshirts = {
        "S": 10,
        "M": 3,
        "L": 2,
        "XL": 6,
        "XXL": 5,
        "XXXL": 2
    }
    const pairs = [];
    const result = [];

    const checkGiven = (size, index) => {
        for (let i = 0; i < index; i++) {
            const pair = pairs[i];
            if (pair.includes(size)) {
                if (tshirts[pair[0]] === 0 && tshirts[pair[1]] === 0) return false;
                if(tshirts[pair[0]] > 0) {
                    tshirts[pair[0]] = tshirts[pair[0]] - 1;
                    tshirts[pair[1]] = tshirts[pair[1]] + 1;
                    result[arr.indexOf(pair)] = pair[0];
                } else {
                    tshirts[pair[1]] = tshirts[pair[1]] - 1;
                    tshirts[pair[0]] = tshirts[pair[0]] + 1;
                    result[arr.indexOf(pair)] = pair[1];
                }
            }
        }
    }

    for(let i in arr) {
        const size = arr[i];
        if (Array.isArray(size)) pairs.push(size);
        else if (tshirts[size] === 0) return false;
        else {
            tshirts[size] = tshirts[size] - 1
            result[i] = size;
        };
    }
    for(let j in pairs) {
        const pair = pairs[j];
        if (tshirts[pair[0]] > tshirts[pair[1]]) {
            tshirts[pair[0]] = tshirts[pair[0]] - 1;
            result[arr.indexOf(pair)] = pair[0];
        } else {
            if (tshirts[pair[1]] === 0) checkGiven(pair[1], j);
            else { 
                tshirts[pair[1]] = tshirts[pair[1]] - 1;
                result[arr.indexOf(pair)] = pair[1];
            }
        }
    }
    return result;
}