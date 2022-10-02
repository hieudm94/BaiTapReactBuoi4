import React, { Component } from 'react'
import { connect } from 'react-redux';


class HangGhe extends Component {

  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

      let gheDaDat = " ";
      if (ghe.daDat) {
        gheDaDat = "gheDuocChon";
      }
      
      let cssGheDangDat = " ";
      let indexGheDangDat = this.props.DSGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);

      if(indexGheDangDat !== -1){
        cssGheDangDat = "gheDangChon";
      }
      
      return <button onClick={() => { 
          this.props.datGhe(ghe)
       }} className={`ghe ${gheDaDat} ${cssGheDangDat}` } key={index}>
        {ghe.soGhe}
      </button>

    })
  }
 
  renderHangDau = () => {
    if (this.props.soHangGhe === 0) {
      return this.props.hangGhe.danhSachGhe.map((hang,index) => { 
        return <button key={`hangGheDau ${index}`} className='rowNumber pl-4'>
          {hang.soGhe}
        </button>
       })

    } else {
      return <div>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
  }



  render() {
    return (
      <div className='text-light font-weight-bold' style={{ textAlign: "left", fontSize: "25px" }}>
        {this.renderHangDau()}

      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
  return {
    DSGheDangDat : rootReducer.BTDatVeXemPhim.DSGheDangDat
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    datGhe: (ghe) =>{
      dispatch({
        type: "DAT_GHE",
        ghe
      })
    }
  }
}





export default connect (mapStateToProps,mapDispatchToProps)(HangGhe)
