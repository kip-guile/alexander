import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    margin-top: 1.5em;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 3rem;
    font: inherit;
    font-weight: normal;
    line-height: inherit;
    -webkit-font-smoothing: inherit;
    `

const ArticleWrapper = styled.article`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 40%;
    margin-top: 5rem;
    `

const Content = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    
    h1 {
        font-size: 1.5rem;
        color: #001F56;
        margin: 0.8rem;
    }
    
    p {
        font-size: 0.8rem;
        margin-left: 1.5rem;
        margin: 0.5rem;
        color: #247BA0;
    }`

const Figure = styled.figure`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 8.142rem;
    height: 8.142rem;
    margin-top: 8rem;
    margin-right:6rem;
    border: 0.05rem solid #001F56;
    
    div {
        margin-top: -3rem;
        width: 8.142rem;
        height: 8.142rem;
        background-image: url(https://avatars3.githubusercontent.com/u/38817414?s=460&v=4);
        background-color: #fff;
        background-size: cover;
        background-position-x: center;
        margin-left: -7.5rem;
    }`

const TopHalf = () => {

    return (
        <Main>
        <ArticleWrapper>
            <Content>
                <h1>Full stack Developer<br/> & <br/> Business Analyst<span>.</span></h1>
                <p>Imaginative full stack developer with a passion for clean code, 
                    collaboration, and bringing delightful ideas to fruition.</p> 
                <p>Business Analyst with experience in Needs Assessment, 
                    Planning, Requirement elicitation, and Solution Evaluation.</p>
            </Content>
        </ArticleWrapper>
        <Figure>
            <div>

            </div>
        </Figure>
        </Main>
    )
}

export default TopHalf