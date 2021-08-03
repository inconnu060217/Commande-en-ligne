import React, { Fragment} from 'react';
import SummaryMeals from './SummaryMeals';
import AvailableMeals from './AvailableMeals';

function Meals() {
    return (
        <Fragment>
            <SummaryMeals />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;
