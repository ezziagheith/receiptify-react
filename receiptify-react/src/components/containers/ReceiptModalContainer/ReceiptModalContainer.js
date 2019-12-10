import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ReceiptModal from '../EmptyTest/ReceiptModal'
import axios from 'axios';


class ReceiptModalContainer extends Component {
    state = {
        storeName: '',
        logoImage: '',
        body: '',
        receipts: [],
        storeList: [],
        storeInfo: {},
        currentUser: '',
        user: '',
        receiptImage: '',
        storeId: '',

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            // body: this.props.body
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const currentUser = localStorage.getItem('uid')
        axios.post(`${process.env.REACT_APP_API_URL_LOCAL}/receipts/${currentUser}/${this.state.storeId}`,  this.state)
        .then((res) => {
            this.props.history.push('/profile')
        })
        .catch((err) => console.log(err));
    }

    handleClick = (id) => {
        this.setState({
            storeId: id
        })        
        console.log(id)
    }

    render() {
        return (
            <ReceiptModal 
            storeId={this.state.storeId}
            storeName={this.state.storeName} 
            storeList={ this.props.storeList } 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            body={ this.state.body }
            handleClick={this.handleClick}
            />
            
        )
    }
}

export default withRouter(ReceiptModalContainer);