import React from 'react';
import axios from 'axios';
import '../Category/AddCategory.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
class AddCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password:''
        }
    }
    AddCategory = () => {
        // alert(this.state.name)
        // alert(this.state.email)
        axios.post('http://stpapi.spikotech.com/api/Users', { name: this.state.name, email: this.state.email, password:this.state.password })
            .then(json => {
                if (json) {
                    alert("Data Saved Successfully");
                    this.props.history.push('/CategoryList')
                }
                else {
                    alert('Data not Saved');
                    this.props.history.push('/CategoryList')
                }
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Category Informations</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" onChange={this.handleChange}  placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" onChange={this.handleChange}  placeholder="Enter Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" onChange={this.handleChange}  placeholder="Enter Password" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddCategory} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}
export default AddCategory;