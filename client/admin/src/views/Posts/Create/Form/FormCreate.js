import React from 'react';
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

class FormCreate extends React.Component {
    render() {
        return (
            <Form className="card form-horizontal">
                <CardHeader>
                    <strong>Post</strong> Create
                </CardHeader>
                <CardBlock className="card-body">
                        <FormGroup row>
                            <Col md="3">
                                <Label>Title</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Input type="text" placeholder="Title" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label>Content</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" />
                                <FormText className="help-block">Please enter your email</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="multiple-select">Multiple select</Label>
                            </Col>
                            <Col md="9">
                                <Input type="select" name="multiple-select" id="multiple-select" multiple>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                    <option value="4">Option #4</option>
                                    <option value="5">Option #5</option>
                                    <option value="6">Option #6</option>
                                    <option value="7">Option #7</option>
                                    <option value="8">Option #8</option>
                                    <option value="9">Option #9</option>
                                    <option value="10">Option #10</option>
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
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="file-input">File input</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Input type="file" id="file-input" name="file-input" />
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