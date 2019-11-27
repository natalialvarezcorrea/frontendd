import React, { Component } from 'react';
import './chat.css';
import axios from 'axios';

const res = axios.get('localhost:5000/hello');


class Colors extends Component {


  componentDidMount() {
    this.setState({ user: res.data })
    console.log(this.state.user)
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: ''

    }
  }

  changeUsername(e) {
    e.preventDefault();
    if (this.state.username.length) {
      this.props.setUsername(this.state.username);
    } else {
      alert('Please provide a username');
    }
  }

  changeUsername(e) {
    e.preventDefault();
    if (this.state.message.length) {
      this.props.setmessage(this.state.message);
    } else {
      alert('Please provide a message');
    }
  }

  onChange(e) {
    this.setState({
      username: e.target.value,
      message: e.target.value
    })
  }

  render() {


    return (




      <div className="animated fadeIn" >
        <div className="card">
          <div className="card-header">
            <i className="icon-bubble"></i> Chat
          </div>


          <div className="card-body windows">
            <div id="output">
              <div id="action"></div>

            </div>
          </div>
          <div>
            <input className='cl-6' type="text " id="user" placeholder="user" />
            <input className='cl-6' type="text " id="message" placeholder="message" />
            <button className=" btn-primary btn-block" id="send">send</button>
          </div>
        </div>

      </div>

    );
  }
}


export default Colors;
