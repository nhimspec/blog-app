import React from 'react';
import "./css/styles.css";
import "./css/responsive.css";
import Slider from '../common/Slider';

class BlogContainer extends React.Component {
    render() {
        return (
            <div class="site-content">
                <Slider image="images/slider-1.jpg" />
                <section class="post-area section">
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-8 col-md-12 no-right-padding">

                                <div class="main-post">

                                    <div class="blog-post-inner">

                                        <div class="post-info">

                                            <div class="left-area">
                                                <a class="avatar" href="#"><img src="images/avatar-1-120x120.jpg" alt="Profile Image" /></a>
                                            </div>

                                            <div class="middle-area">
                                                <a class="name" href="#"><b>Katy Liu</b></a>
                                                <h6 class="date">on Sep 29, 2017 at 9:48 am</h6>
                                            </div>

                                        </div>

                                        <h3 class="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</b></a></h3>

                                        <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                                        <div class="post-image"><img src="images/blog-1-1000x600.jpg" alt="Blog Image" /></div>

                                        <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                                        <ul class="tags">
                                            <li><a href="#">Mnual</a></li>
                                            <li><a href="#">Liberty</a></li>
                                            <li><a href="#">Recommendation</a></li>
                                            <li><a href="#">Inspiration</a></li>
                                        </ul>
                                    </div>

                                    <div class="post-icons-area">
                                        <ul class="post-icons">
                                            <li><a href="#"><i class="ion-heart"></i>57</a></li>
                                            <li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
                                            <li><a href="#"><i class="ion-eye"></i>138</a></li>
                                        </ul>

                                        <ul class="icons">
                                            <li>SHARE : </li>
                                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i class="ion-social-pinterest"></i></a></li>
                                        </ul>
                                    </div>

                                    <div class="post-footer post-info">

                                        <div class="left-area">
                                            <a class="avatar" href="#"><img src="images/avatar-1-120x120.jpg" alt="Profile Image" /></a>
                                        </div>

                                        <div class="middle-area">
                                            <a class="name" href="#"><b>Katy Liu</b></a>
                                            <h6 class="date">on Sep 29, 2017 at 9:48 am</h6>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-4 col-md-12 no-left-padding">

                                <div class="single-post info-area">

                                    <div class="sidebar-area about-area">
                                        <h4 class="title"><b>ABOUT BONA</b></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
								Ut enim ad minim veniam</p>
                                    </div>

                                    <div class="sidebar-area subscribe-area">

                                        <h4 class="title"><b>SUBSCRIBE</b></h4>
                                        <div class="input-area">
                                            <form>
                                                <input class="email-input" type="text" placeholder="Enter your email" />
                                                <button class="submit-btn" type="submit"><i class="icon ion-ios-email-outline"></i></button>
                                            </form>
                                        </div>

                                    </div>

                                    <div class="tag-area">

                                        <h4 class="title"><b>TAG CLOUD</b></h4>
                                        <ul>
                                            <li><a href="#">Manual</a></li>
                                            <li><a href="#">Liberty</a></li>
                                            <li><a href="#">Recomendation</a></li>
                                            <li><a href="#">Interpritation</a></li>
                                            <li><a href="#">Manual</a></li>
                                            <li><a href="#">Liberty</a></li>
                                            <li><a href="#">Recomendation</a></li>
                                            <li><a href="#">Interpritation</a></li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default BlogContainer;