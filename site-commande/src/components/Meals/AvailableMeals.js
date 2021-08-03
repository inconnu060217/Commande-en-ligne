import React from 'react';
import './AvailableMeals.css';
import MealItem from './MealItem/MealItem';
import Card from '../Ui/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

function AvailableMeals() {

    return (
        <section className="meals">
            <Card>
                {
                    DUMMY_MEALS.map((meals) =>{
                        return (
                            <ul>
                                <MealItem
                                    key={meals.id}
                                    name={meals.name}
                                    description={meals.description}
                                    price={meals.price}
                                />
                            </ul>
                        )
                    })
                }
            </Card>
        </section>
    )
}

export default AvailableMeals;
