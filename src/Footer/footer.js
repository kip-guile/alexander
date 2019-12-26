import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    font-size: 0.6rem;`

const Second = styled.div`
    display: flex;
    width: 70%;
    height: 80%;
    box-sizing: border-box;
    padding-right: 15rem;
    justify-content: space-between;
    align-items: center;

    span {
        letter-spacing: 0.25rem;
        text-transform: uppercase;
        color: whitesmoke;
        box-sizing: border-box;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 0;
        box-sizing: border-box;
        padding: 1rem;
        list-style-type: none;
        justify-content: space-between;

        li {
            margin-bottom: 1rem;

            a {
                color: currentColor;
                text-decoration: none;
            }
        }
    }`

const Third = styled.div`
    display: flex;
    width: 70%;
    height: 20%;
    border-top: 0.08rem solid currentColor;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
    
    div {
        display: flex;
        box-sizing: border-box;
        width: 40%;


        ul {
            display: flex;
            width: 100%;
            margin: 0;
            box-sizing: border-box;
            padding: 0;
            list-style-type: none;
            justify-content: space-between;
            align-self: flex-end;
        }
    }`

const FooterDiv = () => {

    return (
        <Main>
            <Second>
                <div>
                    <span>Say Hi!</span>
                    <ul>
                        <li><a href="mailto:oguejioforalexander@gmail.com">oguejioforalexander@gmail.com</a></li>
                        <li></li>
                    </ul>
                </div>
                <ul>
                    <li><a>Projects</a></li>
                    <li><a>Resume</a></li>
                </ul>
            </Second>
            <Third>
                <span>© Alexander Oguejiofor 2019</span>
                <div>
                    <ul>
                        <li><a>LinkedIn</a></li>
                        <li>Goodreads</li>
                        <li>Twitter</li>
                        <li>Github</li>
                    </ul>
                </div>
            </Third>
        </Main>
    )
}

export default FooterDiv