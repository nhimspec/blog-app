import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBlock
} from "reactstrap";
import CategoryTree from './CategoryTree';
import { category } from '../../../api/Blog/Category';

class ListCategory extends Component {
    state = {
        categoryList: {}
    };

    componentDidMount() {
        let categoryList = category.getList();
        this.setState({categoryList});
    }
    render() {
        return (
            <Card>
                <CardHeader>
                    <strong>Category</strong> List
                </CardHeader>
                <CardBlock className="card-body">
                    <CategoryTree/>
                </CardBlock>
            </Card>
        );
    }
}

export default ListCategory;