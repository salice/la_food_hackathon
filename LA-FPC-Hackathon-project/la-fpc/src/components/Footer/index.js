import React, { Component } from 'react';
import { MainDiv, LeftDiv, RightDiv, SecondDiv, DonateText } from './style'
import Button from '@material-ui/core/Button';
import { Link as LinkRoute } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
class Footer extends Component {
    render() {
        return (
            <div>
                <MainDiv>
                    <RightDiv>
                    </RightDiv>
                </MainDiv>
                <SecondDiv>
                        <div style={{color: 'black',margin: '0 0 0 0', fontWeight:'bold', fontSize:'16px', position:'relative',left:'9.8rem',}}>DashBoard</div>
                        <div style={{margin: '27px 0px 0px -104px', color:'black', fontSize:'14px', position:'relative',left:'11rem',lineHeight:'2rem'}}>Sustainability<br></br>Health<br></br>Affordability<br></br>Fairness</div>
                        <div style={{color: 'black',margin: '0 0 0 0px', fontWeight:'bold', fontSize:'16px', position:'relative', left:'19rem', }}>Contact</div>
                        <div style={{margin: '28px', color:'black', fontSize:'14px', position: 'relative', left:'13.5rem', flex:'none',lineHeight:'2rem'}}>LAFCP Website<br></br>Contact Us<br></br>Mailing List</div>
                        <div style={{color: 'black', position:'relative', left:'30rem', top:'4.2rem',flex:'none'}}>LAFCP Employees Only</div>
                    <LeftDiv>
                    {
                        this.props.user.isLogged
                        ? ""
                        : <Button
                        component={LinkRoute}
                        to='/SignIn'
                        color="inherit"
                        style={{ margin: '20px', color: 'red', fontWeight: 'bold', position: "relative", right: "2rem", bottom: "5px" }}>
                            <div style={{position:'relative',top:'3rem',left:'14rem' }}>
                            <i className="fas fa-user-lock"></i>
                            </div>
                        </Button>
                }
                    </LeftDiv>
                <div style={{position:'relative', left: '25.5rem', color:'black', flex:'none',fontSize:'26px'}}>Connect With Us!</div>
                <div style={{position:'relative', left:'14rem',top:'4rem', display: "flex" }}>
                    <div style={{marginRight: "1rem", }}>
                        <SocialIcon url="https://instagram.com/lagoodfood" target="_blank"/>
                    </div>
                    <div style={{marginRight: "1rem"}}>
                <SocialIcon url="https://www.facebook.com/LosAngelesFoodPolicyCouncil/" target="_blank"/>
                    </div>
                <SocialIcon url="https://twitter.com/GoodFoodLA" target="_blank" />
                </div>
                <div style={{position:'relative', top:'12rem', left:'-49rem', flex:'none', color:'black', height:'20px', fontSize:'10px'}}>Copyright  © 2020 Los Angeles Food Policy Council. All Rights Reserved.</div>
                </SecondDiv>
            </div>
        )
    }
}
export default Footer