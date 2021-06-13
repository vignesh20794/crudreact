import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [body,setname] = useState();
    const [title,setemail] = useState();
    const [id,setage] = useState();

    function handleChange(e){
        setname(e.target.value)
    }

    function handleEmail(e){
        setemail(e.target.value)
    }
    function handleAge(e){
        setage(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        const obj = {
          id,
          title,
          body
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', obj)
            .then(res => alert('Created'));
        
        this.props.history.push('/list');
      }

    return (
        
            <div style={{marginTop: 10}}>
                <h3>Add Details</h3>
                <form>
                <div className="form-group">
                        <label>Id:</label>
                        <input type="number" className="form-control" value={id} onChange={handleAge}/>
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control" value={title} onChange={handleEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Body:</label>
                        <input type="text" className="form-control" value={body} onChange={handleChange}/>
                    </div>
                    <button disabled={!(id && title && body)} onClick={onSubmit}> submit</button>
                </form>
            </div> 
    )
}
