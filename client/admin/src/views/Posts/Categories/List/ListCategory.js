import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBlock
} from "reactstrap";
import CategoryInfo from './CategoryInfo';
import { category } from '../../../../api/Blog/Category';

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
                            <CategoryInfo
                                key={category._id}
                                category={category}
                            />
                        ))
                    }
                </CardBlock>
            </Card >
        );
    }
}

export default ListCategory;