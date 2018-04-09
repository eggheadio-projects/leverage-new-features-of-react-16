//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: 'vienna' };
  }

  selectCity = evt => {
    const newValue = evt.target.value;
    this.setState(state => {
      if (state.city === newValue) {
        return null;
      }
      return {
        city: newValue
      };
    });
  };

  render() {
    return (
      <div>
        <button type="button" value="vienna" onClick={this.selectCity}>
          Vienna
        </button>
        <button type="button" value="paris" onClick={this.selectCity}>
          Paris
        </button>
        <City name={this.state.city} />
      </div>
    );
  }
}


// ---------------------------------------------------------------
// City.js
// ---------------------------------------------------------------

 class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentWillReceiveProps() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <img src={`/spinner.gif`} alt="loading" />
      );
    }
    return (
      <img
        style={{ width: '100%' }}
        alt={this.props.name}
        src={`/${this.props.name}.png`}
      />
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
