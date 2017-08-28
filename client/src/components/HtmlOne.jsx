import React, { Component } from 'react';
import axios from 'axios';

class HtmlOne extends Component {
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
    componentWillMount() {
        this._getAffiliateData();
    }
    _getAffiliateData = () => {
        axios.get(`/api/affiliate/${this.props.match.params.affiliateId}`)
        .then(res => {
            this.setState({affiliate: res.data})
        })
    }
    render() {
        return (
            <div>
                <pre>{`
                <html>
                
                ​
                
                <head>
                
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                
                    <meta content="width=device-width" name="viewport" />
                
                </head>
                
                ​
                
                <body>
                
                    <table style="width: 100%;">
                
                        <tbody>
                
                            <tr>
                
                                <td>
                
                                    
                
                                    <table style="max-width: 480px; margin: 0 auto; padding: 0;">
                
                                        <tbody>
                
                                            <tr>
                
                                                <td>
                
                                                     <h5 style="font-family: 'Raleway',
                
                'Helvetica',
                
                'Arial', sans-serif; text-align: center; line-height:
                
                1.3;
                
                font-size: 24px; margin: 0 0 20px 0; padding: 0;
                
                font-weight: bold; color:
                
                #12636b;">
                
                                  </h5>
                
                                                    <p style="font-family: 'Merriweather',
                
                'Helvetica', 'Arial',
                
                sans-serif; color: #222222; text-align:
                
                center; line-height: 25px; font-size: 17px; margin: 0 0
                
                20px; padding: 0;"><a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/hope_main_Full.png" style="display: block; margin: 0
                
                auto;" width="100%" /></a><br>
                
                                                        <strong>Sign Up Today for this FREE Online Christian Conference for Parents Through September 30, 2017. <br><br>50+ Amazing Speakers Will Provide Tips and Encouragement to Help You and Your Teens Build Lifelong Faith.</strong>
                
                                                    </p><p style="font-family: 'Merriweather',
                
                'Helvetica', 'Arial',
                
                sans-serif; color: #222222; text-align:
                
                left; line-height: 25px; font-size: 17px; margin: 0 0
                
                16px; padding: 0;">
                
                                                       <strong>Speakers & Topics Including:</strong><br><br>
                
                                                   <a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-23-at-8.27.10-AM.png" style="display: block; margin: 0
                
                                                   auto;" width="100%" /><br><img src="https://axis.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-23-at-8.20.40-AM.png" style="display: block; margin: 0
                
                                                   auto;" width="100%" /><br><img src="https://axis.org/wp-content/uploads/2017/08/${this.state.affiliate.token}-1.png" style="display: block; margin: 0
                
                auto;" width="100%" /></a><p style="font-family: 'Merriweather',
                
                'Helvetica', 'Arial',
                
                sans-serif; color: #222222; text-align:
                
                right; line-height: 25px; font-size: 17px; margin: 0 0
                
                16px; padding: 0;"><strong>And So Many More: </strong>
                
                                                    <br><br><a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-23-at-8.36.42-AM.png" style="display: block; margin: 0
                
                auto;" width="100%" /></a><p style="font-family: 'Merriweather',
                
                'Helvetica', 'Arial',
                
                sans-serif; color: #222222; text-align:
                
                left; line-height: 25px; font-size: 17px; margin: 0 0
                
                16px; padding: 0;"><strong>Here's What You Get: </strong><br><br>
                
                                                    <a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-23-at-8.56.57-AM.png" style="display: block; margin: 0
                
                auto;" width="100%" /></a><br><a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-23-at-8.55.17-AM.png" style="display: block; margin: 0
                
                auto;" width="100%" /></a>
                
                                                </td>
                
                                            </tr>
                
                                            <tr>
                
                                                <td style="background: #ff2a2a">
                
                                                    <p style="font-family: 'Raleway', 'Helvetica',
                
                'Arial',
                
                sans-serif; color: #eeeeee; text-align: center;
                
                line-height: 25px; font-size: 17px; padding: 5;"> Please feel free to forward this email to a friend or colleague.<br>
                
                                                </td>
                
                                            </tr>
                
                                        </tbody>
                
                                    </table>
                
                                    <table style="max-width: 480px; margin: 0 auto;">
                
                                        <tbody style="color: #9b9b9b; font-family: 'Raleway', 'Helvetica', 'Arial',
                
                sans-serif; line-height: 24px; font-size:
                
                14px;">
                
                                            <tr>
                
                                                <td style="text-align: center; width: 100%; padding: 10px;" valign="top">
                
                                                    <a href="https://axis.org/">axis.org</a>|501(c)3|888-719-2947|&copy; 2017
                
                                                </td>
                
                                            </tr>
                
                                        </tbody>
                
                                    </table>
                
                                    <table style="max-width: 480px; margin: 0 auto;">
                
                                        <tbody style="color: #9b9b9b; font-family: 'Raleway', 'Helvetica', 'Arial',
                
                sans-serif; line-height: 24px;
                
                font-size: 14px;">
                
                                            
                
                                        </tbody>
                
                                    </table>
                
                                </td>
                
                            </tr>
                
                        </tbody>
                
                    </table>
                
                </body>
                
                ​
                
                </html>`}
                </pre>
            </div>
        );
    }
}

HtmlOne.defaultProps = {
    affiliate: {
        name: '',
        link: '',
        token: ''
    }
 }

export default HtmlOne;