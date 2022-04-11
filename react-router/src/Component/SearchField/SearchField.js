import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';
import './SearchField.css';

const SearchField = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [searchText])
    const serachFood = e => {
        // console.log(e.target.value);
        setSearchText(e.target.value);
    }
    return (
        <div>
        <h2>Find the Food you want</h2>
            <input onChange={serachFood} type="text" />
            <h3>Result Found: {meals.length}</h3>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default SearchField;