import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import PostCreate from '../../views/Posts/Create/';
import { auth } from '../../api/Auth';
class Full extends Component {
	render() {
		if (auth.isLoggedIn()) {
			return (
				<div className="app">
					<Header />
					<div className="app-body">
						<Sidebar {...this.props} />
						<main className="main">
							<Breadcrumb />
							<Container fluid>
								<Switch>
									<Route path="/dashboard" name="Dashboard" component={Dashboard} />
									<Route path="/post/create" name="post" component={PostCreate} />
									<Redirect from="/" to="/dashboard" />
								</Switch>
							</Container>
						</main>
						<Aside />
					</div>
					<Footer />
				</div>
			);
		} else {
			return (<Redirect from="/" to="/login" />);
		}
	}
}

export default Full;
