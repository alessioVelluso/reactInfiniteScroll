import React from 'react';
import './style/Cards.css'

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://picsum.photos/200/300'
        }
    }
    componentDidMount() {
        this.changeImg()
    }




    
    changeImg = () => {
        try {
            fetch('https://picsum.photos/200/300')
            .then(res => res.blob())
            .then(blob => this.setState({ src: URL.createObjectURL(blob)}))
        } catch(error) {
            console.log(error)
        }
    }

    

    render() {
        return(<>
            <div className="Card">
                <div className="top"
                    style={{
                        background: `url(${this.state.src})`,
                    }}
                    onClick={this.changeImg}
                >
                </div>
                <p>{this.props.descrizione}</p>
            </div>
        </>)
    }
}

export default Cards