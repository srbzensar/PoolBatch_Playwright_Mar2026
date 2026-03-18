const player = {
    name: "Sachin",
    "full name": "Sachin Tendulkar",
    age: 47,
    country: "India",
    email: "sachin@cricket.com",
    isRetired: true,
    achievements: ["Most runs in ODIs", "Most centuries in Tests"],
    contacts: {"mobile": "9876543210", "resi": "0123456789", "office": "0987654321" }
}

console.log("Player:", player);
console.log("Player Name:", player.name);
console.log("Player Age:", player.age);
console.log("Player Country:", player["country"]);
console.log("Player Full Name:", player["full name"]);
console.log("Player Email:", player.email);
console.log("Player Retired:", player.isRetired);
console.log("Player Achievements:", player.achievements);
console.log("Player Contacts:", player.contacts);

console.log("Player Mobile:", player.contacts.mobile);
console.log("Player Residential:", player.contacts.resi);
console.log("Player Office:", player.contacts.office);

player.city = "Mumbai";
console.log("Player City:", player.city);

player.intro = function() {
    console.log("Hi, I'm " + this["full name"] + " from " + this.country + ".");
}

player.intro();