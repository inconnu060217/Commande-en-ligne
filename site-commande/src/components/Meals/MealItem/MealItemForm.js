import React from 'react';
import Input from '../../Ui/Input';
import './MealItemForm.css';

function MealItemForm() {
    return (
        <form className='form'>
            <Input
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Ajouter</button>
        </form>
    )
}

export default MealItemForm;
