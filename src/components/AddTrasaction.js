import React from 'react';

const AddTrasaction = () => {
    return (
        <>
            <h3>Add new Trasaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." />
                </div> 
                <div className="form-control">
                    <label htmlFor="amount">Amount
                    <br /> (negative - expense, positive - income) 
                    </label>
                    <input type="text" placeholder="Enter text..." />
                </div> 
                <button className="btn">Add Transaction</button>
 
            </form>
        </>
    );
}

export default AddTrasaction;
