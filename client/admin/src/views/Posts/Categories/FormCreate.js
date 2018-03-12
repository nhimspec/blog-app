import React, { Component } from 'react';
import {
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
    Input,
} from "reactstrap";

import { category } from '../../../api/Blog/Category';

class FormCreate extends Component {

    state = {
        name: '',
        description: ''
    }
    oneNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value })
    }
    onSubmitCreate = (evt) => {
        const data = {
            name: this.state.name,
            description: this.state.description
        }
        category.create(data);
        evt.preventDefault();
    }

    render() {
        return (
            <Form className="card form-horizontal" onSubmit={this.onSubmitCreate}>
                <CardHeader>
                    <strong>Category</strong> Create
							</CardHeader>
                <CardBlock className="card-body">
                    <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="text-input">Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input
                                placeholder="Enter.."
                                value={this.state.name}
                                onChange={this.oneNameChange}
                            />
                            <FormText color="muted">Name of category</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="textarea-input">Description</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input
                                type="textarea"
                                rows="6"
                                placeholder="Content..."
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="selectSm">Parent Category</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="select" name="selectSm" id="SelectLm" size="sm">
                                <option value="0">Please select</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label>Radios</Label>
                        </Col>
                        <Col md="9">
                            <FormGroup check>
                                <div className="radio">
                                    <Label check htmlFor="radio1">
                                        <Input type="radio" id="radio1" name="radios" value="option1" /> Option 1
													</Label>
                                </div>
                                <div className="radio">
                                    <Label check htmlFor="radio2">
                                        <Input type="radio" id="radio2" name="radios" value="option2" /> Option 2
													</Label>
                                </div>
                                <div className="radio">
                                    <Label check htmlFor="radio3">
                                        <Input type="radio" id="radio3" name="radios" value="option3" /> Option 3
													</Label>
                                </div>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                </CardBlock>
                <CardFooter>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </CardFooter>
            </Form>
        );
    }
}

export default FormCreate;