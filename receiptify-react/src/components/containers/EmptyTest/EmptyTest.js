import React, {Component} from 'react';
import axios from 'axios'
// import CityPost from '../CityPost/CityPost';
import './EmptyTest.css';

class EmptyTest extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logoImage: '',
    }
  }
   
  //get store info
  componentDidMount () {
    this.findStore()
}

findStore() {
    axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/stores/id/${this.props.id}`)
    .then((res) => {
        console.log(res.data.data)
        this.setState({
            name: res.data.data.name,
            logoImage: res.data.data.logoImage
        }) 
    })
    .catch((err) => console.log(err))
}
  render() {
    return (
        <div>
          <h1 id="stores-popup">{this.state.name}</h1>
          <img id="stores-popup2" src={this.state.logoImage} alt="Store Logo" />
        </div>
      )
  }
};


// class EmptyTest extends Component {
//   state = {
//     storeName: '',
//     logoImage: '',
//     storeInfo: {},
// }
// render() {
//   return (
//     <div>
//       {this.props.match.params.id && <EmptyTest id={this.props.match.params.id}/>}
//     </div>
//   )
// }
// }

export default EmptyTest;

