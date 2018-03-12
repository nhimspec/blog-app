import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBlock
} from "reactstrap";
import CategoryTree from './CategoryTree';
import { category } from '../../../api/Blog/Category';

class ListCategory extends Component {
    render() {
        return (
            < Card >
                <CardHeader>
                    <strong>Category</strong> List
                </CardHeader>
                <CardBlock className="card-body">
                    {
                        this.props.categoryList.map((category) => (
                            <CategoryTree
                                key={category._id}
                                id={category._id}
                                name={category.name}
                                categoryList={category.children}
                            />
                        ))
                    }
                </CardBlock>
            </Card >
        );
    }
}

export default ListCategory;