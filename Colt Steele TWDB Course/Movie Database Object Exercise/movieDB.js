var movies = [
    {
        title: "In Bruges",
        rating : "5 Stars",
        hasWatched : true
    },
    {
        title: "Frozen",
        rating : "4.5 Stars",
        hasWatched : false
    },
    {
        title: "Mad Max Fury Road",
        rating : "5 Stars",
        hasWatched : true
    },
    {
        title: "Les Miserables",
        rating : "3.5 Stars",
        hasWatched : false
    }
];

function buildString(movie) {
    var result = "You have "
    if(movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - " + movie.rating;
    return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
})