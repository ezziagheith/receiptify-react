import React, { Component } from 'react';
import axios from 'axios';

import Receipt from './Receipt/Receipt';
import EditForm from './EditForm/EditForm';

import './ReceiptContainer.css'

class ReceiptContainer extends Component {
    constructor(props){
        super(props);
    }
    state = {
        receipts: [],
        editMode: false,
        editReceipt: null,
        store: ''
    };

    fetchReceipts = () => {
        const userId = this.props.currentUser;
        axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/receipts/${userId}/receipts`)
            .then((res) => {
                console.log(res)
                this.setState({
                    receipts: res.data.receipts,
                })
            })
            .catch((err) => console.log(err));
    }

    // fetchStoreInfo = () => {
    //     axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/store/${this}`)
    //     .then((res) => {
    //         console.log(res)
    //         this.setState({
    //             store: 
    //         })
    //     })
    //     .catch((err) => console.log(err));
    // }

    toggleEditForm = (receipt) => {
        this.setState(prevState => ({
            editMode: !prevState.editMode,
            editReceipt: !prevState.editMode ? receipt : null,
        }));
    }

    handleEditSubmit = (e, updated) => {
        console.log('edit');
        e.preventDefault();
        const receiptId = updated._id;
        axios.put(
            `${process.env.REACT_APP_API_URL_LOCAL}/receipts/${receiptId}`,
            updated
            )
            .then((res) => {
                console.log(res);
                const edited = res.data.data;
                const newReceipts = [...this.state.receipts];
                const index = newReceipts.findIndex(receipt => receipt._id === edited._id);
                newReceipts[index] = edited;
                this.setState({
                    receipts: newReceipts,
                });
            })
            .catch((err) => console.log(err));
        this.toggleEditForm(null);
    }

    handleDeleteSubmit = (event, deleted) => {
        event.preventDefault();
        const receiptId = deleted._id
        axios.delete(`${process.env.REACT_APP_API_URL_LOCAL}/receipts/${receiptId}`)
        .then((res) => {
            this.setState({
                receipts: this.state.receipts.filter(receipt => receipt._id !== deleted._id)
            })
        })
        .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.fetchReceipts();
    } 

    
    render() {
        return (
            <div>
                <h2 className="word-receipts-profile">Receipts:</h2>
                {this.state.editMode
                    ?
                    <EditForm receipt={this.state.editReceipt} handleEditSubmit={this.handleEditSubmit} />
                    :
                    this.state.receipts.map(receipt => {
                        return <Receipt key={receipt._id} receipt={receipt} toggleEditForm={this.toggleEditForm} handleDeleteSubmit={this.handleDeleteSubmit}/>
                    })
                }
            </div>
        );
    }
}

export default ReceiptContainer;
