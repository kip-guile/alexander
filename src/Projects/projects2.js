import React from 'react'
import styled from 'styled-components'

const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #001F56;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 3rem;
    background-color: #F9F9F9;

    div.cover {
        border-top: 0.05rem solid currentColor;
    }
    
    div {
        align-items: center;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        width: 90%;
        height: 80%;
        box-sizing: border-box;
        padding: 0 1em;

        div.standout {
                width: 55%;
            }

        div {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            height: 95%;
            width: 40%;
            justify-content: space-evenly;

            figure {
                width: 16.7em;
                height: 5.426em;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
                border: 0.05rem solid #fff;

                div {
                    width: 100%;
                    height: 100%;
                    background-image: url(https://res.cloudinary.com/pureretail/image/upload/v1577429834/split_d0ph2y.jpg);
                    background-color: #fff;
                    background-size: cover;
                    background-position-x: center;
                }
            }

            .header {
                display: flex;
                box-sizing: border-box;
                width: 90%;
                height: 15%;
            }

            .content {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                width: 95%;
                height: 75%;
                background-color: darkgray;
            }

            .links {
                display: flex;
                box-sizing: border-box;
                width: 90%;
                height: 15%;

                ul {
                    width: 100%;
                    display: flex;
                    margin: 0;
                    box-sizing: border-box;
                    padding: 0;
                    list-style-type: none;
                    justify-content: space-evenly;

                    li {
                        background-color: #247BA0;
                        font-size: 0.7rem;
                        color: white;
                        padding: 0.3rem;
                    }
                }
            }
        }
    }`

const Section2 = () => {

    return (
        <Main>
            <div className='cover'>
                <div className='standout'>
                    <div className='header'>
                        <h1>Bug Tracker</h1>
                    </div>
                    <div className='content'>

                    </div>
                </div>
                <div>
                    <figure>
                        <div>

                        </div>
                    </figure>
                    <div className='links'>
                        <ul>
                            <li>Application</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Section2