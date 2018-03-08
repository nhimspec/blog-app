import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card, CardBlock, CardFooter, Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";

import { client } from '../Client';

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		re_password: '',
		validate: false,
		logged: false
	};

	onFormSubmit = (evt) => {
		if (this.state.password === this.state.re_password) {
			this.setState({ validate: true });
		} else {
			this.setState({ validate: false });

			const data = {
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			}
			client.register(data)
				.then((resp) => {
					console.log(resp);
				});
		}
		evt.preventDefault();
	};

	onUsernameChange = (e) => {
		this.setState({ username: e.target.value });
	}

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	}

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	}

	onRePasswordChange = (e) => {
		this.setState({ re_password: e.target.value });
	}

	render() {
		if (this.state.logged) {
			return (
				<Redirect to='login' />
			);
		} else {
			return (
				<div className="app flex-row align-items-center">
					<Container>
						<Row className="justify-content-center">
							<Col md="6">
								<Card className="mx-4">
									<Form
										className="card-body p-4 card-block"
										onSubmit={this.onFormSubmit}
									>
										<h1>Register</h1>
										<p className="text-muted">Create your account</p>
										<InputGroup className="mb-3">
											<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
											<Input
												type="text"
												placeholder="Username"
												value={this.state.username}
												onChange={this.onUsernameChange}
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon>@</InputGroupAddon>
											<Input
												type="text"
												placeholder="Email"
												value={this.state.email}
												onChange={this.onEmailChange}
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
											<Input
												type="password"
												placeholder="Password"
												onChange={this.onPasswordChange}
												className={this.state.validate ? 'border-danger' : ''}
											/>
										</InputGroup>
										<InputGroup className="mb-4">
											<InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
											<Input
												type="password"
												placeholder="Repeat Password"
												onChange={this.onRePasswordChange}
												className={this.state.validate ? 'border-danger' : ''}
											/>
										</InputGroup>
										<Button color="success" block type="submit">Create Account</Button>
									</Form>
									<CardFooter className="p-4">
										<Row>
											<Col xs="12" sm="6">
												<Button className="btn-facebook" block><span>facebook</span></Button>
											</Col>
											<Col xs="12" sm="6">
												<Button className="btn-twitter" block><span>twitter</span></Button>
											</Col>
										</Row>
									</CardFooter>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
	}
}

export default Register;
