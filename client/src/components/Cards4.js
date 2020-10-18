import React from 'react';
import './Cards4.css';
import CardItem from './CardItem4';

function Cards4() {
  return (
    <div className='cards'>
      {/* <h1 id="aref">You have our support to start your education in your dream school.</h1> */}
      <div className='cards__container14'>
        <div className='cards__wrapper'>
          <ul className='cards__items'   >
            <CardItem
              src='images/register.png'
              text='Tell us about your background, major, future plan, and where do you prefer to study. You can make as many applications as you want.'
              label='Step 1 = Register today'
              path='/register'
            />
            <CardItem
              src='images/uni2.png'
              text='Our experts will prepar a list of universities that matches your desires and qualifications. Then you will choose which ones you are intersted to apply!'
              label='Step 2 = Review and apply '
              path='/services'
            />
          </ul>

        </div>
      </div>
      

    </div>

  );
}

export default Cards4;
