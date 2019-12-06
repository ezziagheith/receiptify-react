import React, {Component} from 'react'
import axios from 'axios'

import './StoreContainer.css'

class StoreContainer extends Component {
    state = {
        storeName: '',
        logoImage: '',
        receipts: [],
        storeList: []
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



    render() {
        const stores = this.state.storeList.map(store => {
            return (
                <div  key={store._id}>
                    <h3>{store.name}</h3>
                    <img className="logo-image" src={store.logoImage} alt="Store Logo" />
                </div>
            )
        })

        return (
            <div>
                {stores}
            </div>
        )
    }
}



export default StoreContainer;