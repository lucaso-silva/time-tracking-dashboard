import createCategoryCard from "./createCategoryCard.js";

const jsonData = fetch("data.json");
jsonData.then((response)=>{
    response.json().then((data)=>{
        data.map((item) =>{
            createCategoryCard(item);
        })
    })
})