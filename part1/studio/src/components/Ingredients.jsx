import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = [
        "3 tablespoons mayonnaise",
        "2 cloves garlic, crushed",
        "1 teaspoon dried oregano",
        "salt and pepper to taste",
        "5 potatoes, quartered"
    ];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientsList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}