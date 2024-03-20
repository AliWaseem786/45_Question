function make_album(artist : string , title : string , tracks? : number) {
    let album = {artist,title};
    if (tracks) {
        album['tracks'] = tracks
    }
    return album
}

console.log(make_album("artist One" , "The first album"))
console.log(make_album("artist two" , "The second album"))
console.log(make_album("artist three" , "The third album"))