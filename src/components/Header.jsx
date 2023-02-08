import React from 'react'
import './style/Header.css'
import logo from '../assets/logo.png'

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      position: props.position,
      transformTop: props.transformTop
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.position !== this.props.position) {
      this.setState({ position: this.props.position });
    }
    if (prevProps.transformTop !== this.props.transformTop) {
      this.setState({ transformTop: this.props.transformTop })
    }
  }

  render() {
    return (
      <div className="Header"
        style={{ 
          position: this.state.position,
          transform: this.state.transformTop
        }}
      >
        <img src={logo} alt="Logo" onClick={() => window.open('http://github.com/alessioVelluso')}/>
        <h1>Infinite Element</h1>
      </div>
    )
  }
}

export default Header
