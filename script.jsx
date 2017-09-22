// imports not needed for plunker
//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//let { RawRows, SumRow, TrendRow, StatsRows } = './utils';

// Signups per year in 3 different age groups (0-20, 20-40, 40+)
const data = [[14, 24, 125, 182], [10, 122, 220, 310], [0, 19, 38, 50]];

const Aux = props => {
  return props.children;
};

const Fruits = () => [
  <li key="1">Apple</li>,
  <li key="2">Orange</li>,
  <li key="3">Banana</li>
];

class MoreFruits extends React.Component {
  render() {
    return [<li key="1">Strawberry</li>, <li key="2">Blueberry</li>];
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Peach</li>
          <li>Ananas</li>
          <Fruits />
          <MoreFruits />
        </ul>
        <table>
          <tbody>
            <RawRows data={data} />
            <StatsRows data={data} />
          </tbody>
        </table>
      </div>
    );
  }
}

// -----------------------------------------------------------------
// util.js
// -----------------------------------------------------------------
let idCounter = 0;
const uniqueId = () => ++idCounter + '';

const convertRowsToColumns = data =>
  data[0].map((col, i) => data.map(row => row[i]));

const sumPerColumn = data =>
  convertRowsToColumns(data).map(column =>
    column.reduce((sum, value) => {
      return sum + value;
    }, 0)
  );

const trendInPercent = data =>
  sumPerColumn(data).map((value, index, list) => {
    if (index === 0) {
      return 0;
    }
    return (100 / list[index - 1] * value - 100).toFixed(0);
  });

const RawRows = props =>
  props.data.map(row => (
    <tr key={uniqueId()}>
      {row.map(item => <td key={uniqueId()}>{item}</td>)}
    </tr>
  ));

const SumRow = props => (
  <tr key="1" style={{ borderTop: '2px solid #333' }}>
    {sumPerColumn(props.data).map(value => <td key={uniqueId()}>{value}</td>)}
  </tr>
);

const TrendRow = props => (
  <tr key="2">
    {trendInPercent(props.data).map(value => (
      <td key={uniqueId()}>{value}%</td>
    ))}
  </tr>
);

const StatsRows = props => (
  <Aux>
    <SumRow data={props.data} />
    <TrendRow data={props.data} />
  </Aux>
);


ReactDOM.render(<App />, document.getElementById('root'));
