import React, { Component } from 'react';
import Profile from '../../Profile/Profile';
import ReceiptContainer from '../../ReceiptContainer/ReceiptContainer'
// import ProfilePostsContainer from '../ProfilePostsContainser/ProfilePostsContainer';
import axios from 'axios';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            firstName: '',
            lastName: '',
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
    }  

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/users/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             this.setState({
                 profile: res.data.data,
                 firstName: res.data.data.firstName,
                 lastName: res.data.data.lastName,
             });
         })
         .catch((err) => console.log(err));
    }


    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        if (localStorage.getItem('uid')) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <Profile 
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            />
                        </div>
                        <div>
                            <ReceiptContainer currentUser={localStorage.getItem('uid')}/>
                            {/* <ProfilePostsContainer /> */}
                        </div>
                    </div>
                </div>
            )            
        } else {
            return (
                <>
                Please register or login to access to your profile.
                </>
            )
        };
    };
};

export default ProfileContainer;