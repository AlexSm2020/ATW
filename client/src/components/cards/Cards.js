import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' style={{ paddingTop:0}}>
      {/* <h1 id="aref">You have our support to start your education in your dream school.</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper1'>
          <ul className='cards__items'>
            <CardItem
              src='images/apply.jpg'
              text='We will apply for your desired options in the list with high chance of getting addmission.'
              label='Step 3 = Get admissions'
              path='/services'
            />
            <CardItem
              src='images/visa.jpg'
              text='If you need to get a visa, our professional consultants are here to help you.'
              label='Step 4 = Get your Visa'
              path='/products'
            />
            <CardItem
              src='images/travel.jpg'
              text='Congradulations! you are accepted for your dream school and got your visa. It is the time to book a ticket!   '
              label='Step 5 = Buy a ticket!'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'   >
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

export default Cards;
