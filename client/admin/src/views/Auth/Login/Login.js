import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, CardGroup, Card, CardBlock, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { auth } from '../../../api/Auth';

class Login extends Component {
	state = {
		username: '',
		password: '',
		loginInProcess: false,
		shouldRedirect: false,
		fieldErrors: {}
	}

	loginForm = (evt) => {
		this.setState({ loginInProcess: true });
		const data = {
			username: this.state.username,
			password: this.state.password
		}
		auth.login(data)
			.then(() => {
				this.setState({ shouldRedirect: true });
			})
			.catch((err) => {
				const fieldErrors = this.validateSubmit(err.message);
				this.setState({ fieldErrors, loginInProcess: false });
			});

		evt.preventDefault();
	}

	validateSubmit = (data) => {
		const errors = {};
		if (data.username) errors.username = data.username;
		if (data.password) errors.password = data.password;
		if (data.errors) errors.errors = data.errors;

		return errors;
	}

	onUsernameChange = (evt) => {
		this.setState({ username: evt.target.value })
	}

	onPasswordChange = (evt) => {
		this.setState({ password: evt.target.value })
	}

	render() {
		if (this.state.shouldRedirect || auth.isLoggedIn()) {
			return (
				<Redirect from='/login' to={this.props.location} />
			);
		} else {
			return (
				<div className="app flex-row align-items-center">
					<Container>
						<Row className="justify-content-center">
							<Col md="8">
								<CardGroup className="mb-0">
									<Card className="p-4">
										<Form
											className="card-body card-block"
											onSubmit={this.loginForm}
										>
											<h1>Login</h1>
											<p className="text-muted">Sign In to your account</p>
											<FormGroup>
												<div className="controls">
													<InputGroup>
														<InputGroupAddon><i className="icon-user"></i>
														</InputGroupAddon>
														<Input
															type="text"
															placeholder="Username"
															value={this.state.username}
															onChange={this.onUsernameChange}
															className={this.state.fieldErrors.username ? 'is-invalid' : ''}
														/>
													</InputGroup>
												</div>
											</FormGroup>
											<InputGroup className="mb-4">
												<InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
												<Input
													type="password"
													placeholder="Password"
													onChange={this.onPasswordChange}
													className={this.state.fieldErrors.password ? 'is-invalid' : ''}
												/>
											</InputGroup>
											{
												this.state.fieldErrors.errors && <label className="text-danger">{this.state.fieldErrors.errors}</label>
											}
											{
												this.state.loginInProcess ?
													(<div className="sk-fading-circle">
														<div className="sk-circle1 sk-circle"></div>
														<div className="sk-circle2 sk-circle"></div>
														<div className="sk-circle3 sk-circle"></div>
														<div className="sk-circle4 sk-circle"></div>
														<div className="sk-circle5 sk-circle"></div>
														<div className="sk-circle6 sk-circle"></div>
														<div className="sk-circle7 sk-circle"></div>
														<div className="sk-circle8 sk-circle"></div>
														<div className="sk-circle9 sk-circle"></div>
														<div className="sk-circle10 sk-circle"></div>
														<div className="sk-circle11 sk-circle"></div>
														<div className="sk-circle12 sk-circle"></div>
													</div>) : (<Row>
														<Col xs="6">
															<Button color="primary" className="px-4" type="submit">Login</Button>
														</Col>
														<Col xs="6" className="text-right">
															<Button color="link" className="px-0">Forgot password?</Button>
														</Col>
													</Row>)
											}
										</Form>
									</Card>
									<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
										<CardBlock className="card-body text-center">
											<div>
												<h2>Sign up</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
												<Link className="mt-3 btn btn-primary active" to='/register'>Register Now!</Link>
											</div>
										</CardBlock>
									</Card>
								</CardGroup>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}

export default Login;
