import React, { Component } from 'react';
import axios from 'axios';
import IndividualAffiliate from "./IndividualAffiliate";
import AffiliateAddForm from "./AffiliateAddForm";

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
        console.log("Component mounted")
        axios.get(`/api/affiliate/`)
        .then(res => {
            this.setState({affiliates: res.data})
        })
    }

    render() {
        const affiliates=  this.state.affiliates;
        console.log(affiliates)
        const affiliateComponent = affiliates.map((affiliate, i) => {
            return <IndividualAffiliate
            {...affiliate}
            key={i} />
        })
        return (
            <div className="row">
                <h1>Your Affiliate Form Generator</h1>
                <AffiliateAddForm {...this.props} getAffiliateData={this._getAffiliateData}/>
                {affiliateComponent}
                
            </div>
        );
    }
}


export default Dashboard;