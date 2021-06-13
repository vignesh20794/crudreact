import React, { Component } from 'react';
import { BrowserRouter as  Router, Switch, Route, Link  } from 'react-router-dom';
import Edit from './Editcomp';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.obj.id)
            .then(alert('deleted'))
            .catch(err => console.log(err))
    }
    
  render() {
    return (
        <Router>
            <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.body}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
        <Switch>
        <Route path='/edit/:id' component={ Edit } />
        </Switch>
        </Router>
    );
  }
}

export default TableRow;