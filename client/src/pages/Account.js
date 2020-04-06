import React, {Component} from 'react';
import "../Style/account.css"
import Nav2 from "../components/Nav2";
import {storage} from '../firebase';

class Account extends Component {
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
              this.setState({url});
          })
      });
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
        <div>
            <Nav2/>
            <hr /><hr />
            <div style={style}>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br/>
                <img src={this.state.url || 'https://www.buckinghamandcompany.com.au/wp-content/uploads/2016/03/profile-placeholder.png'} alt="Uploaded images" height="200" width="200"/>
            </div>
            <section className="account-area">
                <ul className="account-content">
                    <li className="account-right">
                        <h2 className="name-title text-darkgray">Account page</h2>
                        <hr /><hr />
                        <ul className="account-content">
                            <li>
                                <br />
                                <h4>Full Name:</h4>
                                <br />
                                <input>Name here</input>
                                <br />
                                <br />
                                <h4>Email address:</h4>
                                <br />
                                <input>Address here</input>
                                <br />
                            </li>
                            <li>
                                <br />
                                <h4>Home Address:</h4>
                                <br />
                                <input>Home address here</input>
                                <br />
                            </li>
                            <li>
                                <br />
                                <h4>Phone number:</h4>
                                <br />
                                <input>Phone number here</input>
                                <br />
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            {/* <br /><br />
            <br /><br />
            <hr /><hr /> */}
            {/* <section className="favorite-area">
                <h2 className="favorite-title text-lightgray">Favorites List</h2>
                <span className="brand-cards">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Logo} alt="Card logo cap" />
                        <div className="card-body">
                            <h5 className="card-title">Toilet Paper product title</h5>
                            <p className="card-text">Company Title of toilet paper brand</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price From Walmart</li>
                            <li className="list-group-item">Price From Target</li>
                            <li className="list-group-item">Price From Amazon</li>
                        </ul>
                        <div className="card-body">
                            <a href={{ Product }} className="card-link">View item</a>
                            <a href={{ Account }} className="card-link">Remove item</a>
                        </div>
                    </div>
                </span>
            </section> */}
        </div>
    );
    }
}
export default Account;
