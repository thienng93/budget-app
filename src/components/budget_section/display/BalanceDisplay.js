import React from 'react';
import { BudgetConsumer } from '../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cardBodyStyle = {
    minHeight: '80px',
}
const BalanceDisplay = () => {
    return (
        <BudgetConsumer>
            {value => {
                const totalExpense = value.expenses.length > 0 ? (
                    value.expenses.reduce((acc, curr) => {
                        acc += parseInt(curr.amount)
                        return acc
                    }, 0)) : 0;
                    return (
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">Budget</div>
                                    <div className="card-body" style={cardBodyStyle}>
                                        <h5 className="text-center card-title">{value.budget}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">Expenses</div>
                                    <div className="card-body">                                                    
                                        <h5 className="text-center card-title">{totalExpense}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">Balance</div>
                                    <div className="card-body">
                                        <h5 className="text-center card-title">{value.budget - totalExpense}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }}
        
        </BudgetConsumer>
    )
}

export default BalanceDisplay
