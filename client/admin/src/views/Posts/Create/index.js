import React, { Component } from "react";
import {
	Row,
	Col,
	Button,
	Card,
	CardHeader,
	CardFooter,
	CardBlock,
	Form,
	FormGroup,
	FormText,
	Label,
	Input
} from "reactstrap";
import FormCreate from "./Form/FormCreate";

class PostCreate extends Component {

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12" md="6">
						<FormCreate/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default PostCreate;
