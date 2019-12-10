import React from 'react';

const Receipt = ({ receipt, toggleEditForm }) => {
    return (
        <div className="receipt">
            <div className="receipt-info">
                <h1>{receipt.store}</h1>
                <p>{receipt.body}</p>
            </div>
            <div>
                <button onClick={() => toggleEditForm(receipt)}>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
}

export default Receipt;
