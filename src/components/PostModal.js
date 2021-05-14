import { useState } from "react"
import styled from "styled-components"
import user from "./user.svg"
const PostModal = (props) => {

const [editortext, setEditortext] = useState('')

    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/close.png" alt="" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src={user} alt="" />
                        <span>Name</span>
                    </UserInfo>
                    
                </SharedContent>
                <SharedCreation>
                    <AttachAssets>
                        <AssetButton>
                            <button>
                                <img src="https://freeiconshop.com/wp-content/uploads/edd/image-square-outline.png" alt="" />

                            </button>
                        </AssetButton>
                        <AssetButton>
                            <button>
                                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/video_camera-512.png" alt="" />

                            </button>
                        </AssetButton>
                    </AttachAssets>
                    <ShareComment>
                        <AssetButton>
                            <button>
                                <img src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png" alt="" />
                                <span>Comment</span>

                            </button>
                        </AssetButton>
                    </ShareComment>
                    <PostButton>
                      Post
                     
                    </PostButton>
                </SharedCreation>
            </Content>
        </Container>)
}

const Container = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:99999;
color:black;
background-color:rgba(0,0,0,0.7)

`
const Content = styled.div`
width:100%;
max-width:552px;
background-color:white;
max-height:90%;
overflow:initial;
border-radius:5px;
position:relative;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto;
`
const Header = styled.div`
display:flex;
padding:16px 20px;
border-bottom:1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.7);
font-weight:400;
justify-content:space-between;
align-items:center;
button{
    background:transparent;
    border:none;
    cursor: pointer;
    border-radius:50px;
    img{
        padding:8px 4px;
        width:10px;
    }
    &:hover{
        background-color:#eaeaff;
    }
}`

const SharedContent = styled.div`

display:flex;
flex-direction:column;
flex-grow:1;
overflow-y:auto;
vertical-align:baseline;
background:transparent;
padding:8px 12px;

`

const UserInfo = styled.div`
display:flex;
align-items:center;
padding:12px 24px;

img{
    width:40px;
    background-clip:content-box;
    border:2px solid gray;
    border-radius:50px;
    margin-right:8px;
}
span{
    font-weight:600;
    font-size:18px;
    line-height:1.3em;
}

`



const SharedCreation = styled.div`
display:flex;
justify-content:space-between;
padding:12px 24px 12px 16px;
`

const AttachAssets = styled.div`
align-items:center;
display:flex;
padding-right:8px;
`

const AssetButton = styled.div`
button{
    display:flex;
    align-items:center;
    height:40px;
    min-width:auto;
    color:rgba(0,0,0,0.5);
    background:none;
    border:1px solid gray;
    border-radius:8px;
    margin-right:5px;

  
}
img{
        width:30px;
        
    }
`

const ShareComment = styled.div`
margin-right:auto;
padding-left:8px;
border-left:1px solid #d6d6d6;
`

const PostButton = styled.button`
border-radius:18px;
border:1px solid #a7a7a7;
min-width:70px;
color:#274fff;
background:#f5f5ff;

&:hover{
    background:#bdbdda;
    color:#0004ff;
    font-weight:500;
}
`

export default PostModal