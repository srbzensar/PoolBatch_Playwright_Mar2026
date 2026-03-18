// an array of cricket players
const players = ["Virat", "Rohit", "Dhoni", "Kohli"];
console.log("Players:", players);

// an array of old cricket players
const oldPlayers = ["Kapil", "Sourav", "Dravid", "Sachin"];
console.log("Old Players:", oldPlayers);

// players.push("Hardik");
// console.log("Players after Addition:", players);

// // // insert old players array
// players.push(oldPlayers);
// console.log("Players after Adding old players:", players);

// console.log(players[5])
// console.log(players[5][1])

// add values of players array to oldPlayers array
oldPlayers.push(...players);    // ... spread operator
console.log("Old Players after Addition:", oldPlayers);

// // array with all players
// const allPlayers = [...players, ...oldPlayers];
// console.log("All Players:", allPlayers);

// const allPlayers1 = players.concat(oldPlayers);
// console.log("All Players:", allPlayers1);

// insert old players array
// players.push(oldPlayers);
// console.log("Players after Adding old players:", players);

// console.log(players.flat());