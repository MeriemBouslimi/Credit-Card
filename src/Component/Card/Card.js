import React from 'react';
import '../Card/Card.css';
import logo from './logo.png'
import master from './master-card.jpeg'

function Card() {
    return (
        <div className='card-container'>
            <h1 className='title'>CREDIT CARD</h1>
            <div><img className="Puce" src={logo} alt="puce" /></div>
            <div className="info-card">
            <div className="numbe-info">
                <h2 className="Number-card">7253 3256 7895 1245</h2> 
                <div className="information">
                    <div>
                    <p>5422</p>
                    <p>CARDHOLDER</p>
                    </div>
                    <div>
                    <p className="month year">MONTH/YEAR</p>
                    <div className="date">
                    <p className="month">VALID <br/>THRU></p>
                    <p className="year-number">11/50</p>
                    </div>
                    </div>
                </div>
            </div>

                <img className="master" src={master} allt="master-card" />
                </div>

        </div>
    );
}

export default Card;
