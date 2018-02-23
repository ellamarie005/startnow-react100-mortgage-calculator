import React from 'react';


export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: '0.00'
    };
    this.updateStateValues = this.updateStateValues.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateStateValues(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });

    //update state values
    //use event binding
    // add an onChange event on HTML
  }

  calculate() {
    var p = this.state.balance;
    var r = this.state.rate / 100 / 12;
    var n = this.state.term * 12;
    var numerator = r * Math.pow((1 + r), n);
    var denominator = Math.pow((1 + r), n) - 1;
    this.state.output = (p * (numerator / denominator)).toFixed(2);

    console.log(this.state.output);
    //set state to bind the result to the "output" div
  }


  render() {
    return (
      <div className='container'>
        {/* your JSX goes here */}
        <form className="form-horizontal" onClick={this.updateStateValues}>
          <h1>Mortgage Calculator</h1>
          <div className="form-group">
            <label htmlFor="loanBalance" className="col-sm-2 control-label">Loan Balance</label>
            <div className="col-sm-10">
              <input name="balance" type="number" value={this.state.balance} onChange={this.updateStateValues}></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="interestRate" className="col-sm-2 control-label">Interest Rate (%)</label>
            <div className="col-sm-10">
              <input name="rate" type="number" step="0.01" value={this.state.rate} onChange={this.updateStateValues}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="monthlyPayment">
                <label>Loan Term(years)</label>
                <div>
                  <select name="term" value={this.state.term} onChange={this.updateStateValues}>
                    <option value="15">15</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button name="submit" onClick={this.calculate}>Calculate</button>
            </div>
          </div>
        </form>
        <div name="output" id="output" onChange={this.updateStateValues}>
        ${this.state.output} is your payment!
        </div>
      </div>
    );
  }
}
