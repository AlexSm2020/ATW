import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 id="aref">You have our support to start your education in your dream school.</h1>
      <div className='cards__container'>
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
        </div>
      </div>
      

    </div>

 
    



  );
}

export default Cards;
