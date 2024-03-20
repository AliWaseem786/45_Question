let guests : string[] = ["Albert Einstien","marie curie","leonardo de vinci",];
console.log("great news! i found a bigger dinner table!")

guests.unshift("Isaac Newton");
guests.splice(guests.length / 2,0,"Charlies Drawin");
guests.push("ada lovelace");

guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`)
})