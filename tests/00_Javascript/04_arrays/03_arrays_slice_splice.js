// array

const marks = [0,1,2,3,4,5,6,7,8,9,10];

console.log("Marks:", marks);

// slice to extract a portion of the array from start index to end index (end index not included)
// extract elements from index 1 to 3
const slicedMarks = marks.slice(1, 4);
console.log("Sliced Marks:", slicedMarks);
console.log("Marks after Slice:", marks);

// splice to remove elements from the array and optionally add new elements
// remove 3 elements from index 1
const splicedMarks = marks.splice(1, 3);
console.log("Spliced Marks:", splicedMarks);
console.log("Marks after Splice:", marks);

// remove 1 element from index 3 and add 2 new elements
marks.splice(3, 1, 10, 20);
console.log("Marks after Splice and Addition:", marks);