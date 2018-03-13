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

import { category } from '../../../../api/Blog/Category';

class FormCreate extends Component {

    handleUploadCategory = (e) => {
        this.uploadField.click();
    }

    render() {
        const { formCreate } = this.props;
        return (
            <Form className="card form-horizontal" onSubmit={this.props.onSubmitFormCreate}>
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
                                value={formCreate.name}
                                onChange={this.props.onNameChangeFormCreate}
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
                                value={formCreate.description}
                                onChange={this.props.onDescriptionChangeFormCreate}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="file-input">Upload Image</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Button
                                className="upload_category"
                                type="button"
                                onClick={this.handleUploadCategory}
                            >Upload Image</Button>
                            <Input
                                type="file"
                                getRef={(uploadField) => this.uploadField = uploadField}
                                style={{ display: "none" }}
                                onChange={this.props.handleImageCategoryChangeFormCreate}
                            />
                            {formCreate.imagePreviewUrl && <img className="category_review" src={formCreate.imagePreviewUrl} />}
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