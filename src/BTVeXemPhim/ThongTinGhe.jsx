import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinGhe extends Component {
  render() {
    return (
      <div className='text-light' >
        <div className='pt-5'>
          <button className='gheDuocChon'> </button><span>Ghế Đã Đặt</span><br />
          <button className='gheDangChon mt-3'> </button><span>Ghế Đã Đặt</span><br />
          <button className='ghe  mt-3'> </button><span>Ghế Đã Đặt</span><br />
        </div>
        <table className="table mt-5 text-light" border="2">
          <thead>
            <tr >
              <th>Số ghế</th>
              <th>Giá </th>
              <th></th>
            </tr>
          </thead>
    
          <tbody>
            {this.props.DSGheDangDat.map((gheDangDat,index) => { 
              return <tr key={index}>
                <td>{gheDangDat.soGhe}</td>
                <td>{gheDangDat.gia}</td>
                <td><button onClick={() => { 
                    this.props.huyGhe(gheDangDat.soGhe);
                 }}>Hủy</button></td>
              </tr>
             })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td>{this.props.DSGheDangDat.reduce((tongTien,gheDangDat,index) => { 
                  return tongTien += gheDangDat.gia;
               },0)}</td>
               <td></td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
  }
}

const mapDispatchToProps =(dispatch)=>{
  return {
    huyGhe:(soGhe) =>{
      let action = {
        type: "HUY_GHE",
        soGhe
      }
      dispatch(action)
    }
  }
}

const mapStateToProps = (rootReducer) =>{
  return {
    DSGheDangDat : rootReducer.BTDatVeXemPhim.DSGheDangDat,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ThongTinGhe)


