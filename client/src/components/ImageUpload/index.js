import React, {Component} from 'react';
import {storage} from '../../firebase';
import axios from "axios"

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      () => {
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            axios.post("/api/image", {url: url})
            .then((data) => {
              console.log("PATCH", data)
            })
            // this.setState({url});
        })
    });
  }
  componentDidMount(){
    axios.get("/api/image")
    .then(
        (data)=> {
            console.log("RESPONSE DATA", data)
            this.setState({ url: data.data.customer_pic})
        }
    )
}

  render() {
    const style = { 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div style={style}>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="profile pic" height="300" width="400"/>
      </div>
    )
  }
}

export default ImageUpload;