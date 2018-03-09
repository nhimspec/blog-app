import React, { Component } from 'react';
import {
	Badge,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
	NavbarBrand,
	DropdownToggle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../api/Auth';

class Header extends Component {
	state = {
		dropdownOpen: false,
		user: {}
	}

	componentDidMount() {
		auth.user().then((user) => {
			this.setState({ user });
		})
	}

	testClick = () => {
		console.log(this.state.user,this.state.user.fullname);
	}

	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	sidebarToggle = (e) => {
		e.preventDefault();
		document.body.classList.toggle('sidebar-hidden');
	}

	sidebarMinimize = (e) => {
		e.preventDefault();
		document.body.classList.toggle('sidebar-minimized');
	}

	mobileSidebarToggle = (e) => {
		e.preventDefault();
		document.body.classList.toggle('sidebar-mobile-show');
	}

	asideToggle = (e) => {
		e.preventDefault();
		document.body.classList.toggle('aside-menu-hidden');
	}

	render() {
		return (
			<header className="app-header navbar">
				<NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
				<NavbarBrand href="#"></NavbarBrand>
				<NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
				<Nav className="d-md-down-none" navbar>
					<NavItem className="px-3">
						<NavLink href="#">Dashboard</NavLink>
					</NavItem>
					<NavItem className="px-3">
						<NavLink href="#">Users</NavLink>
					</NavItem>
					<NavItem className="px-3">
						<NavLink href="#">Settings</NavLink>
					</NavItem>
				</Nav>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down-none">
						<NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<NavLink href="#"><i className="icon-list"></i></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<NavLink href="#"><i className="icon-location-pin"></i></NavLink>
					</NavItem>
					<NavItem>
						<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<DropdownToggle className="nav-link dropdown-toggle">
								<img src={'img/avatars/6.jpg'} className="img-avatar" alt={this.state.user.email} />
								<span className="d-md-down-none">{this.state.user.fullname}</span>
							</DropdownToggle>
							<DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
								<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
								<DropdownItem onClick={this.testClick}><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
								<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
								<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
								<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
								<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
								<DropdownItem divider />
								<Link to='/logout' className="dropdown-item"><i className="fa fa-lock"></i> Logout</Link>
							</DropdownMenu>
						</Dropdown>
					</NavItem>
				</Nav>
				<NavbarToggler className="d-md-down-none" type="button" onClick={this.asideToggle}>&#9776;</NavbarToggler>
			</header>
		)
	}
}

export default Header;
