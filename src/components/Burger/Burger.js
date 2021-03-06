import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
const burger = (props) =>{
    const transformedIngredients = Object.keys(props.ingredients)
                                    .map((igKey)=>{
                                        console.log(Array(props.ingredients[igKey]));
                                        return[...Array(props.ingredients[igKey])]
                                        .map((_,i)=>{
                                            return <BurgerIngredient key= {igKey + i} type={igKey} />
                                        });
                                    });
    return (
        <div className = {classes.Burger}>
           
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger;