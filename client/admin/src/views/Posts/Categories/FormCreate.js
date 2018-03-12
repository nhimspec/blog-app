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
import 'rc-tree-select/assets/index.css';
import TreeSelect, { TreeNode, SHOW_PARENT } from 'rc-tree-select';

import { category } from '../../../api/Blog/Category';

class FormCreate extends Component {
    state = {
        tsOpen: false,
        visible: false,
        inputValue: '0-0-0-label',
        value: '0-0-0-value1',
        // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],
        lv: { value: '0-0-0-value', label: 'spe label' },
        multipleValue: [],
        simpleTreeData: [
            { key: 1, pId: 0, label: 'test1', value: 'test1' },
            { key: 121, pId: 0, label: 'test1', value: 'test121' },
            { key: 11, pId: 1, label: 'test11', value: 'test11' },
            { key: 12, pId: 1, label: 'test12', value: 'test12' },
            { key: 111, pId: 11, label: 'test111', value: 'test111' },
        ],
        treeDataSimpleMode: {
            id: 'key',
            rootPId: 0,
        },
    }

    onChange = (value) => {
        this.setState({ value });
    }

    render() {
        console.log(this.props.categoryList);
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
                                value={this.props.formCreate.name}
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
                                value={this.props.formCreate.description}
                                onChange={this.props.onDescriptionChangeFormCreate}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="selectSm">Parent Category</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input
                                type="select"
                                size="sm"
                                onChange={this.props.onParentCategoryChangeFormCreate}
                                value={this.props.formCreate.parent_cat}
                            >
                                <option>Please select</option>
                                {
                                    this.props.categoryList.map((category) => (
                                        <option
                                            key={category._id}
                                            value={category._id}
                                        >{category.name}</option>
                                    ))
                                }
                            </Input>
                        </Col>
                    </FormGroup>

                    <TreeSelect
                        style={{ width: 200 }}
                        dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
                        defaultValue={'leaf1'} multiple treeCheckable showCheckedStrategy={SHOW_PARENT}
                        treeDefaultExpandAll
                        treeData={[
                            { key: '', value: '', label: 'empty value', children: [] },
                            {
                                key: '0', value: '0', label: '0 label', children: [
                                    { key: '00', value: '00', label: '00 label', children: [] },
                                    { key: '01', value: '01', label: '01 label', children: [] },
                                ],
                            },
                        ]}
                        onChange={this.onChange}
                    />
                    <FormGroup row>
                        <Col md="3">
                            <Label>Radios</Label>
                        </Col>
                        <Col md="9">
                            <FormGroup check>
                                <div className="radio">
                                    <Label check htmlFor="radio1">
                                        <Input type="radio" id="radio1" name="radios" value="option1" /> Option 1
													</Label>
                                </div>
                                <div className="radio">
                                    <Label check htmlFor="radio2">
                                        <Input type="radio" id="radio2" name="radios" value="option2" /> Option 2
													</Label>
                                </div>
                                <div className="radio">
                                    <Label check htmlFor="radio3">
                                        <Input type="radio" id="radio3" name="radios" value="option3" /> Option 3
													</Label>
                                </div>
                            </FormGroup>
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