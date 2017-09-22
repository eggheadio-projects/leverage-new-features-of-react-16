//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class Foo {
  toString() {
    return 'foo'
  }
}
const foo = new Foo();

class App extends React.Component {
  render() {
    return (
      <div
        my-attribute="foo"
        // tabindex="-1"
        // tabIndex="-1"
        class="bar"
      // className={false}
      // className={NaN}
      // className={() => null}
      // className={Symbol('foo')}
      // className={{ foo: 'bar' }}
      // className={foo}
      // onclick="alert('Hi!')"
      >
        Hello!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
