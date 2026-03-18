const fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let fruit of fruits)
{
    console.log(fruit);
}

// ----------------------------

const person = {playername: "Sachin", age: 48, country: "India"};

for(let key of Object.keys(person))
{
    console.log(key, person[key]);
}

// ----------------------------
for(let value of Object.values(person))
{
    console.log(value);
}
