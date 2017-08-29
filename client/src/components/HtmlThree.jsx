import React, { Component } from 'react';
import axios from 'axios';

class HtmlThree extends Component {
    constructor() {
        super();
        this.state = {
            affiliate: {
                    name: '',
                    link: '',
                    token: '',
                    date: ''
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
                <xmp>{`
                <html>
                <head>
                    <meta content="text/html; charset=utf-8" http-equiv="content-type" />
                    <meta content="width=device-width" name="viewport"/>
                </head>
                
                <body>
                    <table style="width:100%">
                    <tbody>
                        <tr>
                            <td align="center">
                            <table style="max-width: 480px; margins: 0,auto; padding: 0;">
                                <tbody>
                                    <tr>
                                    <td>
                                        
                                    <p style="font-family: 'Raleway','Helvetica','Arial', sans-serif; text-align: leftr; line-height: 1.3; font-size: 12px; margin: 0 0 20px 0; font-weight: light; color: #596474">
                                    </p>
                                        
                                    <p>
                                        <a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/hope_main_Full.png" align= "middle" style= "display:block; margin: 0 auto;" width="100%"/>
                                        </a>
                                        <br>
                                        <p style= "font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif; text-align: left; line-height: 1.75; font-size: 16px" >
                                            Sign up today for this <a href="${this.state.affiliate.link}">FREE online Christian conference</a> for parents through September 30, 2017. 
                                         <br><br>
                                            50+ Amazing speakers, including our very own ${this.state.affiliate.name}, provide tips and encouragement to help you and your teens build lifelong faith with a session releasing <b>${this.state.affiliate.date}</b>.<br><br><a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/${this.state.affiliate.token}-3.png" align= "middle" style= "display:block; margin: 0 auto;" width="88%"/>
                                        </a><br>
                                              <div style="text-align: center"><a href="${this.state.affiliate.link}"> 
                                <button class="button button1" style="font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif; font-weight:light">
                                    CLICK HERE to Sign Up for the Summit
                                </button>
                                </a>
                                        </p>
                  
                                         <p style= "font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif; text-align: left; line-height: 1.75; font-size: 16px" ><br>
                                             The goal of this <a href="${this.state.affiliate.link}">online conference</a> is to help you help your students build lifelong faith in Jesus. Our friends at Axis (the hosts of this summit) will have three categories for this <a href="${this.state.affiliate.link}">summit</a>:
                                        </p>
                                        
                                        <div style="text-align: center">
                                           <div style="display: inline-block; text-align: left">
                     <table>
                        <tr>
                        <td>
                                        
                                    <style>  
                                         .p1 {
                                             text-indent: 0px;
                                         }
                            
                                        .p2 {
                                            margin-left: 22px;
                                            text-indent: 0px;
                                            
                                         }
                                    </style>
                            <a href="${this.state.affiliate.link}"><img src="https://axis.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-23-at-8.28.13-PM.png" align= "middle" style= "display:block; margin: 0 auto;" width="100%"/></a><br>
                      </tr>
                      </table>          
                                    
                                        </div>
                                        </div>
                    
                                        <div style="text-align: center">
                                            
                                <a href="${this.state.affiliate.link}"> 
                                <button class="button button1" style="font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif; font-weight:light">
                                    CLICK HERE to Get Your FREE Summit Ticket
                                </button>
                                </a>
                                        </div> 
                                    
                                <h4 style="font-family: 'Raleway', 'Helvectic', 'Arial', sans-serif; text-align: left; line-height: 1.5; font-size: 22px; margin 0 auto; font-weight: bold; color: #ff2a2a">
                                Experts will cover topics like
                                </h4>
                                        
                                        <div style="width:30px;height:5px;background-color:#596474;"></div>
                                        
                                     <style>  
                                         li {
                                             list-style-position: inside;
                                             text-indent: -1.3em;
                                         }
                                        li:before {
                                            content: "\\2605";
                                            color: #301dea;
                                            }
                                    </style>
                    
                                       <div style="text-align: center">
                                           <div style="display: inline-block; text-align: left">
                                               
                                               <ul style="list-style-type: none; font-family: 'Raleway', 'Helvetica','Arial', sans-serif; text-align: left; line-height: 1.75; font-size: 16px; font-weight: light; color: black;">
                                                   <li>  Your Teenager's Not Crazy - Jeramy & Jerusha Clark </li>
                                                   <li>  Addictions & Your Family - Dr. Doug Weiss </li>
                                                   <li>  Teens, The Screen & Your Family - Dr. Kathy Koch</li>
                                                   <li>  Sexuality in the Next Generation - Dr. Juli Slattery</li>
                                                   <li>  What Should A Grandparent Do? - Larry Fowler</li>
                                                   <li>  Building Faith as a Family - Steve Arterburn</li>
                                                   <li>  Save Your Marriage While Raising Kids - Dr. Les Parrott</li>
                                                   <li>  Missions Trips & Your Family - Mark & Cathy Cornelison</li>
                                               </ul>
                                               
                                           </div>
                                        </div>
                    
                                <h4 style="font-family: 'Raleway', 'Helvectic', 'Arial', sans-serif; text-align: center; line-height: 1.5; font-size: 16px; margin 0 auto; font-weight: bold; color: #596474">
                                See all of the speakers and topics:
                                </h4>
                    
                                        <style>
                                            .button {
                                                background-color: #301dea;
                                                border: none;
                                                color: white;
                                                padding: 15px 32px;
                                                text-align: center;
                                                text-decoration: none;
                                                display: inline-block;
                                                font-size: 16px;
                                                margin: 0,auto;
                                                -webkit-transition-duration: 0.4s;
                                                cursor: pointer;
                                            }
                                            .button1 {
                                                background-color: #301dea;
                                                color: white;
                                                
                                            }
                                            .button1:hover {
                                                background-color: #C57368;
                                                color: white;
                                            }
                                            .button2 {
                                                background-color: #89DBE0;
                                                color: white;
                                                
                                            }
                                            .button2:hover {
                                                background-color: #70AFB2;
                                                color: white;
                                            }
                                            .button3 {
                                                background-color: #301dea;
                                                color: white;
                                                
                                            }
                                            .button3:hover {
                                                background-color: #538FAD;
                                                color: white;
                                            }
                                        </style>
                    
                                    <div style="text-align: center">
                                        <a href="${this.state.affiliate.link}"> 
                                            <button class="button button1" style="font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif; font-weight:light">
                                                CLICK HERE: Join The Parenting Teens Summit
                                            </button>
                                        </a>
                                    </div>
                    
                                        </p>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                        
                        </tr>
                        
                    </tbody>
                       
                    
                </body>
                </html>`}
                </xmp>
            </div>
        );
    }
}

HtmlThree.defaultProps = {
    affiliate: {
        name: '',
        link: '',
        token: ''
    }
 }

export default HtmlThree;