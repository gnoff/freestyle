import * as React from 'react'

export class ATallList extends React.Component {
  render() {
    return new Array(30).fill(0).map((i, idx) => (
      <div
        key={i}
        style={{
          margin: 'auto',
          color: 'white',
          width: '50%',
          height: 100,
          background: 'red',
        }}
      >
        List item {i}
      </div>
    ))
  }
}
