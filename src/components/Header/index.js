import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
// import {Navbar, Nav, Container} from 'react-bootstrap'
import Cookies from 'js-cookie'

// import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Header extends Component {
  state = {
    clr: true,
    clrCart: false,
    textH: 'navhome',
    textC: 'navCart',
    isTrue: false,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  /* color = () => {
    const {clr} = this.state
    this.setState(pre => ({
      clr: !pre.clr,
    }))

    const Navcolor = clr ? `colorNavHome` : `navhome`

    this.setState({
      textH: Navcolor,
    })
  } */

  /* colorCart = () => {
    const {clr} = this.state

    this.setState(
      pre => ({
        clr: !pre.clr,
      }),
      this.renderNav,
    )
  } */
  onClickHum = () => {
    const {isTrue} = this.state
    this.setState(preState => ({
      isTrue: !preState.isTrue,
    }))
  }

  renderBar = () => {
    const {isTrue} = this.state

    return isTrue ? (
      <div>
        <ul className="header-hum">
          <Link to="/">
            {' '}
            <li className="logo-li">
              <button onClick={this.color} className="navhomeHum">
                Home
              </button>
            </li>
          </Link>

          <Link to="/cart">
            <li className="logo-li">
              <button onClick={this.colorCart} className="navCartHum">
                Cart{' '}
              </button>
            </li>
          </Link>

          <li>
            {' '}
            <button onClick={this.onClickLogout} className="navButtonHum">
              Logout
            </button>
          </li>
        </ul>
      </div>
    ) : (
      <div>
        <hr className="hrrr" />
      </div>
    )
  }

  renderNav = () => {
    const {textH, isTrue, textC, clr} = this.state
    const Navcolor = clr ? `navhome` : `colorNav`
    return (
      <nav className="bgg">
        <div className="header-nav-div">
          <Link to="/" className="link-color">
            <div className="header-li">
              <img
                alt="website logo"
                src="https://res.cloudinary.com/ddbhluguf/image/upload/v1634469329/Vector_10x_ay1xq6.png"
              />

              <h1 className="navHead ">Tasty Kitchen</h1>
            </div>
          </Link>

          <div>
            <img
              onClick={this.onClickHum}
              className="hum"
              src="https://res.cloudinary.com/ddbhluguf/image/upload/v1638363597/icons8-menu-24_fjxoqv.png"
            />
          </div>

          <ul className="header-ul">
            <Link to="/">
              {' '}
              <li className="logo-li">
                <button onClick={this.color} className="navhome">
                  Home
                </button>
              </li>
            </Link>

            <Link to="/cart">
              <li className="logo-li">
                <button onClick={this.colorCart} className="navCart">
                  Cart{' '}
                </button>
              </li>
            </Link>

            <li>
              {' '}
              <button onClick={this.onClickLogout} className="navButton">
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div>{this.renderBar()}</div>
      </nav>
    )
  }

  render() {
    const {textH} = this.state
    return <>{this.renderNav()}</>
  }
}

export default withRouter(Header)
