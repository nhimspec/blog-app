import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBlock,
    Collapse
} from "reactstrap";

import { category } from '../../../api/Blog/Category';

class CategoryTree extends Component {
    state = {
        collapse: false
    };

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <Card>
                <CardHeader role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a className="collapsed" onClick={this.toggle}>{this.props.name}</a>
                    </h5>
                </CardHeader>
                {
                    !!this.props.categoryList && !!this.props.categoryList.length &&
                    <Collapse isOpen={this.state.collapse}>
                        <CardBlock className="card-body">
                            {
                                this.props.categoryList.map((category) => (
                                    <CategoryTree
                                        key={category._id}
                                        id={category._id}
                                        name={category.name}
                                    />
                                ))
                            }
                        </CardBlock>
                    </Collapse>
                }
            </Card>
        );
    }
}

export default CategoryTree;