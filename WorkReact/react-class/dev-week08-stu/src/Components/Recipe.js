// recipe-app/src/Components/Recipe.
import React from "react";


const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, i) =>
              <li key={i}>{ingredient.name}</li>
            )}
        </ul>
        {/* <section className="instructions">
            <h3>조리 절차</h3>
            {steps.map((step, i) =>
             <p key={i}>{step}</p>
            )}
        </section>    */}
    </section>



// const Recipe = (props) =>
//     <section id={props.name.toLowerCase().replace(/ /g, '-')}>
//         <h1>{props.name}</h1>
//         <ul className="ingredients">
//             {props.ingredients.map((ingredient) =>
//                 <li> {ingredient.name}</li>
//             )}
//         </ul>
//         <section className="instructions">
//             <h2>조리 절차</h2>
//             {props.steps.map((step) =>
//                 <p>           </p>
//             )}
//         </section>   
//     </section>


export default Recipe;
