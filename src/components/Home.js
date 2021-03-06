import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Leftside from './Leftside'
import Main from './Main'
import Rightside from './Rightside'
import { connect } from "react-redux"
import { Redirect } from 'react-router'

function Home(props) {

    return (
        <div>
            <Header />
            <Container>
                {!props.user && <Redirect to="/" />}
                <Layout>
                    <div>
                        <Leftside />
                    </div>
                    <div>
                        <Main />
                    </div>
                    <div>
                        <Rightside />
                    </div>
                </Layout>

            </Container>

        </div>
    )
}

const Container = styled.div`
padding-top:82px;

margin:auto;
max-width:1158px;
padding-left:0px;

`
const Layout = styled.div`
display:grid;
grid-template-areas:"leftside main rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}



export default connect(mapStateToProps,)(Home)

