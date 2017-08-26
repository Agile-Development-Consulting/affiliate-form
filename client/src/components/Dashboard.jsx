import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            affiliates: [
                {affiliate: {
                    name: '',
                    link: '',
                    token: ''
                }}
            ]
        }
    }
    componentWillMount() {
        this._getAffiliateData();
    }
    _getAffiliateData = () => {
        axios.get(`/api/affiliate/`)
        .then(res => {
            this.setState({affilates: res.data})
        })
    }
    render() {
        const affiliates=  this.state.affiliates;
        console.log(affiliates)
        return (
            <div>
                This is my dashboard.
            </div>
        );
    }
}

export default Dashboard;