// recipe-app/src/Components/Menu.js
import React from 'react';
import Recipe from './Recipe';
import '.././stylesheets/Menu.css';



const Menu = ({recipes, title}) => { //이렇게 해주면 굳이 앞에 props를 붙이지 않아도됨
    return (
            <article>
                <header>
                    {/* <h1>맛있는 조리법</h1> */}
                    <h1>{title}</h1>
                </header>
                <div className="recipes">
                    { 
                      recipes.map((recipe, i) =>
                        <Recipe key={i} {...recipe}
                        />)
                    }
                </div>
            </article>
    )
};


// const Menu = (props) => {
//     return (
//             <article>
//                 <header>
//                     {/* <h1>맛있는 조리법</h1> */}
//                     <h1>{props.title}</h1>
//                 </header>
//                 <div className="recipes">
//                     { 
//                       props.recipes.map((recipe, i) =>
//                         <Recipe key={i} name={recipe.name} 
//                                 ingredients={recipe.ingredients} 
//                                 steps={recipe.steps}
//                         />)
//                     }
//                 </div>
//             </article>
//     )
// };

export default Menu;