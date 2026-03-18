
// function sum(a, b)
// {
//     return a + b;
// }

// console.log(sum(5, 10));



// function total_price(a, b)
function total_price(a, b, ...prices) // ....prices is rest operator
{
    let total = a + b;  
    // for(let i=0; i<prices.length; i++)
    //     total += prices[i];
    for(let price of prices)
        total += price;
    return total;
}

console.log(total_price(5, 10, 100, 200, 300, 400)); // 5, 10 are a and b, rest are in prices array

