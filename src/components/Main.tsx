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
        <div className="credit_card back_card">
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
            <p>{name === '' ? 'Pedro Kauã de Barros Leite' : name}</p>
            <p>{ dateYY === '' ? 0 : dateYY }/{ dateMM === '' ? 0 : dateMM }</p>
          </div>
          
        </div>

      </div>
      <div className="bottom_side">
        <div>
            <input className='credit_card_input' type="text" placeholder='e.g Jane Apleassed' onChange={handleNameChange}/>
            <input className='credit_card_input' type="number" placeholder='e,g 1234 5678 9123 0000' onChange={handleCardNumberChange}/>
        </div>
        <div>
            <input className='credit_card_input' type='number' placeholder='MM' onChange={handleDateMMChange}/>
            <input className='credit_card_input' type='number' placeholder='YY' onChange={handleDateYYChange}/>
            <input className='credit_card_input' type='text' placeholder='CVC' onChange={handleCvcChange}/>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
