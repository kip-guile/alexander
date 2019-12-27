import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import './header.css'

const HeaderBlock = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    /* background-color: green; */
    
    
    div {
        display: flex;
        box-sizing: border-box;
        width: 30%;

        nav {
            display: flex;
            width: 100%;
        }

        ul{
        display: flex;
        font-size: 0.9rem;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        list-style-type: none;
        justify-content: space-around;
        color: #001F56;
        font-weight: bold;
        }
    }`

const Header = () => {

    let [pos, setPos] = useState(window.pageYOffset)
    let [visible, setVisible] = useState(true)
    
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
        <HeaderBlock className={"navbar " + (!visible ? "navbarHidden" : " ")}>
            <NavLink to = {'/'}>
            <svg width="183.3" height="29" viewBox="0 0 550 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b)">
            <path d="M22.4829 20.992H7.26688L4.09888 28H0.642875L13.1709 0.88H16.5789L29.1069 28H25.6509L22.4829 20.992ZM21.2349 18.208L14.8989 4.144L8.51488 18.208H21.2349ZM34.2744 0.88H37.7304V25.12H52.8504V28H34.2744V0.88ZM78.0024 25.12V28H58.2744V0.88H77.4264V3.76H61.7304V12.832H75.7464V15.664H61.7304V25.12H78.0024ZM101.839 28L93.2949 16.576L84.7509 28H80.8629L91.4229 14.032L81.4869 0.88H85.3749L93.3429 11.536L101.311 0.88H105.151L95.2629 14.032L105.775 28H101.839ZM126.967 20.992H111.751L108.583 28H105.127L117.655 0.88H121.063L133.591 28H130.135L126.967 20.992ZM125.719 18.208L119.383 4.144L112.999 18.208H125.719ZM162.135 0.88V28H159.255L142.215 6.832V28H138.759V0.88H141.639L158.679 22.048V0.88H162.135ZM172.228 0.88H183.604C186.612 0.88 189.236 1.456 191.476 2.608C193.716 3.728 195.428 5.312 196.612 7.36C197.828 9.376 198.436 11.728 198.436 14.416C198.436 17.104 197.828 19.472 196.612 21.52C195.428 23.568 193.716 25.168 191.476 26.32C189.236 27.44 186.612 28 183.604 28H172.228V0.88ZM183.46 25.12C187.076 25.12 189.892 24.16 191.908 22.24C193.956 20.288 194.98 17.68 194.98 14.416C194.98 11.184 193.956 8.608 191.908 6.688C189.892 4.736 187.076 3.76 183.46 3.76H175.684V25.12H183.46ZM225.518 25.12V28H205.79V0.88H224.942V3.76H209.246V12.832H223.262V15.664H209.246V25.12H225.518ZM251.554 28L245.41 19.456C244.578 19.52 243.954 19.552 243.538 19.552H236.434V28H232.978V0.88H243.538C247.058 0.88 249.826 1.712 251.842 3.376C253.858 5.008 254.866 7.296 254.866 10.24C254.866 12.32 254.322 14.096 253.234 15.568C252.178 17.04 250.658 18.112 248.674 18.784L255.298 28H251.554ZM243.346 16.72C245.938 16.72 247.922 16.16 249.298 15.04C250.706 13.92 251.41 12.32 251.41 10.24C251.41 8.16 250.722 6.56 249.346 5.44C247.97 4.32 245.97 3.76 243.346 3.76H236.434V16.72H243.346ZM287.301 28.288C284.581 28.288 282.101 27.696 279.861 26.512C277.653 25.296 275.909 23.632 274.629 21.52C273.381 19.408 272.757 17.04 272.757 14.416C272.757 11.824 273.381 9.472 274.629 7.36C275.909 5.248 277.653 3.584 279.861 2.368C282.101 1.152 284.581 0.543999 287.301 0.543999C290.053 0.543999 292.533 1.152 294.741 2.368C296.949 3.552 298.677 5.216 299.925 7.36C301.205 9.472 301.845 11.824 301.845 14.416C301.845 17.04 301.205 19.408 299.925 21.52C298.677 23.632 296.949 25.296 294.741 26.512C292.533 27.696 290.053 28.288 287.301 28.288ZM287.301 25.312C289.381 25.312 291.269 24.848 292.965 23.92C294.661 22.96 295.989 21.664 296.949 20.032C297.909 18.368 298.389 16.512 298.389 14.464C298.389 12.384 297.909 10.528 296.949 8.896C295.989 7.232 294.661 5.936 292.965 5.008C291.269 4.048 289.381 3.568 287.301 3.568C285.221 3.568 283.333 4.048 281.637 5.008C279.941 5.936 278.613 7.232 277.653 8.896C276.693 10.528 276.213 12.384 276.213 14.464C276.213 16.512 276.693 18.368 277.653 20.032C278.613 21.664 279.941 22.96 281.637 23.92C283.333 24.848 285.221 25.312 287.301 25.312ZM328.012 14.416H331.324V24.832C330.076 25.952 328.556 26.816 326.764 27.424C325.004 28 323.148 28.288 321.196 28.288C318.412 28.288 315.9 27.696 313.66 26.512C311.42 25.296 309.66 23.632 308.38 21.52C307.1 19.408 306.46 17.04 306.46 14.416C306.46 11.824 307.084 9.472 308.332 7.36C309.612 5.248 311.356 3.584 313.564 2.368C315.804 1.152 318.3 0.543999 321.052 0.543999C325.596 0.543999 329.084 1.888 331.516 4.576L329.308 6.832C327.132 4.656 324.396 3.568 321.1 3.568C318.988 3.568 317.084 4.048 315.388 5.008C313.692 5.936 312.348 7.232 311.356 8.896C310.396 10.528 309.916 12.368 309.916 14.416C309.916 16.464 310.396 18.32 311.356 19.984C312.348 21.616 313.692 22.912 315.388 23.872C317.116 24.8 319.068 25.264 321.244 25.264C323.868 25.264 326.124 24.624 328.012 23.344V14.416ZM351.741 28.288C348.125 28.288 345.293 27.264 343.245 25.216C341.229 23.168 340.221 20.256 340.221 16.48V0.88H343.677V16.384C343.677 19.328 344.365 21.552 345.741 23.056C347.117 24.56 349.117 25.312 351.741 25.312C354.365 25.312 356.365 24.56 357.741 23.056C359.149 21.552 359.853 19.328 359.853 16.384V0.88H363.213V16.48C363.213 20.256 362.205 23.168 360.189 25.216C358.173 27.264 355.357 28.288 351.741 28.288ZM392.721 25.12V28H372.993V0.88H392.145V3.76H376.449V12.832H390.465V15.664H376.449V25.12H392.721ZM403.061 28.288C401.397 28.288 399.861 27.952 398.453 27.28C397.077 26.576 395.989 25.6 395.189 24.352L397.349 22.192C398.821 24.272 400.709 25.312 403.013 25.312C404.677 25.312 405.909 24.848 406.709 23.92C407.509 22.96 407.909 21.504 407.909 19.552V3.76H397.925V0.88H411.317V19.312C411.317 25.296 408.565 28.288 403.061 28.288ZM421.087 0.88H424.543V28H421.087V0.88ZM446.442 28.288C443.722 28.288 441.242 27.696 439.002 26.512C436.794 25.296 435.05 23.632 433.77 21.52C432.522 19.408 431.898 17.04 431.898 14.416C431.898 11.824 432.522 9.472 433.77 7.36C435.05 5.248 436.794 3.584 439.002 2.368C441.242 1.152 443.722 0.543999 446.442 0.543999C449.194 0.543999 451.674 1.152 453.882 2.368C456.09 3.552 457.818 5.216 459.066 7.36C460.346 9.472 460.986 11.824 460.986 14.416C460.986 17.04 460.346 19.408 459.066 21.52C457.818 23.632 456.09 25.296 453.882 26.512C451.674 27.696 449.194 28.288 446.442 28.288ZM446.442 25.312C448.522 25.312 450.41 24.848 452.106 23.92C453.802 22.96 455.13 21.664 456.09 20.032C457.05 18.368 457.53 16.512 457.53 14.464C457.53 12.384 457.05 10.528 456.09 8.896C455.13 7.232 453.802 5.936 452.106 5.008C450.41 4.048 448.522 3.568 446.442 3.568C444.362 3.568 442.474 4.048 440.778 5.008C439.082 5.936 437.754 7.232 436.794 8.896C435.834 10.528 435.354 12.384 435.354 14.464C435.354 16.512 435.834 18.368 436.794 20.032C437.754 21.664 439.082 22.96 440.778 23.92C442.474 24.848 444.362 25.312 446.442 25.312ZM471.793 3.76V13.84H485.809V16.768H471.793V28H468.337V0.88H487.489V3.76H471.793ZM505.645 28.288C502.925 28.288 500.445 27.696 498.205 26.512C495.997 25.296 494.253 23.632 492.973 21.52C491.725 19.408 491.101 17.04 491.101 14.416C491.101 11.824 491.725 9.472 492.973 7.36C494.253 5.248 495.997 3.584 498.205 2.368C500.445 1.152 502.925 0.543999 505.645 0.543999C508.397 0.543999 510.877 1.152 513.085 2.368C515.293 3.552 517.021 5.216 518.269 7.36C519.549 9.472 520.189 11.824 520.189 14.416C520.189 17.04 519.549 19.408 518.269 21.52C517.021 23.632 515.293 25.296 513.085 26.512C510.877 27.696 508.397 28.288 505.645 28.288ZM505.645 25.312C507.725 25.312 509.613 24.848 511.309 23.92C513.005 22.96 514.333 21.664 515.293 20.032C516.253 18.368 516.733 16.512 516.733 14.464C516.733 12.384 516.253 10.528 515.293 8.896C514.333 7.232 513.005 5.936 511.309 5.008C509.613 4.048 507.725 3.568 505.645 3.568C503.565 3.568 501.677 4.048 499.981 5.008C498.285 5.936 496.957 7.232 495.997 8.896C495.037 10.528 494.557 12.384 494.557 14.464C494.557 16.512 495.037 18.368 495.997 20.032C496.957 21.664 498.285 22.96 499.981 23.92C501.677 24.848 503.565 25.312 505.645 25.312ZM546.116 28L539.972 19.456C539.14 19.52 538.516 19.552 538.1 19.552H530.996V28H527.54V0.88H538.1C541.62 0.88 544.388 1.712 546.404 3.376C548.42 5.008 549.428 7.296 549.428 10.24C549.428 12.32 548.884 14.096 547.796 15.568C546.74 17.04 545.22 18.112 543.236 18.784L549.86 28H546.116ZM537.908 16.72C540.5 16.72 542.484 16.16 543.86 15.04C545.268 13.92 545.972 12.32 545.972 10.24C545.972 8.16 545.284 6.56 543.908 5.44C542.532 4.32 540.532 3.76 537.908 3.76H530.996V16.72H537.908Z" fill="#FF1654"/>
            </g>
            <defs>
            <filter id="filter0_b" x="-3.35713" y="-3.456" width="557.217" height="35.744" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
            </filter>
            </defs>
            </svg>
            </NavLink>
            <div>
            <nav className='hidenav'>
                <ul>
                    <li><NavLink to = {'/projects'} style={{ textDecoration: 'none', color: '#001F56' }}>Projects</NavLink></li>
                    <li>Resume</li>
                </ul>
            </nav>
            </div>
        </HeaderBlock>
    )
}

export default Header