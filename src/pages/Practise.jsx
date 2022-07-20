import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Practise = () => {

    const [nutrient, setNutrient] = useState([]);

    const findNutrients = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_API_KEY}&minCarbs=10`);
        const data = await api.json();
        setNutrient(data);
        console.log(data);
    }

    useEffect(() => {
        findNutrients();
    }, [])
  return (
    <div>
      {nutrient.map((recipe) => {
        return(
            <h3>{nutrient.title}</h3>
        )
      })}
    </div>
  )
}

export default Practise
