let magicians : string[] = ["Alice", "David","Chris"];

function show_magicians (magicians : string[] ) {
    magicians.forEach(magicians => {
        console.log(magicians)
    })
};
 
show_magicians(magicians)

function make_great(magicians : string[]) {
    for(let i = 0 ; magicians.length ; i++) {
        magicians[i] = magicians[i] + "the great"
    }
};

make_great(magicians)

// show_magicians(magicians)




