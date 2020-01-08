import React, { Component } from "react"
import { MainDiv, LeftDiv, RightDiv, SecondDiv } from "./style"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import Button from "@material-ui/core/Button"
import { Link as LinkRoute } from "react-router-dom"

class Footer extends Component {
  render() {
    return (
      <div>
        <MainDiv>
          <LeftDiv>
            <h3>STAY CONNECTED</h3>
            <FacebookIcon style={{ margin: "10px" }} />
            <InstagramIcon style={{ margin: "10px" }} />
            <TwitterIcon style={{ margin: "10px" }} />
          </LeftDiv>
          <RightDiv>
            <h3>GET INVOLVED</h3>
            <Button variant="contained" style={{ backgroundColor: "orange" }}>
              DONATE
            </Button>
          </RightDiv>
        </MainDiv>
        <SecondDiv>
          <p>
            Copyright © 2018 Los Angeles Food Policy Council. All Rights
            Reserved
          </p>
          {
            this.props.user.isLogged
              ? ""
              : <Button
                component={LinkRoute}
                to='/SignIn'
                color="inherit"
                style={{ margin: '20px', color: 'red', fontWeight: 'bold', position: "relative", right: "2rem", bottom: "5px" }}
              >
                <i className="fas fa-user-lock"></i>
              </Button>
          }
        </SecondDiv>
      </div>
    )
  }
}

export default Footer
