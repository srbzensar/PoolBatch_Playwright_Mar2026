function max_arr(arr) {
    let max = arr[0];
    for (let num of arr) 
    {
        if (num > max)
            max = num;
    }
    return max;
}

arr = [3, 5, 7, 2, 8, 1, 4];
console.log("Max:", max_arr(arr)); // using variable


console.log("Max:", max_arr([100, 800, 300, 700, 500])); // using array directly
