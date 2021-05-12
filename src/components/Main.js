import React from 'react'
import user from "./user.svg"
import styled from "styled-components"
import PhotoShare from "./PhotoShare.png"
import video from "./video.png"
import event from "./event.png"
import article from "./article.png"
import ellepsis from "./ellepsis.png"
// import user from "./user.svg"
import shareImage from "./shareimage.jpeg"
import like from "./like.png"
import comment from "./comments.png"
import share from "./share.png"
import send from "./send.png"

function Main() {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src={user} alt="" />
                    <span>
                        Start a post
                    </span>
                </div>

                <div>
                    <button>
                        <img src={PhotoShare} alt="" />

                        <span>Photos</span>
                    </button>
                    <button>
                        <img src={video} alt="" />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src={event} alt="" />
                        <span>Event</span>
                    </button>
                    <button>
                        <img src={article} alt="" />
                        <span>Article</span>
                    </button>
                </div>

            </ShareBox>
            <Article>
                <SharedActor>
                    <a >
                        <img src={user} alt="" />
                        <div>
                            <span>Title</span>
                            <span>Info</span>
                            <span>Date</span>
                        </div>
                    </a>
                    <button>
                        <img src={ellepsis} alt="" />
                    </button>
                </SharedActor>
                <Description>Text blalalala</Description>
                <SharedImage>
                    <a >
                        <img src={shareImage} alt="" />
                    </a>
                </SharedImage>
                <Socialcounts>
                    <li>
                        <button> 55 Likes</button>

                    </li>
                    <li>
                        <button>
                            3 Comments
                        </button>

                    </li>
                </Socialcounts>
                <div className="socialbuttons">
                    <button>
                        <img src={like} alt="" />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src={comment} alt="" />
                        <span>Comment</span>
                    </button>
                    <button>
                        <img src={share} alt="" />
                        <span>Send</span>
                    </button>
                    <button>
                        <img src={send} alt="" />
                        <span>Share</span>
                    </button>
                </div>

            </Article>
        </Container>
    )
}
const Container = styled.div`
grid-area:main;`

const Commoncard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%)
`
const ShareBox = styled(Commoncard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
div{
    button{
        outline:none;
        color:#0682bb;
        font-size:14px;
        line-height:1.5;
        min-height:40px;
        cursor:pointer;
        
        
        border:none;
        background:transparent;
        display:flex;
        align-items:center;

        img{
            
            height:22px;
            margin-right:5px;
            
        }

    }
    &:first-child{
display:flex;
align-items:center;
padding:8px 16px 8px 16px;
 img{
     width:48px;
     border-radius:50px;
     margin-right:15px;
     cursor:pointer;
 }
span{
    margin:4px 0;
    flex-grow:1;
    padding:12px 16px;
    border:1px solid rgba(0,0,0,0.16);
    border-radius:35px;
    background-color:white;
    text-align:left;
}

    }

    &:nth-child(2){
        
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        padding-bottom:4px;
    }
}
`
const Article = styled(Commoncard)`
padding:0px;
margin:0 0 8px;
overflow:hidden;
.socialbuttons{
    padding-bottom:10px;
    button{
        padding:8px 12px;
        border-radius:8px;
        display:inline-flex;
        align-items:center;
        background-color:transparent;
        border:none;
        cursor:pointer;
        
        &:hover{
            background-color:#ebebeb;
            color:#001aff;
        }

        @media(max-width:768px){
            padding:4px;
        }
    }
    
    img{

        width:22px;
        
        margin-right:5px;
        
    }
}
`

const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
    img{
        width:48px;
       
    }
    margin-right:12px;
    flex-grow:1;
        overflow:hidden;
        display:flex;
        align-items:center;

        &>div{
            display:flex;
            flex-direction:column;
            flex-grow:1;
            flex-basis:0;
            margin-left:8px;
            overflow:hidden;

            span{
                text-align:left;

                &:first-child{
                   font-size:16px;
                   font-weight :700;
                   color:rgba(0,0,0,1)
                }

                &:nth-child(n+1){
                    font-size:12px;
                    color:rgba(0,0,0,0.6)
                }
            }

        }
}
button{
    background-color:transparent;
    cursor:pointer;
    border-radius:50px;
    padding:7px;
    border:none;
    right:12px;
    position:absolute;
    top:0;
    img{
    width:25px;
}
&:hover{
    background-color:#eeeeee
}
}

`


const Description = styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:16px;
text-align:left;


`
const SharedImage = styled.div`

margin-top:8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;
img{
    
    width:100%;
    object-fit:contain;
    height:100%;
}

`
const Socialcounts = styled.ul`
list-style:none;

display:flex;
justify-content:space-between;

padding:10px 10px;

button{
font-weight:560;
background-color:transparent;
border:none;
padding:3px 5px;
border-radius:5px;
cursor:pointer;
&:hover{
    background-color:#c3c3ff;
    font-weight:650 ;
}
}

`




export default Main
