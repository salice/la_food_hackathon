import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Iframe from 'react-iframe' 
import { MainDiv, LeftDiv, RightDiv, SecondDiv } from './style'
import Button from '@material-ui/core/Button';
import {HomeDiv,
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Text} from './style'
import afford from "./img/Affordability2.png"
import fair from "./img/Fairness2.png"
import health from "./img/Health3.png"
import sus from "./img/Sustainability2.png"
import Food from "./img/Food.png"
import Compost from "./img/Compost.png"
import Plant from "./img/Plant.png"
class Home extends Component {
    render() {
        return (
            <HomeDiv>
                    <HeaderDiv>
                        {/* <h1>Food System Dashboard</h1> */}
                    </HeaderDiv>
                    <TileDiv>
                        <a href='/sustainable'><Tiles src={sus} alt={"logo"} /></a>
                        <a href='/healthy'><Tiles src={health} alt={"logo"} /></a>
                        <a href='/affordable'><Tiles src={afford} alt={"logo"} /></a>
                        <a href='/fair'><Tiles src={fair} alt={"logo"} /></a>
                    </TileDiv>
                <div style={{ textAlign: 'center', alignItems: 'center', font: 'small'}}>
                    <h2>Every Angeleno deserves access to Good Food</h2>
                    <DescripDiv>
                        <Descrip>
                            The Los Angeles Food System Dashboard is a collection of over 250 indicators measuring the health, affordability,sustainability, and fairness of our local food system. 
                            The Dashboard assists us in telling an important narrative about how our food system is doing both locally and regionally, as our indicators span across Los Angeles as a city, county, and a foodshed, which comprises 10 counties in Southern California.
                            The Food System Dashboard is intended to be used to empower people involved in any sector that have a goal of creating a Good Food system for all Angelenos.
                        </Descrip>
                    </DescripDiv>
                </div>
                <Descrip>
                    </Descrip>
                    <div style={{position:'relative'}}>
                {/* <Iframe 
                        url="/Videos/final_fs.mp4"
                        display="relative"
                        right="50%"
                        width="400px"
                        height="250px"
                /> */}
                </div>
                    <DescripDiv>
                        <Descrip>
                        </Descrip>
                    </DescripDiv>
                    <Descrip>
                    <div style={{color:'green', }}>
                    <LeftDiv>
                        Los Angeles Food Policy Council believes Good Food for All is possible and that all communities deserve access to good food, grown in a way that respects people and the planet.
                    </LeftDiv> 
                    </div>
                    <LeftDiv>
                        <br></br>
                        We work to create a local food system free from hunger, rooted in equity and access, supportive of farmers and food workers, and guided by principles of environmental stewardship and regeneration. 
                        <br></br>
                        <br></br>
                        To accomplish our vision of Good Food for All, we catalyze, coordinate and connect people across the LA region, including government, business and community groups working on food.
                    </LeftDiv>
                    </Descrip>
                    <div style={{color:'black', position:'relative', left:'60rem', top:'-17rem',width:'max-content', fontSize:'27px'}}>Help Support Our Cause</div>
                        <Button variant="contained" style={{ backgroundColor: 'orange',left:'24.5rem',bottom:'16rem'}}>DONATE</Button>
                        {/* <h1>Case Studies</h1>
                    <UserImgDiv>
                    <UserImg src={Food}/>
                    <UserImg src={Compost}/>
                    <UserImg src={Plant}/>
                </UserImgDiv> */}
                    {/* <h3>Help Support Our Cause</h3>
                    <Button variant="contained" style={{ backgroundColor: 'orange', }}>DONATE</Button> */}
                </HomeDiv>
        )
    }
}
export default Home