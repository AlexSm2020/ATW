import React from 'react';
import './Cards5.css';
import CardItem from './CardItem5';

function Cards5() {
  return (
    <div className='cards5'>
      {/* <h1 id="aref">You have our support to start your education in your dream school.</h1> */}
      <div className='cards__container5'>
        <div className='cards__wrapper5'>
          <div className='cards__items5' style={{padding:0}}   >
            <CardItem
              src='images/1.png'
              text=' ATW makes it much easier for you to find your dream school all Around The World! You have our support to start your education in your future dream school.'
              text2=' Discover How It Works...'
              title = 'We Make Your Dreams Come True'
              path="#aref"

              path='/register'
            />
          </div>

        </div>
      </div>
      

    </div>

  );
}

export default Cards5;