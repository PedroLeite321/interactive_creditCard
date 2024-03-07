//Import for react libraries
import React, { useState } from 'react';

// Import for styles
import '../styles/phone.main.view.css'
import '../styles/desktop.view.css'

// Import for scripts ( quite sure they won't be needed )

const HelloWorld: React.FC = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [dateMM, setDateMM] = useState('');
  const [dateYY, setDateYY] = useState('');
  const [cvc, setCvc] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setName(event.target.value);
  }
  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  }
  const handleDateMMChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setDateMM(event.target.value);
  }
  const handleDateYYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateYY(event.target.value);
  }
  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  }
  

  return (
    <div>

      <div className="top_side">

        <div className="credit_card back_card">~

          <div className='black_bar'>

          </div>

          <div className="credit_secure_code">
            <span>{cvc === '' ? '000' : cvc}</span>
          </div>

        </div>
        
        <div className="credit_card front_card">

          <div className="person__face">
              
          </div>

          <div className="card__number__area">

              {cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}

          </div>

          <div className="person__name_and_cvc__area">

            <p>{name === '' ? 'JANE APPLESEED' : name}</p>
            <p>{ dateYY === '' ? 0 : dateYY }/{ dateMM === '' ? 0 : dateMM }</p>

          </div>
          
        </div>

      </div>
      <div className="bottom_side">
       
        <div className='input__area'>

            <label className='card_owner' htmlFor="">CARDHOLDER NAME</label>

            <input id='card_owner' className='credit_card_input' type="text" placeholder='e.g Jane Apleassed' onChange={handleNameChange}/>

            <label className='credit_number' htmlFor="credit_card_number">CARD NUMBER</label>

            <input id='credit_card_number' className='credit_card_input' type="number" placeholder='e,g 1234 5678 9123 0000' onChange={handleCardNumberChange}/>

            <label className='cd_month' htmlFor="credit_date">EXP.DATE (MM/YY)</label>

            <input id='credit_date' className='credit_card_input' type='number' placeholder='MM' onChange={handleDateMMChange}/>

            <input className='credit_card_input' type='number' placeholder='YY' onChange={handleDateYYChange}/>

            <label className='cd__security' htmlFor="credit_security_number"></label>

            <input id='credit_security_number' className='credit_card_input' type='text' placeholder='CVC' onChange={handleCvcChange}/>

            <input type="button" value="Confirm" className="confirm__btn" />
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
