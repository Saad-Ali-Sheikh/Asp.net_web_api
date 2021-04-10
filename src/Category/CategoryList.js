import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
export default class Categorylist extends Component {
    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        axios.get('http://stpapi.spikotech.com/api/Users')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    
    tabRow() {
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
        });
    }
    render() {
        return (
            <div>
                <h4 align="center">Category List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan="4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}