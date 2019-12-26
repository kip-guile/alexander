import React from 'react'
import styled from 'styled-components'
import FooterDiv from './footer'

const FooterBlock = styled.footer`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: #F9F9F9;
    justify-content: center;
    align-items: center;
    background-color: #001F56;`

const Footer = () => {

    return (
        <FooterBlock>
            <FooterDiv/>
        </FooterBlock>
    )
}

export default Footer