import React, { Component } from 'react';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: [],
          rates: null,
        };
      }
    
      componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?symbols=JPY,KRW")
          .then(res => res.json())
          .then(
            (result) => {
                console.log('result',result);
              this.setState({
                isLoaded: true,
                rates: result.rates
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, rates } = this.state;
        console.log('rates',rates);
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {/* {rates.map(rate => (
                <li key={rate.name}>
                  {rate.name} {rate.price}
                </li>
              ))} */}

                <li key='KRW'>
                  {rates.KRW}
                </li>
                <li key='JPY'>
                  {rates.JPY}
                </li>

            </ul>
          );
        }
      }
  }

export default Currency;