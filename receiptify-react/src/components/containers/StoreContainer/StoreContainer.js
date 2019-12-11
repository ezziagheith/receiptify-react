import React, {Component} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'
import './StoreContainer.css'

import EmptyTest from '../EmptyTest/EmptyTest'
import ReceiptModalContainer from '../ReceiptModalContainer/ReceiptModalContainer'

class StoreContainer extends Component {
    state = {
        storeName: '',
        logoImage: '',
        receipts: [],
        storeList: [],
        storeInfo: {},
        storeId: ''
    }

    componentDidMount () {
        this.findStores()
    }

    findStores() {
        axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/stores`)
        .then((res) => {
            console.log(res.data.data)
            this.setState({
                storeList: res.data.data
            }) 
        })
        .catch((err) => console.log(err))
    }


    // when on click, make api call, add ID to api endpoint

    // handleClick = (event) => {
    //     event.preventDefault();
    //     axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/stores/id/${this.state.name}`
    //     )
    //     .then((res) => {
    //         console.log(res)
    //         this.setState({
    //             storeInfo: res.data.data
    //         })
    //     })
    //     .catch((err) => console.log(err))
    // }

    // findOneStore() {
    //     axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/stores/id/:id`)
    //     .then((res) => {
    //         this.setState({

    //         })
    //     })
    // }


    render() {
        const stores = this.state.storeList.map(store => {
            return (
                <Link to={`stores/id/${store._id}`}>
                <div key={store._id}>
                    <Link to={`/stores/id/${store._id}`}><h3 id="vertical-store-name">{store.name}</h3>
                    <img className="logo-image" id="vertical-store-logo" src={store.logoImage} alt="Store Logo" />
                    </Link>
                </div>
                </Link>
            
            )
        })
        if(this.props.match.params.id){
            console.log(this.props.match.params.id)
        }
        return (
            <div>
                <h1 id="the-word-stores">Stores</h1>
                <div className="vertical-menu">
                <div className="border-around">{stores}</div>
                </div>
                <div>
                    {this.props.match.params.id && <EmptyTest id={this.props.match.params.id}/>}
                </div>
                <ReceiptModalContainer 
                storeList={ this.state.storeList } />
            </div>
            
        )
    }
}



export default StoreContainer;