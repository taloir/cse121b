const main = () => {
    let population = getPopulation();
    let typeCount = countTypes(population)
    /*let percentages = calculatePercentages(typeCount)*/
    displayData(typeCount);

    /*
    displayStatistics(percentages)
    recommendations = getRecommendations(percentages)
    displayRecommendations(recommendations)*/
    }
   
const displayData = async (data) => {
    const displayElement = document.getElementById("recommendations");
    let string = JSON.stringify(data)
    displayElement.innerHTML = `${string}`

}




/*
const displayStatistics = () => {
    statisticsElement = document.getElementById("#statistics")
    statisticsElement.textContent = "Population total: <strong>${populationCount}<strong/>"
    typePercentages.forEach(() => {
        typePercent = document.createElement("p")
        typePercent.textContent = "<strong>${type}<strong/>: <strong>${percent}<strong/>"
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
}*/

const countTypes = (list) => {
    let typeTotals = {}
    typeTotals["all"] = 0
    let array = Array.from(list)
    array.forEach((metamon) => {
        typeTotals["all"] ++
        let typeList = metamon.Types
        for(type in typeList) {
            if (typeTotals.hasOwnProperty(type) == false) {
                typeTotals[type] = 0;
            }
            typeTotals[type] ++
        };
    });
    return(typeTotals)
} 

const getPopulation = async () => {
    const population = await fetch("https://run.mocky.io/v3/c241f581-be47-4bd7-9cb5-1d2beb01ad87");
    if (population.ok){
    const metamonList = await population.json();
    return(metamonList);
    }
}

main()