import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
    font-size: 1rem;`

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

        a.navlink:hover {
            color: whitesmoke;
            letter-spacing: 1px;
            transition: all 0.4s ease 0s;
            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        }

        li {
            margin-bottom: 1rem;

            a {
                color: currentColor;
                text-decoration: none;
            }

            a:hover {
                color: whitesmoke;
                letter-spacing: 1px;
                transition: all 0.4s ease 0s;
                box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
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

            a {
                text-decoration: none;
                color: white;
            }

            a:hover {
                color: whitesmoke;
                letter-spacing: 1px;
                transition: all 0.4s ease 0s;
                box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            }
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
                <NavLink to = {'/projects'} className='navlink' style={{ textDecoration: 'none', color: 'white' }}><li>Projects</li></NavLink>
                    <li>Resume</li>
                </ul>
            </Second>
            <Third>
                <span>© Alexander Oguejiofor 2019</span>
                <div>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/alexanderoguejiofor/' rel="noopener noreferrer" target="_blank" >LinkedIn</a></li>
                        <li><a href='https://www.goodreads.com/user/show/26479310-pokerface' rel="noopener noreferrer" target="_blank" >Goodreads</a></li>
                        <li><a href='https://twitter.com/master_elodin' rel="noopener noreferrer" target="_blank" >Twitter</a></li>
                        <li><a href='https://github.com/kip-guile' rel="noopener noreferrer" target="_blank" >Github</a></li>
                    </ul>
                </div>
            </Third>
        </Main>
    )
}

export default FooterDiv