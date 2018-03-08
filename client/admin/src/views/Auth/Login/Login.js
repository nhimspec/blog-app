import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card, CardBlock, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from "reactstrap";
import client from '../Client';

class Login extends Component {
	state = {
		username: '',
		password: '',
		validate: false
	}

	loginForm = (evt) => {
		this.setState({ validate: true })
		const data = {
			username: this.state.username,
			password: this.state.password
		}
		console.log(data);
		// client.login(data)
		// 	.then((resp) => {
		// 		console.log(resp);
		// 	});
		evt.preventDefault();
	}

	onUsernameChange = (evt) => {
		this.setState({ username: evt.target.value })
	}

	onPasswordChange = (evt) => {
		this.setState({ password: evt.target.value })
	}

	render() {
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
											/>
										</InputGroup>
										{
											this.state.validate && <label className="text-danger">Username or password is incorrect!!</label>
										}
										<Row>
											<Col xs="6">
												<Button color="primary" className="px-4" type="submit">Login</Button>
											</Col>
											<Col xs="6" className="text-right">
												<Button color="link" className="px-0">Forgot password?</Button>
											</Col>
										</Row>
									</Form>
								</Card>
								<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
									<CardBlock className="card-body text-center">
										<div>
											<h2>Sign up</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
											<Button color="primary" className="mt-3" active>Register Now!</Button>
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

export default Login;
