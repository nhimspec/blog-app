import React from 'react';

import Article from '../common/Article';

import "./css/styles.css";
import "./css/responsive.css";
import Slider from '../common/Slider';

class HomeContainer extends React.Component {
    render() {
        return (
            <div class="site-content">
                <Slider image="images/slider-1.jpg" />
                <section className="blog-area section">
                    <div className="container">
                        <div className="row">
                            <Article />
                        </div>
                    </div>
                </section>
            </div>            
        );
    }
}

export default HomeContainer;