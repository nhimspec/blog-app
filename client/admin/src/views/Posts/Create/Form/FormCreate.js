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
        const { categoryList, formCreate } = this.props;
        return (
            <Form className="card form-horizontal" onSubmit={this.props.onSubmitFormCreate}>
                <CardHeader>
                    <strong>Post</strong> Create
                </CardHeader>
                <CardBlock className="card-body">
                    <FormGroup row>
                        <Col md="3">
                            <Label>Title</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input
                                type="text"
                                placeholder="Title"
                                value={formCreate.title}
                                onChange={this.props.onTitleChangeFormCreate}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label>Content</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="multiple-select">Multiple select</Label>
                        </Col>
                        <Col md="9">
                            <Input 
                                type="select" 
                                multiple
                                value={formCreate.categories}
                                onChange={this.props.onCategoriesChangeFormCreate}
                            >
                                {
                                    categoryList.map((category) => (
                                        <option 
                                            key={category._id}
                                            value={category._id}
                                        >{category.name}</option>
                                    ))
                                }
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