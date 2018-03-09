import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card, CardBlock, CardFooter, Button, Form, Input, FormGroup, InputGroup, InputGroupAddon } from "reactstrap";

import { auth } from '../../../api/Auth';

class Register extends Component {
	state = {
		fullname: '',
		username: '',
		email: '',
		password: '',
		re_password: '',
		shouldRedirect: false,
		fieldErrors: {},
		registerInProcess: false,
		file: '',
		imagePreviewUrl: ''
	};

	onFormSubmit = (evt) => {
		if (this.state.password !== this.state.re_password) {
			this.setState({ fieldErrors: { password: 'Password not same' } });
		} else {
			// this.setState({ validate: false, registerInProcess: true });
			const data = {
				fullname: this.state.fullname,
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			}
			let formData = new FormData();
			formData.append('file', this.state.file);
			auth.register(formData)
				.then((resp) => {
					// this.setState({ shouldRedirect: true });
				})
				.catch((err) => {
					const fieldErrors = this.showErrorSubmit(err.message);
					this.setState({ fieldErrors, registerInProcess: false });
				});
		}
		evt.preventDefault();
	};
	handleUpload = (e) => {
		this.uploadField.click();
	}
	handleImageChange = (e) => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}

		reader.readAsDataURL(file)
	}

	showErrorSubmit = (data) => {
		const errors = {};
		if (data.username) errors.username = data.username;
		if (data.email) errors.email = data.email;

		return errors;
	}

	onFullnameChange = (e) => {
		this.setState({ fullname: e.target.value });
	}

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
		if (this.state.shouldRedirect || auth.isLoggedIn()) {
			return (
				<Redirect to={this.props.location} />
			);
		} else {
			let { imagePreviewUrl } = this.state;
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
											<InputGroupAddon><i className="icon-info"></i></InputGroupAddon>
											<Input
												type="text"
												placeholder="Full Name"
												value={this.state.fullname}
												onChange={this.onFullnameChange}
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
											<Input
												type="text"
												placeholder="Username"
												value={this.state.username}
												onChange={this.onUsernameChange}
												className={this.state.fieldErrors.username ? 'is-invalid' : ''}
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon>@</InputGroupAddon>
											<Input
												type="text"
												placeholder="Email"
												value={this.state.email}
												onChange={this.onEmailChange}
												className={this.state.fieldErrors.email ? 'is-invalid' : ''}
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
											<Input
												type="password"
												placeholder="Password"
												onChange={this.onPasswordChange}
												className={this.state.fieldErrors.password ? 'is-invalid' : ''}
											/>
										</InputGroup>
										<InputGroup className="mb-4">
											<InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
											<Input
												type="password"
												placeholder="Repeat Password"
												onChange={this.onRePasswordChange}
												className={this.state.fieldErrors.password ? 'is-invalid' : ''}
											/>
										</InputGroup>
										<FormGroup className="mb-4">
											<Button className="upload_avatar" type="button" onClick={this.handleUpload}>Upload Image</Button>
											<Input
												type="file"
												getRef={(uploadField) => this.uploadField = uploadField}
												style={{ display: "none" }}
												onChange={this.handleImageChange}
											/>
											{
												imagePreviewUrl && <img className="avatar_preview" src={imagePreviewUrl} />
											}
										</FormGroup>
										{
											this.state.registerInProcess ?
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
												</div>) : (<Button color="success" block type="submit">Create Account</Button>)
										}
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
