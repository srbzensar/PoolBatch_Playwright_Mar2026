// const player = new Object();
const player = {}

player.id = 10;
player.name = "Sachin";
player.city = "Mumbai";

console.log("Player:", player);

// -------------------------

const player1 = {id: 11, name: "Virat", city: "Delhi"};
const player2 = {id: 10, country: "India", team: "RCB", };
// id is commmon, so it would be overwritten by player2's id

console.log("Player 1:", player1);
console.log("Player 2:", player2);

// const players = {player1, player2};
// console.log("Players:", players);  

// -------------------------
// =====================================
// Merging two objects using assign method

// const players = Object.assign({}, player1, player2);
// console.log("Players:", players);

// -------------------------
// Merging two objects using spread operator

const players = {...player1, ...player2};  // ... spread operator
console.log("Players:", players);

console.log("keys:", Object.keys(players));