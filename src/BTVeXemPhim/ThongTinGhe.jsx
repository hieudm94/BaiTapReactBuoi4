import React, { Component } from 'react'

export default class ThongTinGhe extends Component {
  render() {
    return (
      <div >
        <div className='pt-5'>
          <button className='gheDuocChon'> </button><span>Ghế Đã Đặt</span><br />
          <button className='gheDangChon mt-3'> </button><span>Ghế Đã Đặt</span><br />
          <button className='ghe  mt-3'> </button><span>Ghế Đã Đặt</span><br />
        </div>
        <table className="table mt-5" border="2">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá </th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>

      </div>
    )
  }
}
