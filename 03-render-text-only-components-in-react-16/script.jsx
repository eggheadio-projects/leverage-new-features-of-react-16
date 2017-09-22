//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

const Comment = ({ text }) => {
  const emojifiedText = text
    .replace(':)', '😊')
    .replace(':D', '😀')
    .replace(':(', '🙁');
  return emojifiedText;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :)" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
