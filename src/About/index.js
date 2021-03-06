import React from 'react'
import styled from 'styled-components'
import TopHalf from './tophalf'

const AboutBlock = styled.section`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 5rem;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(90deg, #000019 70%, #001F56 30%); */
    background: linear-gradient(90deg, #F9F9F9 70%, #393F4A 30%);
    `

const About = () => {

    return (
        <AboutBlock>
            <TopHalf/>
        </AboutBlock>
    )
}

export default About