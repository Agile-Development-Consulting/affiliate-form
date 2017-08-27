import React, { Component } from 'react';
import HtmlOne from './HtmlOne';

class IndividualAffiliate extends Component {
    render() {
        const affiliate = this.props;
        return (
            <div>
                <div class="row">
                <p><strong>Affiliate Name:</strong> {this.props.name}</p>
                <p><strong>Affiliate Link:</strong> {this.props.link}</p>
                <p><strong>Affiliate Token:</strong> {this.props.token}</p>
                <button>Get HTML Template</button>
                </div>
                <div class="row">
                <HtmlOne affiliate={affiliate}/>
                </div>
            </div>
        );
    }
}

export default IndividualAffiliate;