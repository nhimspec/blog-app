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
    Input,
} from "reactstrap";

class Categories extends Component {
    state = {
        name: '',
        desc: ''
    }
    oneNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    onDescChange = (e) => {
        this.setState({ desc: e.target.value })
    }
    onSubmitCreate = (evt) => {
        console.log(this.state);
        evt.preventDefault();
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="6">
                        <Form className="card" onSubmit={this.onSubmitCreate}>
                            <CardHeader>
                                <strong>Category</strong> Create
							</CardHeader>
                            <CardBlock className="card-body">
                                <Form action="" method="post" className="form-horizontal">
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
                                                value={this.state.desc}
                                                onChange={this.onDescChange}
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
                                </Form>
                            </CardBlock>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;
