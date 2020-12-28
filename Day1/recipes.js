const newRecipe = document.getElementById("newRecipe");
const btnRecipe = document.getElementById("btnRecipe");
const btnRecipe1 = document.getElementById("btnRecipe1");


const getRecipe = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
        method: "GET",
      }).then((rpta) => {
        rpta.json().then((data) => {
          completeRecipe(data);
        });
      });

}


const completeRecipe = ({ meals = [] }) => {  
  meals.forEach((recipe) => {
    let ingredients="";
    
    div.innerHTML = `<div class="col-6 mb-5">
                    <h2 id="title-recipe">${recipe.strMeal}</h2>
                    </div>
                    <div class="col-6 mb-5">
                    <p class="text-muted border rounded-pill badge">${recipe.strCategory}</p>
                    <p class="text-muted border rounded-pill badge">${recipe.strArea}</p>
                    </div>
                    
                    <div class="col-7 mb-5">
                    <img class="img-thumbnail" src="${recipe.strMealThumb}" alt=""/>
                    </div>
                    
                    `;

    for(let i=1; i<21;i++){
                        
        let ingredient = recipe["strIngredient"+ i];
        let measure = recipe["strMeasure"+ i];
        if(ingredient!=null & ingredient!=""){
        ingredients += `<li class="list-group-item">${ingredient} - ${measure}</li>`;
        }
    }
    

    const recipeVideo = ((urlVideo) => {
        
        let res= urlVideo.split("=");
        return "https://www.youtube.com/embed/"+res[1];

    })(recipe.strYoutube);
   
    
     div.innerHTML = div.innerHTML + `<div class="col-5 mb-5">
                                    <h4>Ingredients</h4>
                                    </br>
                                    <ul class="list-group list-group-flush">`+ingredients + `</ul>
                                    </div>
                                    <div class="col-12">
                                    <h4>Instructions</h4>
                                    </br>
                                    <p class="instructions">
                                    ${recipe.strInstructions}
                                    </p>
                                    </div>
                                    <div class="col-12">
                                    <h4>Video</h4>
                                    </br>
                                    <iframe width="560" height="315" src="${recipeVideo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>`;

    newRecipe.appendChild(div);

  
    
  })
}



const div = document.createElement("div");
div.classList.add("row");


btnRecipe.onclick = (e) => {
  e.preventDefault();
  
  getRecipe();
  window.scrollTo (0 , 745);
};

btnRecipe1.onclick = (e) => {
    e.preventDefault();
    getRecipe();
  };

