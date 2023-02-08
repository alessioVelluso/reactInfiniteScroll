import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import ScrollTop from './components/TopScroll'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 'relative',
            paddingTop: '0',
            transformTop: 'translateY(0)'
        }
    }
    componentDidMount() {
        this.handleScroll()
    }



    handleScroll = () => {
        let prevPosition = window.scrollY;
        let snoozed = false

        window.addEventListener('scroll', () => {
          if (window.scrollY > 0) {
            this.setState({ 
                position: "fixed",
                paddingTop: '10vh' //Header.css 
            });
          }
          else this.setState({ position: 'relative', paddingTop: '0' })

          if (prevPosition < window.scrollY) this.setState({ transformTop: 'translateY(-100%)' })
          else this.setState({ transformTop: 'translateY(0%)'})
          prevPosition = window.scrollY;

        })
    
    }



    render() {
        return(
        <>
            <Header 
                position={this.state.position} 
                transformTop={this.state.transformTop}
            />
            <Main paddingTop={this.state.paddingTop}/>
            <ScrollTop />
        </>
        )
    }
}

export default App