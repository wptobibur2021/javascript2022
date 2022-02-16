searchBTN = () =>{
    const searchInput = document.getElementById('searchText');
    const searchText = searchInput.value
    searchInput.value = ''
    //console.log('Search Text: ', searchText)
    if(searchText){
        const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        console.log('API URL: ', apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then(res => displayFood(res.meals))
    }else{
        alert('Please type something, thank you')
    }
}
/* Show All Product Display Function Declaration */
allProduct = () =>{
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    console.log('API URL: ', apiURL)
    fetch(apiURL)
        .then(res => res.json())
        .then(res => displayFood(res.meals))
}
allProduct()


/* Display Function Declaration */

displayFood = (foods) =>{
    const rootDiv = document.getElementById('searchResult')
    /* Clear Previous Data */
    rootDiv.innerHTML = ''
    //rootDiv.textContent = ''

    if(foods){
        foods.forEach(food => {
            console.log('Single Food: ', food)
            const parentDiv = document.createElement('div')
            parentDiv.classList.add('col-md-3', 'mb-3')
            parentDiv.innerHTML = `
            <div class="card">
                <img src='${food.strMealThumb}' class="card-img-top" alt="${food.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0, 50)}...<a target="_blank" class="card-text" href="${food.strSource}">More</a></p>
                     <p class="card-text">Tags: ${food.strTags}</p>
                    <a href="${food.strYoutube}" target="_blank" class="btn btn-primary">Video</a>
                </div>
            </div>
        `
            rootDiv.appendChild(parentDiv)
        })
    }else{
        const divCreate = document.createElement('div')
        divCreate.classList.add('col-md-12', 'p-5')
        divCreate.innerHTML = `
            <h1 class="card-header text-center">Not Found your like product</h1>
        `
        rootDiv.appendChild(divCreate)
    }

}