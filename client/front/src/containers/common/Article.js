import React from 'react';
import { Link } from 'react-router-dom';

class Article extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <div className="single-post post-style-1">

                        <div className="blog-image"><img src="images/marion-michele-330691.jpg" alt="Blog Image" /></div>

                        <Link
                            to="/blog/1"
                            className="avatar"
                        >
                            <img src="images/icons8-team-355979.jpg" alt="Profile Image" />
                        </Link>

                        <div className="blog-info">

                            <h4 className="title">
                                <Link to="/blog/1">
                                    <b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
								    Concepts in Physics?</b>
                                </Link>
                            </h4>
                            <ul className="post-footer">
                                <li><a href="#"><i className="ion-heart"></i>57</a></li>
                                <li><a href="#"><i className="ion-chatbubble"></i>6</a></li>
                                <li><a href="#"><i className="ion-eye"></i>138</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;