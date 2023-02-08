import React from "react";
import arrows from '../assets/arrows.png'
import './style/TopScroll.css'


class ScrollTop extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            top: true
        }
        this.style={
            position: 'fixed',
            bottom: '2rem',
            right: '2rem'
        }
    }

    scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }



    
    render() {
        return(
            <button style={this.style} id="topScroll" onClick={this.scrollTop}>
                <img src={arrows} alt="" />
            </button>
        )
    }
}


export default ScrollTop