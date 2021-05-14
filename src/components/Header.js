import React from 'react'
import styled from "styled-components"
import homelogo from "./home-logo.svg"
import search from "./search-icon.svg"
import navhome from "./nav-home.svg"
import navjobs from "./nav-jobs.svg"
import navnotifications from "./nav-notifications.svg"
import navnetwork from "./nav-network.svg"
import navwork from "./nav-work.svg"
import navmessage from "./nav-messaging.svg"
import user from "./user.svg"
import down from "./down-icon.svg"
import { connect } from 'react-redux'


import { signOutAPI } from "../actions"





function Header(props) {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src={homelogo} alt="" />
                    </a>
                </Logo>

                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>

                    <SearchIcon>
                        <img src={search} alt="" />
                    </SearchIcon>

                </Search>

                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a >
                                <img src={navhome} alt="" />
                                <span>Home</span>

                            </a>
                        </NavList>

                        <NavList>
                            <a >
                                <img src={navnetwork} alt="" />
                                <span> My Network</span>

                            </a>
                        </NavList>
                        <NavList>
                            <a >
                                <img src={navnotifications} alt="" />
                                <span>Notifications</span>

                            </a>
                        </NavList>
                        <NavList>
                            <a >
                                <img src={navjobs} alt="" />
                                <span>Jobs</span>

                            </a>
                        </NavList>
                        <NavList>
                            <a >
                                <img src={navwork} alt="" />
                                <span>Work</span>

                            </a>
                        </NavList>

                    </NavListWrap>

                </Nav>
                <NavListm>
                    <a href="">
                        <img src={navmessage} alt="" />
                        <span>Messages</span>

                    </a>
                </NavListm>
                <User>
                    <a>
                        {props.user && props.user.photoURL ? (<img className="user__image" src={props.user.photoURL} alt="" />) :
                            (<img className="user__image" src={user} alt="" />)}
                        {/* <span>Me</span> */}
                        <img src={down} alt="" />
                    </a>
                    <SignOut onClick={() => props.signOut()}>
                        <a >Sign Out</a>

                    </SignOut>
                </User>


            </Content>
        </Container>
    )
}

const Container = styled.div`
background-color:#fff;
border-bottom:1px solid #b8b7b7;
left:0;
padding:8px 24px;
position:fixed;
top:0;
width:100vw;
z-index:100;


`

const Content = styled.div`
display:flex;

align-items:center;
margin :0 auto;
min-height:100%;
max-width:1128px;
`
const Logo = styled.span`
margin-right:10px;
font-size:0px;

@media(max-width:768px){
   display:none;
}

`

const Search = styled.div`
opacity:1;
flex-grow:1;

position:relative;
&>div{
    max-width:280px;
    input{
        border:none;
        box-shadow:none;
        background-color:#eef3f8;
        border-radius:2px;
        color:rgba(0,0,0,0.9);
        width:190px;
        padding:0 8px 0 40px;
        line-height:1.75;
        font-weight:400;
        font-size:14px;
        height:34px;
        border-color:#dce6f1;
        vertical-align:text-top;
        

    }
}
@media(max-width:768px){
    margin-left:35px;
}

`

const SearchIcon = styled.div`
width:40px;
position:absolute;
z-index:1;
top:10px;
left:2px;
margin:0;
pointer-events:none;
display:flex;
justify-content:center;
align-items:center;

`
const Nav = styled.nav`
margin-bottom:auto;
display:block;
@media(max-width:768px){
position:fixed;
left:0;
bottom:0;
margin-left:5vw;
background:white;
width:100%;
}
`
const NavListWrap = styled.ul`
padding:0;
display:flex;
flex-wrap:nowrap;
list-style-type:none;

.active{
    
    border-bottom:2px solid black;
}
`



const NavList = styled.li`
display:flex;
align-items:center;
a{  align-items:center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-weight:400;
    justify-content:center;
    line-height:1.5;
    min-height:52px;
    min-width:80px;
    position:relative;
    text-decoration:none;
    cursor:pointer;

    span{
        color:rgba(0,0,0,0.6);
        display:flex;
align-items:center;
    }

    @media(max-width:768px){
        min-width:70px;
    }

}
&:hover, &:active{
a{
    span{
        color:rgba(0,0,0,0.9);
        font-weight:600;
    }
}
}

`
const NavListm = styled.li`
display:flex;

align-items:center;
a{  align-items:center;
margin-right:10px;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-weight:400;
    justify-content:center;
    line-height:1.5;
    min-height:52px;
    min-width:80px;
    position:relative;
    text-decoration:none;

    span{
        color:rgba(0,0,0,0.6);
        display:flex;
align-items:center;
@media(max-width:768px){
        min-width:70px;
        color:#fff;
      
      
    }
    }

    @media(max-width:768px){
        min-width:70px;
      
    }

}
&:hover, &:active{
a{
    span{
        color:rgba(0,0,0,0.9);
        font-weight:600;
    }
}
}
@media(max-width:768px){
    &:hover, &:active{
a{
    span{
        color:#ffffff;
        font-weight:600;
    }
}
      
    }
}

`
const SignOut = styled.div`

position: absolute;
top:55px;
background:white;
border-radius:2px;
width:100px;
height:40px;
font-size:16px;
text-align:center;
transition-duration:167ms;
display:none;

@media(max-width:768px){
    width:75px;
    font-size:12px;
}

`




const User = styled.div`
a{
    display:flex;
    cursor:pointer;
    margin-left:10px;
    flex-direction:column;
    .user__image{
        width:24px;
    }
    
    img{
        
        
        border-radius:50px;
    }

}
&:hover{
    ${SignOut}{
        align-items:center;
        display:flex;
        justify-content:center;
        background-color: #e9fbff;
        color:#0092cc;
    }
}

@media(max-width:768px){
    position:fixed;
left:0;
top:0;
padding:10px;
margin-right:10px;

    
}
`


const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
