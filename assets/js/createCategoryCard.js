
export default function createCategoryCard(data) {
    let category =  data.title;
    let currentDailyTimeInfo = data.timeframes.daily.current;
    let currentWeeklyTimeInfo = data.timeframes.weekly.current;
    let currentMonthTimeInfo = data.timeframes.monthly.current
    
    console.log("category: " + category + ". daily: " + currentDailyTimeInfo + " . weekly: " + currentWeeklyTimeInfo + " . monthly: " + currentMonthTimeInfo);
    
    let divCategoryCard = document.createElement("div");
    divCategoryCard.classList.add("card-category");

    let divWrapper = document.createElement("div");
    let divCurrentInfo = document.createElement("div");
    divCurrentInfo.classList.add("current-info");

    let categoryTitle = document.createElement("h3");
    categoryTitle.innerText = category;
    let infoCurrentTime = document.createElement("p");
    infoCurrentTime.innerText = currentDailyTimeInfo

    divCurrentInfo.appendChild(categoryTitle);
    divCurrentInfo.appendChild(infoCurrentTime);

    let divPastInfo = document.createElement("div");
    divPastInfo.classList.add("past-info");

    let changePeriodButton = document.createElement("p");
    changePeriodButton.innerText = ". . ."
    let lastPeriodParagraph = document.createElement("p");
    lastPeriodParagraph.innerText = "Last week"
    let spanInfoTime = document.createElement("span");
    spanInfoTime.innerText = "32 hrs"

    divPastInfo.appendChild(changePeriodButton);
    divPastInfo.appendChild(lastPeriodParagraph);
    lastPeriodParagraph.appendChild(spanInfoTime);

    divCategoryCard.appendChild(divWrapper);
    divWrapper.appendChild(divCurrentInfo);
    
}