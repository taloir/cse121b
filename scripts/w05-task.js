/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
temples.forEach((temple) => {let article = document.createElement("article");
    let header = document.createElement("h3");
    header.innerHTML = temple.templeName;
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.alt = temple.location;
    article.appendChild(header);
    article.appendChild(img);
    templesElement.appendChild(article)});
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json()
    displayTemples(templeList)
}

/* reset Function */
function reset(){
    templesElement.article.remove()
}

/* sortBy Function */
function sortBy(temples){
    reset()
    filter = document.sortBy.value
    switch(filter){
        case "utah": 
        temples.filter((temple) => temple.location = "Utah")
        break;
        case "notutah": 
        temples.filter((temple) => temple.location != "Utah")
        break;
        case "older": 
        temples.filter((temple) => temple.dedicated < new Date(1950, 0, 1))
        break;
        case "all": temples = temples
    }
}


getTemples();
console.log(templeList)
/* Event Listener */
/*document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});*/