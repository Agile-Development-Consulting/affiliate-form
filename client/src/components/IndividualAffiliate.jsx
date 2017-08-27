import React, { Component } from 'react';
import HtmlOne from './HtmlOne';
import { Link, Redirect } from 'react-router-dom';

class IndividualAffiliate extends Component {
    render() {
        const affiliate = this.props;
        return (
            <div>
                <div class="row">
                <p><strong>Affiliate Name:</strong> {this.props.name}</p>
                <p><strong>Affiliate Link:</strong> {this.props.link}</p>
                <p><strong>Affiliate Token:</strong> {this.props.token}</p>
                <div>
                <Link 
                    to={{
                        pathname: `/${this.props._id}/html-one`,
                        state: { affiliate: this.props }
                    }}>
                HTML one
                </Link>
                </div>
                <div>
                <Link 
                    to={{
                        pathname: `/${this.props._id}/html-two`,
                        state: { affiliate: this.props }
                    }}>
                HTML two
                </Link>
                </div>
                <div>
                <Link 
                    to={{
                        pathname: `/${this.props._id}/html-three`,
                        state: { affiliate: this.props }
                    }}>
                HTML three
                </Link>
                </div>
                </div>
                <div class="row">
                </div>
            </div>
        );
    }
}

export default IndividualAffiliate;