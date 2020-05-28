import React, { Component } from 'react';
import './App.css';

import Conversor from './components/Conversor'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
         value: 'USD', 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Escolha a moeda:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="USD">	USD	</option>          
          <option value="LTL">	LTL	</option>
          <option value="EUR">	EUR	</option>
          <option value="MOP">	MOP	</option>
          <option value="MKD">	MKD	</option>
          <option value="MGA">	MGA	</option>
          <option value="MYR">	MYR	</option>
          <option value="MWK">	MWK	</option>
          <option value="MVR">	MVR	</option>
          <option value="XOF">	XOF	</option>
          <option value="MTL">	MTL	</option>
          <option value="MAD">	MAD	</option>
          <option value="MRO">	MRO	</option>
          <option value="MXN">	MXN	</option>
          <option value="MDL">	MDL	</option>
          <option value="MNT">	MNT	</option>
          <option value="XCD">	XCD	</option>
          <option value="MZN">	MZN	</option>
          <option value="ZAR">	ZAR	</option>
          <option value="AUD">	AUD	</option>
          <option value="NPR">	NPR	</option>
          <option value="NIO">	NIO	</option>
          <option value="NGN">	NGN	</option>
          <option value="NZD">	NZD	</option>
          <option value="NOK">	NOK	</option>
          <option value="XPF">	XPF	</option>
          <option value="OMR">	OMR	</option>
          <option value="UGX">	UGX	</option>
          <option value="UZS">	UZS	</option>
          <option value="PKR">	PKR	</option>
          <option value="PAB">	PAB	</option>
          <option value="PGK">	PGK	</option>
          <option value="PYG">	PYG	</option>
          <option value="PEN">	PEN	</option>
          <option value="PHP">	PHP	</option>
          <option value="PLN">	PLN	</option>
          <option value="QAR">	QAR	</option>
          <option value="RON">	RON	</option>
          <option value="GBP">	GBP	</option>
          <option value="RUB">	RUB	</option>
          <option value="RWF">	RWF	</option>
          <option value="SHP">	SHP	</option>
          <option value="SBD">	SBD	</option>
          <option value="WST">	WST	</option>
          <option value="STD">	STD	</option>
          <option value="RSD">	RSD	</option>
          <option value="SCR">	SCR	</option>
          <option value="SLL">	SLL	</option>
          <option value="SGD">	SGD	</option>
          <option value="SKK">	SKK	</option>
          <option value="SOS">	SOS	</option>
          <option value="SDG">	SDG	</option>
          <option value="LKR">	LKR	</option>
          <option value="SEK">	SEK	</option>
          <option value="CHF">	CHF	</option>
          <option value="DTH">	DTH	</option>
          <option value="SZL">	SZL	</option>
          <option value="SYP">	SYP	</option>
          <option value="TJS">	TJS	</option>
          <option value="TWD">	TWD	</option>
          <option value="TZS">	TZS	</option>
          <option value="XAF">	XAF	</option>
          <option value="CZK">	CZK	</option>
          <option value="THB">	THB	</option>
          <option value="TOP">	TOP	</option>
          <option value="TTD">	TTD	</option>
          <option value="TND">	TND	</option>
          <option value="TMM">	TMM	</option>
          <option value="UAH">	UAH	</option>
          <option value="UYU">	UYU	</option>
          <option value="VUV">	VUV	</option>
          <option value="VEF">	VEF	</option>
          <option value="VND">	VND	</option>
          <option value="YER">	YER	</option>
          <option value="ZWD">	ZWD	</option>

        </select>
    <div className="App">
     <Conversor moedaA={this.state.value}moedaB="BRL"></Conversor>
    </div>
      </label>
     
    </form>
    
);
    
  }
}
