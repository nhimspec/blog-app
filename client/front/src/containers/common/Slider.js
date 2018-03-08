import React from 'react';

class Slider extends React.Component {
    render() {
        const styles = {
            backgroundImage: `url('${this.props.image}')`
        };
        
        return (
            <div className="slider" style={styles}></div>
        );
    }
}

export default Slider;