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
    
    div {
        align-items: center;
        display: flex;
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
                /* border: 0.10rem solid #05668D; */
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                transition: 0.3s;

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
                font-size: 0.7rem;
                text-align: left;
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
                        border-radius: 0.2rem;

                        a {
                            color: white;
                            text-decoration: none;
                        }

                        a:hover {
                            color: whitesmoke;
                            letter-spacing: 1px;
                            transition: all 0.4s ease 0s;
                            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                        }
                    }
                }
            }
        }
    }`

const Section = () => {

    return (
        <Main>
            <div>
                <div className='standout'>
                    <div className='header'>
                        <h1>Split the Bill</h1>
                    </div>
                    <div className='content'>
                        <p>This React.js application allows a user to create a bill and split it among friends
                            registered on the platform.
                        </p>
                        <p>The user can create a bill, update a bill when it has been paid, split bills between friends,
                            and confirm paid bills. This project was created by two developers.
                        </p>
                        <p>As the only frontend architect on this project, my role included handling authentication on the front end, setting up and
                            handling state using redux, handling and laying out CRUD operations on the frontend, and using the Ant design framework
                            for styling.
                        </p>
                    </div>
                </div>
                <div>
                    <figure>
                        <div>

                        </div>
                    </figure>
                    <div className='links'>
                        <ul>
                            <li><a href='https://split-the-bill-six-alpha.now.sh/'>Application</a></li>
                            <li><a href='https://github.com/kip-guile/split-the-bill'>Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Section