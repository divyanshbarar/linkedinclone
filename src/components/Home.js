import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Leftside from './Leftside'

function Home() {
    return (
        <div>
            <Header />
            <Container>
                <Layout>
                    <div>
                        <Leftside />
                    </div>
                    <div>
                        middle
                    </div>
                    <div>
                        right
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

export default Home
