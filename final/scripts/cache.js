/*typeCount = countTypes(population)
    percentages = calculatePercentages(typecount)
    displayStatistics()
    recommendations = getRecommendations(percentages)
    displayRecommendations(recommendations)*/

    

/*
const displayStatistics = () => {
    statisticsElement = document.getElementById("#statistics")
    statisticsElement.textContent = "Population total: ${populationCount}"
    typePercentages.forEach(() => {
        typePercent = document.createElement("p")
        typePercent.textContent = "${type}: ${percent}"
    })
}

const displayRecommendations = (recommendations) => {
    let recommendationsElement = document.getElementById("#recommendations")
    recommendationsElement.textContent = "Recommendations: " + recommendations[0] + ", " + recommendations[1] + ", and " + recommendations[2]
}
 
const getRecommendations = (typePercentages) => {
    let sorted = Object.entries(typePercentages).sort((a,b) => b[1]-a[1])
    let recommendations = []
    recommendations.push(sorted[0][0])
    recommendations.push(sorted[1][0])
    recommendations.push(sorted[2][0])
    return(recommendations)
}

const calculatePercentages = (totalsList) => {
    let percentageList= {}
    for (const [key, value] of Object.entries(totalsList)){
        percentage = value/totalsList["all"]
        percentageList[key] = percentage
    }
    return(percentageList)
}

const countTypes = (list) => {
    let typeTotals = {}
    typeTotals["all"] = 0
    list.forEach((metamon) => {
        typeTotals["all"] ++
        typeList = metamon.types
        typeList.forEach((type) => {
            if (typeTotals.hasOwnProperty(type) == false) {
                typeTotals[type] = 0;
            }
            typeTotals[type] ++
        });
    });
    return(typeTotals)
} */





const url = "https://run.mocky.io/v3/fbbbf25b-8219-44b5-b3ed-86918781bdeb";
    let results = null;
    async function GetPops(url) {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            doStuff(data);
        }
        }
        function doStuff(data) {
            results = data;
            console.log("first: ", results);
        }
        GetPops(url);
        console.log("second: ", results);