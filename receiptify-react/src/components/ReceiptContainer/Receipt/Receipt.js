import React from 'react';

const Receipt = ({ receipt, toggleEditForm, handleDeleteSubmit }) => {
    console.log(receipt.store)
    return (
        <div className="receipt">
            <div className="receipt-info">
                <h1>{receipt.store.name}</h1>
                <p>{receipt.body}</p>
                <img src={receipt.receiptImage} alt="Receipt Images"/>
            </div>
            <div>
                <button onClick={() => toggleEditForm(receipt)}>edit</button>
                <button onClick={(event) => handleDeleteSubmit(event, receipt)}>delete</button>
            </div>
        </div>
    );
}

export default Receipt;
