import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Dropdown} from 'react-bootstrap';
// import Upload from '../../../upload/Upload'

import './ReceiptModal.css'



 function ReceiptModal (props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        
        <div>
            <Button className="create-button" id="create-receipt-btn" variant="warning" onClick={handleShow}>Add Receipt</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Receipt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">                     
                        <form onSubmit={props.handleSubmit}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Stores
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {props.storeList.map(store => <Dropdown.Item onClick = {() => props.handleClick(store._id)} href={`#/${store.name}`}>{store.name}</Dropdown.Item> )}
                                    </Dropdown.Menu>
                                </Dropdown>    
                            <div className="form-group">
                                <label className="receipt-url" htmlFor="photoUrl">Receipt Url:</label>
                                <input className="input-box" onChange={props.handleChange} type="text" name="receiptImage" />
                            </div>
                            <div className="form-group description-box">
                                <label htmlFor="photoUrl">Description:</label>
                                <textarea onChange={ props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.post} />
                            </div>
                            <button id="save-button" onClick={handleClose} className="btn btn-primary float-right" type="submit">Add Receipt</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );

    }

export default ReceiptModal;