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
                        <a className="collapsed" onClick={this.toggle}>
                            Collapsible Group Item #1
                                </a>
                    </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse}>
                    <CardBlock className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </CardBlock>
                </Collapse>
            </Card>
        );
    }
}

export default CategoryTree;