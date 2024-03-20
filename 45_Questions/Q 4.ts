
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner`)


// Replace the guest 


let newGuest = "leonardo da Vinci";
let guests : string[] = ["Albert Einstien","marie curie","nikola tesla"]

guests.forEach(guest => {
    console.log(`Dear ${guest}, would like to join me for dinner`)
})

guests[guests.indexOf(unableToAttend)] = newGuest


// New invitation 
guests.forEach(guest => {
    console.log(`dear ${guest} would you like to join me for dinner`)
})


