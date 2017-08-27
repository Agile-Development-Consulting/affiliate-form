import React, { Component } from 'react';
import axios from 'axios';

class AffiliateAddForm extends Component {

    constructor() {
        super();
        this.state = {
            affiliate: {
                name: '',
                link: '',
                token: ''
            }
        }
    }
    _handleChange = (e) => {
        const attributeName = e.target.name;;
        const attributeValue = e.target.value;
        const affiliate = {...this.state.affiliate};
        affiliate[attributeName] = attributeValue;
        this.setState({ affiliate })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state;
        axios.post(`/api/affiliate/create`, payload)
        .then((res) => {
            console.log("success")
            this.props.getAffiliateData();
            this.setState({affiliate: {name: '', link: '', token: ''}})
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="addNewFood">
            <div className="row">
                <h2>Add new affiliate:</h2>
                <form className="addNewFoodForm" onSubmit={this._handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Affiliate Name: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.affiliate.name} 
                            name="name"
                            placeholder="New Affiliate Name"
                        />
                </div>
                <div className="form-field">
                <label htmlFor="link">Affiliate Link: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.affiliate.link} 
                            name="link"
                            placeholder="New Affiliate Link"
                        />
                </div>
                <div className="form-field">
                <label htmlFor="token">Affiliate Token: </label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.affiliate.token} 
                            name="token"
                            placeholder="New Affiliate Token"
                        />
                </div>
                <button className="primary">Add New Affiliate to Database</button>
                </form>
            </div>
            </div>
        );
    }
}

export default AffiliateAddForm;