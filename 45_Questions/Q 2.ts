/////////UpperCase

let upperCase : string = "Ali waseem khoso";
console.log(upperCase.toUpperCase());

////////LowerCase


let lowerCase : string = "Ali waseem khoso";
console.log(lowerCase.toLowerCase());


///////////TitleCase

let titleCase : string = "ali waseem khoso"
console.log(titleCase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

