import React from 'react'
import styled from 'styled-components'

const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #3A3838;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 3rem;
    background-color: #F9F9F9;
    /* border-top: 0.05rem solid currentColor; */

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
                width: 25.05em;
                height: 8.139em;
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
                font-size: 1.2rem;
                text-align: left;
            }

            .links {
                display: flex;
                box-sizing: border-box;
                width: 95%;
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
                        background-color: #393F4A;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0.1rem;
                        font-size: 1.2rem;
                        color: white;
                        padding: 0.2rem;
                        font-weight: bold;
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

const Section2 = () => {

    return (
        <Main>
            <div className='cover'>
                <div className='standout'>
                    <div className='header'>
                        <h1>Bug Tracker</h1>
                    </div>
                    <div className='content'>
                        <p>This is a bug tracking application that allows developers working on projects to manage bugs.</p>
                        <p>The user can create, update and delete projects. Also, they can create, update and change the status of bugs assigned to a project.
                            I worked as the only developer on this project, building both the backend and frontend from the ground up.</p>
                        <p>As the only developer on this project, my roles included handling authentication and authorization both on the 
                            Frontend and Backend, creating and managing all calls to the database, creating all API endpoints and middlewares on the Backend.
                            On the frontend, I setup redux to manage state and handled the design using the Ant design framework.</p>     
                    </div>
                </div>
                <div>
                    <figure>
                        <div>

                        </div>
                    </figure>
                    <div className='links'>
                        <ul>
                            <li><a href='https://bug-tracker-frontend.now.sh/'>Application</a></li>
                            <li><a href='https://github.com/kip-guile/Bug-Tracker'>Github Backend</a></li>
                            <li><a href='https://github.com/kip-guile/bug-tracker-frontend'>Github Frontend</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Section2