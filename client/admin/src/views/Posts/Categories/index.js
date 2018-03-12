import React, { Component } from "react";
import {
    Row,
    Col
} from "reactstrap";

import './category.scss';

import FormCreate from "./FormCreate";
import ListCategory from "./ListCategory";

class Categories extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="6">
                        <ListCategory />
                    </Col>
                    <Col xs="12" md="6">
                        <FormCreate />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;
