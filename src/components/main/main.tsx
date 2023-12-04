import React, { Component } from 'react'
import './main.css';
import Header from '../header/header';



export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Header/>
      </div>
    )
  }
}

export default Main