import React, { Component } from "react";
import {
    Row,
    Col
} from "reactstrap";

import './category.scss';

import FormCreate from "./FormCreate";
import ListCategory from "./ListCategory";
import { category } from '../../../api/Blog/Category';

class Categories extends Component {
    state = {
        formCreate: {
            name: '',
            description: '',
            parent_cat: ''
        },
        categoryList: []
    }

    componentDidMount() {
        category.getList().then((categoryList) => {
            this.setState({ categoryList })
        });
    }

    onSubmitFormCreate = (evt) => {
        category.create(this.state.formCreate).then((categoryList) => {
            this.setState({ categoryList });
        });
        this.setState({
            formCreate: {
                name: '',
                description: ''
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
    onParentCategoryChangeFormCreate = (e) => {
        let formCreate = Object.assign({}, this.state.formCreate);
        formCreate.parent_cat = e.target.value;
        this.setState({ formCreate })
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
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;
