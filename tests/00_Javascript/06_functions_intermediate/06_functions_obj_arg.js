function showPlayer(player) {
    console.log("I am " + player.name + ", from " + player.city);
}

player1 = {id: 10, name: "Sachin", city: "Mumbai"};

showPlayer(player1);    // Passing object as argument with variable
showPlayer({id: 11, name: "Virat", city: "Delhi"});    // Passing object as argument directly   
