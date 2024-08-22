import React from 'react';
import './featured.css';
import useFetch from '../../hooks/useFetch.js';

function Featured() {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=mumbai,pune,nashik");

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : error ? (
        <p>Error loading data</p>
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt="Property in Mumbai"
              className="featuredImage"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/720x405/292260574.webp?k=efc8e339ea66514c3b64c5bc891f1608d22a40eb23b853bc0c9ecb93c541ef10&o="
              alt="Property in Pune"
              className="featuredImage"
            />
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/97644401.webp?k=22466a369409724fbe8048f538bc8f218f123494d43ebd449cb848b9b895a2cb&o="
              alt="Property in Nashik"
              className="featuredImage"
            />
            <div className="featuredTitles">
              <h1>Nashik</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
