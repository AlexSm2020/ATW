import React from 'react';
import './Cards3.css';
import CardItem from './CardItem3';

function Cards3() {
  return (
    <div className='cards3'>
      <div className='cards__container3'>
        <div className='cards__wrapper3'>
          <ul className='cards__items3'   >
            <CardItem
              title='We Make Your Dreams Come True'
              path="#aref"
              text1=' ATW makes it much easier for you to find your dream school all Around The World!'
              text2=' '
              text3=' Discover How It Works...'
              src='images/1.png'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards3;
