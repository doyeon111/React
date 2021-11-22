import React from 'react';
import Recipe from './Recipe';


const Instructions = ({name, ingredients, steps}) => {
    return (
        <div>
            <section className="instructions">
            <h3>조리 절차</h3>
            {steps.map((step, i) =>
            <p key={i}>{step}</p>
            )}
        </section>   
        </div>
    );
};

export default Instructions;