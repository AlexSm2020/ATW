import React from 'react';
import { Link } from 'react-router-dom';
import './Cards3.css';

function CardItem3(props) {
  return (
    <>
<section>
  <div className="container3">
    <div className="card" style={{borderStyle:"none"}}>
      <div className="row">
        <div className="col-md-6">
          <div className="card-block3">
            <h4 className="card-title3"  style={{ fontWeight:"bold", fontSize:50, color: "white"}}>{props.title}</h4>
            <p className="card-text1"  style={{fontSize:20, color: "white"}}>{props.text1}</p>
            <p className="card-text2">{props.text2}</p>
            <a href={props.path} style={{fontSize:15, fontWeight:"bold", color: "#0072ff", background:"white", borderStyle:"none"}} id="aref2" className="btn btn-primary">{props.text3}</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-img-bottom">
          <img
              className='cards__item__img3'
              alt='Travel Image'
              src={props.src}
            />
          </div>
        </div>


        <div className="row" style={{marginTop:90, borderRadius:"20px", color:"blue"}}>
          <div className='cards__item__img4'>
          <h2 id="aref">You have our support to start your education in your future dream school.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default CardItem3;
