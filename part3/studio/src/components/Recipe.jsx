import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://littlespoonfarm.com/apple-pie-recipe/";
   let authorPhoto = "https://littlespoonfarm.com/wp-content/uploads/2024/05/Amy.png";
   let authorName = "Amy Duska";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} width="200px"/>
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "2 9-inch pie crusts",
      "7 large Granny Smith apples (peeled, cored and sliced into 1/2 inch slices)",
      "1/2 cup granulated sugar",
      "1/2 cup light brown sugar (loosely packed)",
      "2 tablespoons all-purpose flour",
      "1 teaspoon ground cinnamon",
      "1/8 teaspoon ground nutmeg",
      "1 tablespoon lemon juice (plus the zest of half a lemon)",
      "1 large egg (lightly beaten in a small bowl for egg wash)",
      "2 tablespoons sanding sugar (optional)"
   ];

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   })
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Easy Apple Pie</h1>
            <p>This is hands down the BEST and easiest apple pie recipe! It has a tender, flaky, homemade pie crust with apple slices drenched in sugar and warm spices like cinnamon and nutmeg.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://littlespoonfarm.com/wp-content/uploads/2021/08/Homemade-Apple-Pie-Recipe-2-2.jpg" alt="A photo of apple pie" className="imageUpdates" height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
