//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.overlayContainer = document.createElement('div');
    document.body.appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span onClick={this.props.onClose}>x</span>
        {this.props.children}
      </div>,
      this.overlayContainer
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { overlayActive: true };
  }

  closeOverlay = () => {
    this.setState({ overlayActive: false });
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.state.overlayActive &&
          <Overlay onClose={this.closeOverlay}>
            <div>Welcome</div>
          </Overlay>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
