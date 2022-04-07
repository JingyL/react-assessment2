function unroll(squareArray) {
    // top bottom right left
    let top = 0;
    let bottom = squareArray.length - 1;
    let left = 0;
    let right = squareArray[0].length - 1;
    let output = [];
    // while loop from left to right, top to bottom
    while (top <= bottom && left <= right){
        for (let i = left; i < right + 1; i++){
            output.push(squareArray[top][i]);
        }
        top += 1;

        for (let i = top; i < bottom + 1; i++){
            output.push(squareArray[i][right]);
        };
        right -= 1;

        // corner case, when there is one row or col
        if (top > bottom || left > right){
            return output;
        }

        for (let i = right; i >= left; i--) {
            output.push(squareArray[bottom][i]);
        };
        bottom -= 1;

        for (let i = bottom; i >= top; i--) {
            output.push(squareArray[i][left]);
        };
        left += 1;

    };
    console.log(output);
    return output;

}

module.exports = unroll;
