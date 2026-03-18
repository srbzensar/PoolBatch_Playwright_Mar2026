// Write a for loop that prints numbers from 1 to 10 in the console.
// initialization; condition; increment/decrement
// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }

// -------------------

const marks = [45, 20 , 48 , 50 , 42];
 
// for(let i=0; i<=4; i++)
for(let i=0; i<marks.length; i++)
{
    console.log(marks[i]);
}

console.log(marks[4]); // 42

// for(let j=marks.length-1; j>=0; j--)
for(let j=4; j>=0; j--)
{
    console.log(marks[j]);
}