// Your code here
function mapToNegativize(srcArray) {
    const result = []
    srcArray.forEach(e => {
        result.push(-e)
    });
    return result
}

function mapToNoChange(srcArray) {
    const result = []
    srcArray.forEach(e => {
        result.push(e)
    });
    return result
}

function mapToDouble(srcArray) {
    const result = []
    srcArray.forEach(e => {
        result.push(e * 2)
    });
    return result
}

function mapToSquare(srcArray) {
    const result = []
    srcArray.forEach(e => {
        result.push(e ** 2)
    });
    return result
}

function reduceToTotal(srcArray, startInt=0) {
    let total = startInt
    srcArray.forEach(e => {
        total += e
    })
    return total
}

function reduceToAllTrue(srcArray) {
    for (let s of srcArray) {
        if (!s) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(srcArray) {
    for (let s of srcArray) {
        if (s) {
            return true
        }
    }
    return false
}