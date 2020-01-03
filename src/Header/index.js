import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderBlock = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #393F4A;
    transition: top 0.6s;
    top: ${props => props.theme.hidden};
    /* background: transparent; */
    /* background-color: green; */

    .home {
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            letter-spacing: 1.3px;
            text-decoration-line: none;
        }

    .home:active {
            color: whitesmoke;
            letter-spacing: 1.5px;
            text-decoration: none;
            text-decoration-line: none;
        }
    
    div {
        display: flex;
        box-sizing: border-box;
        width: 30%;
        height: 100%;

        nav {
            display: flex;
            width: 100%;
            height: 100%;
        }

        a.navlink {
           text-decoration: none;
           color: white; 
        }

        a.navlink:hover {
            color: whitesmoke;
            letter-spacing: 1px;
            /* transition: all 0.4s ease 0s; */
            /* box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57); */
            border-bottom: 0.10rem solid whitesmoke;
            padding-bottom: 1.4rem;
        }

        ul{
        display: flex;
        font-size: 1.2rem;
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        list-style-type: none;
        justify-content: space-around;
        color: white;
        font-weight: bold;
        align-items: center;

            a {
                text-decoration: none;
                color: white;
            }

            a:hover {
                color: whitesmoke;
                letter-spacing: 1px;
                border-bottom: 0.10rem solid whitesmoke;
                padding-bottom: 1.4rem;
            }
        }
    }`

const Header = () => {

    let [pos, setPos] = useState(window.pageYOffset)
    let [visible, setVisible] = useState(true)

    const theme ={
        hidden: "-7rem"
    }

    const untheme = {
        hidden: "0rem"
    }
    
    useEffect(()=> {
       const handleScroll = () => {
          let temp = window.pageYOffset
          
          setVisible(pos > temp);
          setPos(temp)
       };
       window.addEventListener("scroll", handleScroll);
       return(() => {
          window.removeEventListener("scroll", handleScroll);
       })
    })

    return (
        <ThemeProvider theme={!visible ? theme : untheme}>
        <HeaderBlock className={"navbar " + (!visible ? "navbarHidden" : " ")}>
            <NavLink to = {'/'}>
            <h3 className='home'>Alexander</h3>
            </NavLink>
            <div>
            <nav className='hidenav'>
                <ul>
                    <li><NavLink to = {'/projects'} className='navlink' >Projects</NavLink></li>
                    <li><a href='https://res.cloudinary.com/pureretail/image/upload/v1578061198/private/Alexander_Oguejiofor_-_FS_nce7x3.pdf' rel="noopener noreferrer" target="_blank" >Resume</a></li>
                </ul>
            </nav>
            </div>
        </HeaderBlock>
        </ThemeProvider>
    )
}

export default Header