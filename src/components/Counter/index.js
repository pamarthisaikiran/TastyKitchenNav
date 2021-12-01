import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    countB: 1,
  }

  onIncrement = () => {
    this.setState(pre => ({
      countB: pre.countB + 1,
    }))
  }

  onDecrement = () => {
    this.setState(pre => ({
      countB: pre.countB - 1,
    }))
  }

  render() {
    const {countB} = this.state
    return (
      <div>
        <button className="minus" type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>{countB}</div>
        <button className="plus" type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
