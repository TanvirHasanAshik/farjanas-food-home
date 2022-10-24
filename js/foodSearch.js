/* Search food form input value */
const searchFood = () => {
    const foodName = document.getElementById('food-input-field');
    const foodInputValue = foodName.value.toLowerCase();
    const allFoods = document.getElementById('all-foods');
    allFoods.innerHTML = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInputValue}`;

    if (foodName.value != '') {
        fetch(url)
            .then(res => res.json())
            .then(data => showFoodResult(data, foodInputValue));

    }
    foodName.value = ''
}

/* Show search all food */
const showFoodResult = (foodData, foodName) => {
    const allFoods = document.getElementById('all-foods');
    const totalItemOfFoods = foodData.meals.length;
    document.getElementById('total-search-result').innerText = `Total ${foodName} Items: ${totalItemOfFoods}`;

    foodData.meals.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="singleFoodLoad(${food.idMeal})" class="card h-100">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `
        allFoods.appendChild(div)
    });
    // console.log(food);
}

const singleFoodLoad = foodId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
        .then((response) => response.json())
        .then(data => detailsSingleFood(data.meals[0]));

}

const detailsSingleFood = (singleFood) => {
    const singleFoodDetails = document.getElementById('single-food-details');
    singleFoodDetails.innerHTML = `
        <div class="card">
            <img src="${singleFood.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Food Name: ${singleFood.strMeal}</h5>
                <h5 class="card-title">Food Category: ${singleFood.strCategory}</h5>
                <h5 class="card-title">Area: ${singleFood.strArea}</h5>
                <p class="card-text">${singleFood.strInstructions.slice(0, 150)}</p>
                <a href="${singleFood.strYoutube}" class="btn btn-primary">See video</a>
            </div>
        </div>
    `
    console.log(singleFood);

}


/* const errorThrough = (input) => {
    try {
        if(input != NaN ) throw "Please Enter a String Value"
    } catch (error) {
        
    }
} */