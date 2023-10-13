import createCategoryCard from "./createCategoryCard.js";

const timePeriods = document.querySelectorAll("input[type=radio]");
// let period = "daily";

for(var i = 0; i < timePeriods.length; i++) {
    timePeriods[i].onclick = function() {
        let period = this.id;
        loadInfo(period);
    }
}

function loadInfo(radioId) {

    const jsonData = fetch("data.json");
    jsonData.then((response)=>{
        response.json().then((data)=>{
            data.map((item) =>{
                createCategoryCard(item, radioId);
            })
        })
    })
}

loadInfo("daily");
