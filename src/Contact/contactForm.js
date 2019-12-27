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
    font: inherit;
    font-weight: normal;
    line-height: inherit;
    -webkit-font-smoothing: inherit;
    background-color: #F9F9F9;
    
    div {
        margin-top: 1em;
        align-items: center;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 1em;
        font: inherit;
        font-weight: normal;
        line-height: inherit;
        -webkit-font-smoothing: inherit;

        form {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-width: 500px;
            box-sizing: border-box;
            flex-direction: column;
            margin-top: 0em;

            button {
                margin-top: 1em;
                font-size: 0.9em;
                font-weight: bold;
                color: white;
                background-color: #247BA0;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                padding: 0.6em;
                padding-left: 1.5em;
                padding-right: 1.5em;
                border: 0;
                cursor: pointer;
            }

            button:hover {
                background-color: #05668D;
                letter-spacing: 1px;
                transition: all 0.4s ease 0s;
                box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            }

            .message {
                width: 100%;
                display: flex;
                box-sizing: border-box;
                align-items: center;
                display: flex;

                div {
                    width: 100%;
                    margin-top: 0.5em;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    textarea {
                        border-color: currentColor;
                        color: currentColor;
                        font-family: inherit;
                        width: 100%;
                        padding: 0.3em;
                        padding-left: 0em;
                        height: 2em;
                        border: 0;
                        margin-top: 0.5em;
                        background: transparent;
                        border-bottom: 1px solid currentColor;
                        box-shadow: none;
                        resize: none;
                        overflow: auto;
                        margin: 0;
                        cursor: text;
                        white-space: pre-wrap;
                        letter-spacing: normal;
                        word-spacing: normal;
                        text-transform: none;
                        text-indent: 0px;
                        text-shadow: none;
                    }

                    textarea::placeholder {
                        color: currentColor;
                    }
                    
                    textarea:focus::placeholder {
                        color: #247BA0;
                    }

                    textarea:focus {
                        outline:none;
                        border-bottom: 1px solid #247BA0;
                    }
                }
            }

            .nameemail {
                width: 100%;
                display: flex;
                flex-direction: row;
                font-family: inherit;
                justify-content: space-between;
                box-sizing: border-box;
                align-items: center;
                justify-content: space-between;

                div {
                    width: 40%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-top: 0.5em;

                    .span {
                        /* width: 100%; */
                        font-size: 0.7em;
                        padding-bottom: 1em;

                    }

                    input {
                        border-color: currentColor;
                        border: 0;
                        color: currentColor;
                        margin-top: 0.5em;
                        background: transparent;
                        border-bottom: 1px solid currentColor;
                    }

                    input::placeholder {
                        color: currentColor;
                    }
                    
                    input:focus::placeholder {
                        color: #247BA0;
                    }

                    input:focus {
                        outline:none;
                        border-bottom: 1px solid #247BA0;
                    }
                }
            }
        }

        article {
            margin-bottom: 0em;
            text-align: center;
            display: flex;
            flex-direction: column;

            h1 {
                transform: translate3d(0, 0, 0);
                opacity: 1;
                font-size: 2em;
                font-weight: bold;
                line-height: 1;
                max-width: unset;
                transition-delay: 200ms;
                letter-spacing: -0.03em;
                transition: transform 0.5s, opacity 0.2s;
                margin-block-start: 1em;
                margin-block-end: 0.5em;
                text-align: center;
            }

            p {
                transform: translate3d(0, 0, 0);
                opacity: 1; 
                margin: 0 auto;
                font-size: 1em;
                line-height: 1.5;
                margin-top: 15px;
                letter-spacing: 0.02em;
                display: block;
                text-align: center;
                margin-block-start: 0em;
                margin-block-end: 0.5em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
            }

        }
    }`

const ContactHalf = () => {

    return (
        <Main>
            <div>
                <article>
                    <div>
                        <h1>Send a message</h1>
                        <p>Do you have a question, or you just want 
                            <br/> 
                            to say hello.
                        </p>
                    </div>
                </article>
                <form method="POST" target="_blank" action="https://formspree.io/xyykelkd">
                    <input type="hidden" name="_subject" value="Message from my portfolio"/>
                    <div className="nameemail">
                        <div>
                            {/* <label className="span" htmlFor="name">Name</label> */}
                            <input className="span" id="name" type="text" name="name" required="required" placeholder="My name is"></input>
                        </div>
                        <div>
                            {/* <label className="span" htmlFor="name">Email</label> */}
                            <input className="span" id="email" type="email" name="_replyto" required="required" placeholder="My email address"></input>
                        </div>
                    </div>
                    <div className="message">
                        <div>
                            {/* <label htmlFor="name">Message</label> */}
                            <textarea id="message" rows="7" name="message" required="required" placeholder="Hello, we need a full stack developer. Are you available to work?"></textarea>
                        </div>
                    </div>
                    <button type="submit" id="submit__button">
                            Submit
                    </button>
                </form>
            </div>
        </Main>
    )
}

export default ContactHalf