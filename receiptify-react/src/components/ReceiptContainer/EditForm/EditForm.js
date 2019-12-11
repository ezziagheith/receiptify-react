import React, { Component } from 'react';

import './EditForm.css'

class EditForm extends Component {
    state ={
        body: this.props.receipt.body,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form onSubmit={(e) => this.props.handleEditSubmit(e, {...this.state, _id: this.props.receipt._id})}>
                    <div className="form-group description-area">
                        <label htmlFor="body">Description</label>
                        <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={this.state.body} />
                    </div>
                    <button id="login-button"className="btn btn-primary save-button-onedit" type="submit">Save</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default EditForm;
