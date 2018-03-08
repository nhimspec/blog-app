import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        console.log(this.props.logo);
        return (
            <header>
                <div className="container-fluid position-relative no-side-padding">

                    <Link className='logo' to='/'>
                        <img src={this.props.logo} alt="Logo Image" />
                    </Link>

                    <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon"></i></div>

                    <ul className="main-menu visible-on-click" id="main-menu">
                        <li>
                            <NavLink
                                to='/'
                                activeClassName='active'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/category'
                                activeClassName='active'
                            >
                                Categories
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;