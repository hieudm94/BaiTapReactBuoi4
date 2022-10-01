import React, { Component } from 'react'

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachghe.map((ghe,index) => { 
      let gheDaDat= "";
      
     })
  }

  render() {
    return (
      <div className='text-light font-weight-bold' style={{textAlign:"left",fontSize:"25px"}}> 
        {this.props.hangGhe.hang}
      </div>
    )
  }
}
