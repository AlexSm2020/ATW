import React from 'react';
import './Cards2.css';
import CardItem from './CardItem2';

function Cards2() {
  return (
    <div className='cards2'>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'   >
            <CardItem
              src='images/students.jpg'
              text=' No worries... We will send you all the required information regarding your registration process and orientation.'
              label='Welcome to School'
              path='/register'
            />
            <CardItem
              src='images/scholarship.png'
              text='Our professional consultants will help you to find what fits you and you future major!                            '
              label='Looking for scholarship?'
              path='/services'
            />
            <CardItem
              src='images/move.jpg'
              text='We understand how hard it is to start your life in a new country. We may able to find a temporary place to live.'
              label='Free accommodation'
              path='/services'
            />
          </ul>
        </div>
      </div>
      

    </div>

 
    



  );
}

export default Cards2;
