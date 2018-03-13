import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBlock,
    Collapse
} from "reactstrap";

import { category } from '../../../../api/Blog/Category';
import { helper } from '../../../../utils/Helper';

class CategoryInfo extends Component {
    state = {
        collapse: false
    };

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        const { category } = this.props;
        console.log(category);
        return (
            <Card>
                <CardHeader role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a className="collapsed" onClick={this.toggle}>{category.name}</a>
                    </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse}>
                    <CardBlock className="card-body category-info">
                        <img src={helper.getImageUrl(category.image)}/>
                        <p>{category.description}</p>
                    </CardBlock>
                </Collapse>
            </Card>
        );
    }
}

export default CategoryInfo;