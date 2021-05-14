import { useState } from "react"
import styled from "styled-components"
import user from "./user.svg"
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase"
import postArticleAPI from "../actions"
const PostModal = (props) => {

const [editortext, setEditortext] = useState('')

const [shareImage, setShareImage] = useState("")

const [videoLink, setVideoLink]= useState("")


const [assetArea, setAssetArea] = useState("")

const handleChange=(e)=>{
    const image= e.target.files[0];

    if(image===""|| image===undefined){
        alert(`not an image, the file is ${typeof image}`)
        return;
    }

    setShareImage(image);
};

const switchAssetArea =(area)=>{
    setShareImage("");
    setVideoLink("")
    setAssetArea(area)


}
const postArticle=(e)=>{
    e.preventDefault();
    if(e.target !== e.currentTarget){
        return;
    }

    const payload={
        image:shareImage,
        video:videoLink,
        user:props.user,
        description:editortext,
        timestamp:firebase.firestore.Timestamp.now()
    }

    props.postArticle(payload)
    reset(e)

}

const reset=(e)=>{
    setEditortext("")
    setVideoLink("")
    setShareImage("")
    setAssetArea("")
    props.handleClick(e);
   


}

    return (
        <>
{ 
       props.showModal=== "open" && (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button >
                        <img onClick={(event)=>reset(event)} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/close.png" alt="" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        {props.user.photoURL ? <img src={props.user.photoURL} alt="" />:<img src={user} alt="" />}
                        
                        <span>{props.user.displayName}</span>
                    </UserInfo>
                    <Editor>
                    <textarea value={editortext} 
                    autoFocus={true}
                    placeholder="What do you want to talk about
                    (Righ Now this project is in Build mode so Image or video Link is required)"
                    onChange={(e)=>setEditortext(e.target.value)}
                    />
{ assetArea==="image" ? (   <UploadImage>
<input  type="file" 
onChange={handleChange}
accept="image/gif, image/jpeg, image/png" name="image" id="file" style={{display:"none"}} />
<p><label htmlFor="file">Select an image </label></p>
{shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />  }



                   </UploadImage>)
                   : assetArea==="media" &&
                   (

                    <>
                    <input type="text" 
                    value={videoLink}
                    onChange={(e)=>setVideoLink(e.target.value)}
                    placeholder="video Link" />
                    {
                        videoLink && <ReactPlayer width={"100%"} url={videoLink}/>
                    }
                    </>
                   )

}
                
                    </Editor>
                  
                </SharedContent>
                <SharedCreation>
                    <AttachAssets>
                        <AssetButton>
                            <button onClick={()=>switchAssetArea("image")}>
                                <img src="https://freeiconshop.com/wp-content/uploads/edd/image-square-outline.png" alt="" />

                            </button>
                        </AssetButton>
                        <AssetButton>
                            <button onClick={()=>switchAssetArea("media")}>
                                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/video_camera-512.png" alt="" />

                            </button>
                        </AssetButton>
                    </AttachAssets>
                    <ShareComment>
                        <AssetButton>
                            {/* <button>
                                <img src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png" alt="" />
                                <span>Comment</span>

                            </button> */}
                        </AssetButton>
                    </ShareComment>
                    <PostButton 
                    onClick={(event)=>postArticle(event)}
                    disabled={!editortext ? true: false}>
                      Post
                     
                    </PostButton>
                </SharedCreation>
            </Content>
        </Container>

        ) }
        </>
        )
}

const Container = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:99999;
color:black;
background-color:rgba(0,0,0,0.7);
animation:fadIn 0.3s;

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
/* color:#0011ff; */
/* background:#f5f5ff; */

&:hover{
    background:#e9e9ff;
    color:#0004ff;
    font-weight:500;
}
`

const Editor= styled.div`
padding:12px 24px;
textarea{
    width:100%;
    min-height:100px;
    resize:none;
    margin-bottom:20px;
}
input{
    width:100%;
    height:35px;
    font-size:16px;
    margin-bottom:20px;
}
`

const UploadImage=styled.div`
text-align:center;
color:blue;
img{
    width:100%;
}
`


const mapStateToProps = (state) => {
    return {

        user:state.userState.user,
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({

    postArticle: (payload)=>dispatch(postArticleAPI(payload)),
    
  })
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
  