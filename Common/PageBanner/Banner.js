import React from 'react';
import pageBanner from '../Images/pageBanner.png'
import './banner.css'

export default function Banner() {
  return (
    <div className="row my-5">
        <div className="col-md-12">
          <div className="pageBanner">
            <img
              src={pageBanner} alt='Page Banner'
              style={{ width: '100%' }}
            />
          </div>
          <div className="bannerText">
            <h1>Summer<br/> Vacation</h1>
            <p className='my-5'>All Discount Upto 60%</p>
          </div>
        </div>
      </div>
  )
}
