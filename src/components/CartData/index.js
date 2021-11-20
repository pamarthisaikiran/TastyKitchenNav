import {Component} from 'react'

import './index.css'

class CartData extends Component {
  state = {
    price: 0,
    countE: 0,
    fprice: 0,
    total: 0,
  }

  componentDidMount() {
    this.onChangeData()
    this.onTotal()
  }

  onTotal = () => {
    const {fprice, total} = this.state
    const {eachDetails} = this.props
    const {imageUrl, id, count, cost, name} = eachDetails
  }

  onChangeData = () => {
    const {price, countE, fprice, total} = this.state
    const {eachDetails} = this.props
    const {imageUrl, id, count, cost, name} = eachDetails

    this.setState({
      price: cost,
      countE: count,
      fprice: cost * count,
    })
  }

  onIncrement = () => {
    const {eachDetails} = this.props
    const {imageUrl, id, count, cost, name} = eachDetails
    const {countE, price, t} = this.state
    const {onChangeTotal} = this.props

    this.setState(prevState => ({
      fprice: prevState.fprice + cost,
    }))

    this.setState(prevState => ({
      countE: prevState.countE + 1,
    }))

    onChangeTotal(cost)
  }

  onDecrement = () => {
    const {eachDetails} = this.props
    const {imageUrl, id, count, cost, name} = eachDetails
    const {countE, fprice} = this.state
    const {onChangeTotalMinus} = this.props
    onChangeTotalMinus(cost)
    if (countE >= 1) {
      this.setState(
        prevState => ({
          fprice: prevState.fprice - cost,
        }),
        this.onTotal,
      )
      this.setState(prevState => ({
        countE: prevState.countE - 1,
      }))
    }
    if (countE === 1) {
      const {onDeleteItem} = this.props
      onDeleteItem(id)
    }
  }

  render() {
    const {price, countE, fprice} = this.state
    const {eachDetails} = this.props
    const {imageUrl, id, count, cost, name, qprice} = eachDetails
    return (
      <li className="cartList">
        <img className="imgUrl imgurlC" src={imageUrl} />
        <h1 className="box">{name}</h1>
        <div className="cartBut">
          <button
            testid="decrement-quantity"
            onClick={this.onDecrement}
            className="minus"
            type="button"
          >
            -
          </button>
          <div>
            <p testid="item-quantity">{countE}</p>
          </div>
          <button
            testid="increment-quantity"
            onClick={this.onIncrement}
            className="plus"
            type="button"
          >
            +
          </button>
        </div>
        <p testid="active-count" className="costC">
          ₹{fprice}.00
        </p>
      </li>
    )
  }
}

export default CartData
