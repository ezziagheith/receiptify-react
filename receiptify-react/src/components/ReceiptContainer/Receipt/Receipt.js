import React from 'react';

import './Receipt.css'

const Receipt = ({ receipt, toggleEditForm, handleDeleteSubmit }) => {
    console.log(receipt.store)
    return (
        <div className="receipt">
            <div className="receipt-info">
                <h3 className="store-name-on-profile">{receipt.store.name}</h3>
                <p className="body-of-profile">{receipt.body}</p>
                <img className="zoom" width="300" height="300" src={receipt.receiptImage} alt="Receipt Images"/>
            </div>
            <div>
                <button className="edit-button" onClick={() => toggleEditForm(receipt)}>Edit</button>
                <button className="delete-button" onClick={(event) => handleDeleteSubmit(event, receipt)}>Delete</button>
            </div>
        </div>
    
    );
}

export default Receipt;
