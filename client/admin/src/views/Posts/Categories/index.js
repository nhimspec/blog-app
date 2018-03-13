import React, { Component } from "react";
import {
    Row,
    Col
} from "reactstrap";

import './category.scss';

import FormCreate from "./Form/FormCreate";
import ListCategory from "./List/ListCategory";
import { category } from '../../../api/Blog/Category';

class Categories extends Component {
    state = {
        formCreate: {
            name: '',
            description: '',
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

    renameFileUpload = (fileName) => {
        return `${Date.now()}-${fileName}`;
    }

    onSubmitFormCreate = (evt) => {
        let fileName = this.renameFileUpload(this.state.formCreate.file.name);
        let formData = new FormData();

        formData.append('file', this.state.formCreate.file, fileName);
        formData.append('name', this.state.formCreate.name);
        formData.append('description', this.state.formCreate.description);
        formData.append('image', fileName);
        category.create(formData).then((category) => {
            let categoryList= [...this.state.categoryList, category.category];
            this.setState({ categoryList });
        });
        this.setState({
            formCreate: {
                name: '',
                description: '',
                file: '',
                imagePreviewUrl: ''
            }
        });
        evt.preventDefault();
    }

    onNameChangeFormCreate = (e) => {
        let formCreate = Object.assign({}, this.state.formCreate);
        formCreate.name = e.target.value;
        this.setState({ formCreate });
    }

    onDescriptionChangeFormCreate = (e) => {
        let formCreate = Object.assign({}, this.state.formCreate);
        formCreate.description = e.target.value;
        this.setState({ formCreate })
    }
    handleImageCategoryChangeFormCreate = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            let formCreate = Object.assign({}, this.state.formCreate);
            formCreate.file = file;
            formCreate.imagePreviewUrl = reader.result;
            this.setState({ formCreate })
        }

        reader.readAsDataURL(file)
    }

    render() {
        const categoryList = this.state.categoryList;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="6">
                        <ListCategory
                            categoryList={categoryList}
                        />
                    </Col>
                    <Col xs="12" md="6">
                        <FormCreate
                            categoryList={categoryList}
                            formCreate={this.state.formCreate}
                            onSubmitFormCreate={this.onSubmitFormCreate}
                            onNameChangeFormCreate={this.onNameChangeFormCreate}
                            onDescriptionChangeFormCreate={this.onDescriptionChangeFormCreate}
                            onParentCategoryChangeFormCreate={this.onParentCategoryChangeFormCreate}
                            handleImageCategoryChangeFormCreate={this.handleImageCategoryChangeFormCreate}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;
