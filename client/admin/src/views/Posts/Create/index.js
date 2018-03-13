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
import { category } from '../../../api/Blog/Category';
import { post } from '../../../api/Blog/Post';

class PostCreate extends Component {
	state = {
		formCreate: {
			title: '',
			content: '',
			categories: [],
			file: '',
			imagePreviewUrl: ''
		},
		categoryList: []
	}
	componentDidMount() {
		category.getList().then((categoryList) => {
			this.setState({ categoryList })
		});
	}

	onSubmitFormCreate = (evt) => {
		let formData = new FormData();
		formData.append('data', JSON.stringify(this.state.formCreate));
		post.create(formData).then((post) => {
			console.log(post);
		});
		// this.setState({
		// 	formCreate: {
		// 		title: '',
		// 		content: '',
		// 		category: [],
		// 		file: '',
		// 		imagePreviewUrl: ''
		// 	}
		// });
		evt.preventDefault();
	}

	onTitleChangeFormCreate = (e) => {
		let formCreate = Object.assign({}, this.state.formCreate);
		formCreate.title = e.target.value;
		this.setState({ formCreate });
	}
	onCategoriesChangeFormCreate = (e) => {
		let options = e.target.options;
		let value = [];
		for (var i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		let formCreate = Object.assign({}, this.state.formCreate);
		formCreate.categories = value;
		this.setState({ formCreate });
	}
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12" md="6">
						<FormCreate
							formCreate={this.state.formCreate}
							categoryList={this.state.categoryList}
							onTitleChangeFormCreate={this.onTitleChangeFormCreate}
							onSubmitFormCreate={this.onSubmitFormCreate}
							onCategoriesChangeFormCreate={this.onCategoriesChangeFormCreate}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default PostCreate;
