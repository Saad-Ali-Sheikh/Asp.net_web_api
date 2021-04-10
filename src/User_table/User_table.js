import React from 'react';
import axios from 'axios';
//import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Price: '',
        }
    }
    componentDidMount() {
        axios.get('http://stpapi.spikotech.com/api/Users')
            .then(response => {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div>saad ali</div>
        );
    }
}
export default Table;