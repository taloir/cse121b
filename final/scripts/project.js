const displayStatistics = (percentList, totalList) => {
    statisticsElement = document.getElementById("statistics")
    populationTotal = document.createElement("p")
    populationTotal.innerHTML = `Total Populaiton: ${totalList["All"]}`
    statisticsElement.appendChild(populationTotal)

    statArray = Object.entries(percentList)
    statArray.forEach((type) => {
        if (type[0] != "All") {
            typePercent = document.createElement("p")
            typeCount = totalList[type[0]]
            typePercent.innerHTML = `${type[0]}: ${type[1].toString()}% (${typeCount})`
            statisticsElement.appendChild(typePercent)
        }
    })
}

const displayRecommendations = (recommendations) => {
    const recommendationsElement = document.getElementById("recommendations")
    recommendationsElement.innerHTML = `${recommendations[0]}, ${recommendations[1]}, and ${recommendations[2]}`
}

const getRecommendations = (typePercentages) => {
    let sorted = Object.entries(typePercentages).sort((a,b) => a[1]-b[1])
    let recommendations = []
    sorted.forEach((entry) => {
        if (entry[1] < 200/(sorted.length-1)){
            entry[0] = entry[0].toUpperCase() 
        }
    })
    recommendations.push(sorted[0][0])
    recommendations.push(sorted[1][0])
    recommendations.push(sorted[2][0])
    return(recommendations)
}

const calculatePercentages = (totalsList) => {
    let percentageList= {}
    for (const [key, value] of Object.entries(totalsList)){
        percentage = Math.round(100*value/totalsList["All"])
        percentageList[key] = percentage
    }
    return(percentageList)
}

const countTypes = (list) => {
    let typeTotals = {}
    typeTotals["All"] = 0
    let array = Array.from(list)
    array.forEach((metamon) => {
        typeTotals["All"] ++
        let typeList = metamon.Types
        typeList.forEach((type) => {
            if (typeTotals.hasOwnProperty(type) == false) {
                typeTotals[type] = 0;
            }
            typeTotals[type] ++
        });
    });
    return(typeTotals)
} 

const getPopulation = async () => {
    const population = await fetch("https://run.mocky.io/v3/c241f581-be47-4bd7-9cb5-1d2beb01ad87");
    if (population.ok){
    const metamonList = await population.json();
    totals = countTypes(metamonList)
    percentages = calculatePercentages(totals)
    recommendations = getRecommendations(percentages)
    displayRecommendations(recommendations)
    displayStatistics(percentages, totals)
    }
}

getPopulation()