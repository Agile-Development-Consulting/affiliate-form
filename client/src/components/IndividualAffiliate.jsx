import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class IndividualAffiliate extends Component {

    _deleteAffiliate = (e) => {
        const affiliateId = this.props._id;
        axios.delete(`/api/affiliate/${affiliateId}`)
        .then(res => {
            this.props.getAffiliateData();
        })
        
    }
    render() {
        return (
            <div>
                <div className="row">
                <p><strong>Affiliate Name:</strong> {this.props.name}</p>
                <p><strong>Affiliate Link:</strong> {this.props.link}</p>
                <p><strong>Affiliate Token:</strong> {this.props.token}</p>
                <button className="delete" onClick={this._deleteAffiliate}>Delete Affiliate</button>
                <div>
                <Link 
                    to={{
                        pathname: `/${this.props._id}/html-one`
                    }}>
                HTML one
                </Link>
                </div>
                <div>
                <Link 
                    to={{
                        pathname: `/${this.props._id}/html-two`
                    }}>
                HTML two
                </Link>
                </div>
                <div>
                <Link 
                    to={{
                        pathname: `/${this.props._id}/html-three`
                    }}>
                HTML three
                </Link>
                </div>
                </div>
                <div className="row">
                
                </div>
            </div>
        );
    }
}


export default IndividualAffiliate;