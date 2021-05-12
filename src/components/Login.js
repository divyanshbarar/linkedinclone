import React from 'react'
import styled from 'styled-components'
import "./Login.css"
import loginlogo from "./login-logo.svg"
import loginhero from "./login-hero.svg"
import google from "./google.svg"

function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src={loginlogo} alt="" />

                </a>
                <div className="signin">
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign In
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your proffesional community</h1>
                    <img src={loginhero} alt="" />

                </Hero>

                <Form>
                    <Google>
                        <img src={google} alt="" />
                        Sign in with Google
                    </Google>

                </Form>
            </Section>
        </Container>
    )

}

const Container = styled.div`
padding: 0px;
`
const Nav = styled.nav`
max-width:1128px;
margin:auto;
padding:12px  16px;
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
flex-wrap:nowrap;

&>a{
    width:clamp(40px,20vw,140px);
    height:34px;
    @media(max-width:760px){
        padding:0 5px;
    }
}

`
const Join = styled.nav`
font-size:16px;
padding:10px 12px;
text-decoration:none;
color:rgba(0,0,0,0.65);
margin-right:12px;
border-radius:4px;

&:hover{
    background-color:rgba(0,0,0,0.09);
    color:rgba(0,0,0,0.9);
    text-decoration:none;
   
}
`
const SignIn = styled.a`
box-shadow:inset 0 0 0 1px #0a66c2;
color:#0a66c2;
border-radius:25px;
padding:5px 25px;
transition-duration:167ms;
font-size:16px;
font-weight:600;
line-height:40px;
text-align:center;
background-color:#fff;
cursor: pointer;

&:hover{
    background-color:#d8ebff;
    font-weight:900;
    text-decoration:none;
}
`
const Section = styled.section`

align-content:start;
display:flex;
flex-direction:column;
min-height:700px;
padding-bottom:130px;
padding-top:40px;
padding:60px 0;
position: relative;
flex-wrap:nowrap;
width:100%;
max-width:1128px;

margin:auto;
@media(max-width: 768px){
    margin:auto;
    min-height:0px;
    align-items:center;
}




`
const Hero = styled.div`
width:100%;

h1{
    
    padding-bottom:0;
    width:55%;
    font-size:55px;
    color:#0a66c2;
    font-weight:200;
    line-height:70px;
    @media(max-width: 768px){
        text-align:center;
        font-size:20px;
        width:100%;
        line-height:2;
    }
}

img{
    /* z-index:-1; */
    width:700px;
    height:670px;
   position: absolute;
   bottom:-2px;
   right:-150px;
   @media(max-width: 768px){
       top:230px;
       width:initial;
       position:initial;
       height:initial;
   }
}
`


const Form = styled.div`
margin-top:100px;
width:300px;
padding:0;


@media(max-width: 768px){
    margin-top:20px;
    margin-left:50px;
}


`

const Google = styled.button`
padding:0;
display:flex;
justify-content:center;
background-color:#fff;
align-items:center;
height:56px;
width:100%;
border-radius:28px;
border:none;
box-shadow: 5px 5px 5px 1px #474849;

z-index:0;
transition-duration:167ms;
font-size:20px;
color:rgba(0,0,0,0.6);
cursor: pointer;
 &:hover{

    background-color:rgba(207,207,207,0.25);
    color:rgba(0,0,0,0.76);
 
 }
 @media(max-width: 768px){
    width:75%;
    vertical-align:middle;
    right:0;
    left:0;
}
`

export default Login
