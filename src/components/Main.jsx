import React from "react";
import Cards from "./Cards";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: new Array(9).fill(null),
            paddingTop: props.paddingTop
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.paddingTop !== this.props.paddingTop) {
            this.setState({ paddingTop: this.props.paddingTop })
        }
    }
    


    handleScroll = () => {
        const scrollableHeight = document.body.clientHeight - window.innerHeight
        if(Math.round(scrollY) === scrollableHeight) {
            this.setState({ cards: [...this.state.cards, ...new Array(6).fill(null)]})
        }
    }

    renderCards = () => {
        return this.state.cards.map((_, i) => 
            <Cards key={i} descrizione={`Card #${i+1}`} />
        )
    }

    render() {
        return(<>
            
            <main style={{paddingTop: this.state.paddingTop}}>
            <h2 style={{
                    textAlign: 'center',
                    padding: '1rem',
                    margin: '2rem 0 1rem 0',
                    fontSize: '1.6rem',  
            }}>Click on the Images!</h2>
                {this.renderCards()}
            </main>
        </>)
    }

}

export default Main