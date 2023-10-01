const containerCards = document.querySelector(".container-cards")

export default function createCategoryCard(data) {
    //console.log(data);
    let backgroundImg = data.backgroundImg;
    let backgroundColor = data.color;
    let category =  data.title;
    let id = data.id;
    let currentDailyTimeInfo = data.timeframes.daily.current;
    let currentWeeklyTimeInfo = data.timeframes.weekly.current;
    let currentMonthTimeInfo = data.timeframes.monthly.current
    
    //console.log("category: " + category + ". daily: " + currentDailyTimeInfo + " . weekly: " + currentWeeklyTimeInfo + " . monthly: " + currentMonthTimeInfo);
    
    let divCategoryCard = document.createElement("div");
    divCategoryCard.classList.add("card-category");
    divCategoryCard.setAttribute("id", `card-${id}`);
    divCategoryCard.style.backgroundImage = `url('${backgroundImg}')`;
    divCategoryCard.style.backgroundColor = backgroundColor;

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
    divWrapper.appendChild(divPastInfo);
    
    containerCards.appendChild(divCategoryCard);
}