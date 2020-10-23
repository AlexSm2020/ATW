import React from 'react';
import { Link } from 'react-router-dom';

function CardItem5(props) {
  return (
    <>
      <div className='cards__item5'>
        <div className='cards__item__link5' to={props.path}>

          <div className='cards__item__info5'>
            <h1 className='cards__item__title5'>{props.title}</h1>
            <h5 className='cards__item__text5'>{props.text}</h5>
            <a href={props.path} className="btn btn-primary" style={{borderRadius:10, padding:15, color: "#0072ff", fontWeight:"bold", backgroundColor:"white"}}>{props.text2}</a>
          </div>
          <figure className='cards__item__pic-wrap5' >
            <img
              className='cards__item__img5'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default CardItem5;