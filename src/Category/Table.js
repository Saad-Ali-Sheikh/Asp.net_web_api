import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Table extends Component {
    constructor(props) {
        super(props);
    }
    DeleteCategory = () => {
        axios.post('http://stpapi.spikotech.com/api/Users/' + parseInt(this.props.obj.id) + "/" + 1)
            .then(json => {
                alert('Record deleted successfully!!');
            })
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={this.DeleteCategory} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default Table;