import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: '',
            title: '',
            body:''
          }
         
      }
      onChangeId(e) {
        this.setState({
          id: e.target.value
        });
      }
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        })  
      }
      onChangeBody(e) {
        this.setState({
          body: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();
        const obj = {
          id: this.state.id,
          title: this.state.title,
          body: this.state.body
        };
        axios.post('https://jsonplaceholder.typicode.com/posts'+this.props.match.params.id, obj)
            .then(res => alert('updated'));
        
        this.props.history.push('/list');
      }
      
      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
        .then(response => {
            console.log(response)
            this.setState({ 
              id: response.data.id, 
              title: response.data.title,
              body: response.data.body });
        })
        .catch(function (error) {
            console.log(error);
        })
      }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3 align="center">Update</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Id:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.id}
                      onChange={this.onChangeId}
                      />
                </div>
                <div className="form-group">
                    <label>Title: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Body: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.body}
                      onChange={this.onChangeBody}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}