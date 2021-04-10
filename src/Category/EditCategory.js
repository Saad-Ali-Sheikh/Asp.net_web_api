import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
//import '../Category/AddCategory.css'
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password:''
        }
    }
    componentDidMount() {
        axios.get('http://stpapi.spikotech.com/api/Users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        //alert(this.props.match.params.id)
        const obj = {
            id: this.props.match.params.id,
            name: this.state.name,
            email: this.state.email,
            password:this.state.password
        };
        const flag= {id:parseInt(this.props.match.params.id), name: this.state.name,email:this.state.email,password:this.state.password}
        //console.log(flag)
        // axios.post('https://localhost:44317/api/Category/UpdateCategory', obj)
        //     .then(res => { this.props.history.push('/CategoryList') });
        axios.post('http://stpapi.spikotech.com/api/Users/'+ this.props.match.params.id, flag)
        .then(response => {
            console.log(response);
            this.props.history.push('/CategoryList')
        })
        .catch(error => {
            console.log("ERROR");
            this.props.history.push('/CategoryList')
        });
        e.preventDefault();
            //.then(res => { this.props.history.push('/CategoryList') });

    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Update Category Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" value={this.state.name} onChange={this.onChangeName}
                                    placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Enter Password" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
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
export default Edit;