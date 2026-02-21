info_film = {
    name: "Inception",
    year: 2010,
    rating: 8.8,
    nothingChange: function(){
        console.log("You did not rate the film")
    }
}

info_Person = prompt("Do you want rate the film? (yes/no): ")
if(info_Person.toLowerCase() === "yes"){
   person_rating = Number(prompt("Enter your rating of film: "))
   info_film["rating"] = person_rating
   console.log(info_film)
}
else{
    info_film.nothingChange()
}