import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Dropdown} from 'react-bootstrap';
import Upload from '../../../upload/Upload'

import './ReceiptModal.css'

// class ReceiptModal extends Component {

 function ReceiptModal (props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
 
    // render() {
    return (
        
        // <h1>HIHIHIHI</h1>
        <div>
            <Button className="create-button" id="create-receipt-btn" variant="warning" onClick={handleShow}>Create Receipt</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Receipt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">                     
                        <form onSubmit={props.handleSubmit}>
                            {/* <div className="form-group">
                                <label htmlFor="title">{props.storeName}</label>
                                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="title" name="title" value={props.post.name} />
                            </div> */}
                            {/* <div className="dropdown">
                            <button className="dropbtn">Store</button>
                            <div className="dropdown-content">
                                {props.storeList.map(store=>{
                                    return <div id= { store._id}>{store.name }</div>
                                })}
                            </div>
                        </div> */}
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {/* <Dropdown.Item href="#/action-1"> */}
                                        {props.storeList.map(store => <Dropdown.Item onClick = {() => props.handleClick(store._id)} href={`#/${store.name}`}>{store.name}</Dropdown.Item> )}
                                            
                                         {/* return <div id= { store._id}>{store.name }</div> */}
                                
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </Dropdown>    
                            <div className="form-group">
                                <label htmlFor="photoUrl">Receipt Url</label>
                                <input onChange={props.handleChange} type="text" name="receiptImage" />
                                {/* <div className="App">
                                    <div className="Card">
                                        <Upload />
                                    </div>
                                </div> */}
                                {/* <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="photoUrl" name="photoUrl" value={this.props.post.photoUrl} /> */}
                            </div>
                            <div className="form-group description-box">
                                <label htmlFor="photoUrl">Description</label>
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