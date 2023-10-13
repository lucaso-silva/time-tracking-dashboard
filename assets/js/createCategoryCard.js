const containerCards = document.querySelector(".container-cards")

export default function createCategoryCard(data, period) {
    
    let timePeriod = period;
    let backgroundImg = data.backgroundImg;
    let backgroundColor = data.color;
    let category =  data.title;
    let id = data.id;
    let currentTimeInfo;

    if(timePeriod == 'daily') {
        currentTimeInfo = data.timeframes.daily.current;
    
    } else if(timePeriod == "monthly") {
        currentTimeInfo = data.timeframes.monthly.current;
    
    } else {
        currentTimeInfo = data.timeframes.weekly.current;
    }
      
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
    let changePeriodButton = document.createElement("img");
    changePeriodButton.setAttribute("src", "assets/img/three-dots.svg")
    

    divCurrentInfo.appendChild(categoryTitle);
    divCurrentInfo.appendChild(changePeriodButton);

    let divPastInfo = document.createElement("div");
    divPastInfo.classList.add("past-info");

    let infoCurrentTime = document.createElement("h4");
    infoCurrentTime.innerText = `${currentTimeInfo}hrs`
    
    let lastPeriodParagraph = document.createElement("p");
    lastPeriodParagraph.innerText = "Last week"
    let spanInfoTime = document.createElement("span");
    spanInfoTime.innerText = "32 hrs"

    divPastInfo.appendChild(infoCurrentTime);
    divPastInfo.appendChild(lastPeriodParagraph);
    lastPeriodParagraph.appendChild(spanInfoTime);

    divCategoryCard.appendChild(divWrapper);
    divWrapper.appendChild(divCurrentInfo);
    divWrapper.appendChild(divPastInfo);
    
    containerCards.appendChild(divCategoryCard);
}