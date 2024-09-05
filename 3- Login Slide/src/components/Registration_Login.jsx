import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFacebookF } from "react-icons/fa6";
import { RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Registration_Login = () => {

    const [upDown, setUpDown] = useState(false);

    return (
        <Main>
            <Container>

                <SignUP upDown={upDown} >

                    <h1 onClick={()=>{setUpDown(false)}}>SIGN UP</h1>

                    <div className="socialMedia">
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><RiGoogleFill /></a></li>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a href="#"><FaLinkedinIn /></a></li>
                    </div>

                    <p>Create a Account by filling Data below.</p>

                    <form >
                        <input type="text" name='userName' placeholder='User Name' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='password' placeholder='Password' />
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' />
                    </form>
                    <button>SIGN UP</button>

                </SignUP>

                <SignIN upDown={upDown}>
                    <h1 onClick={()=>{setUpDown(true)}}>SIGN IN</h1>

                    <div className="socialMedia">
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><RiGoogleFill /></a></li>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a href="#"><FaLinkedinIn /></a></li>
                    </div>

                    <p>Enter Your Correct Credential to Access Account.</p>

                    <form >
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='password' placeholder='Password' />
                    </form>

                    <button>SIGN IN</button>
                </SignIN>

            </Container>
        </Main>
    )
}

export default Registration_Login


const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #56ab2f; 
    background: -webkit-linear-gradient(to right, #a8e063, #56ab2f); 
    background: linear-gradient(to right, #a8e063, #56ab2f); 
    padding: 20px;
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 10px black;
    height: 500px;
    overflow: hidden;
    margin: 20px;

    `;


const SignUP = styled.div`

    z-index: 5;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-bottom: 60px;

    h1{
        color: ${props => props.upDown ? "#727272" : "black"};
        cursor: pointer;
        font-size: 40px;
        font-weight: 800;
    }

    p{
        color: #363636;
        font-weight: 600;
    }

    .socialMedia{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        list-style: none;
    }

    .socialMedia li{
        transition: all 0.3s ease-in-out;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 2px solid black;
        cursor: pointer;
        &:hover{
            background-color: black;
        }
    }

    .socialMedia li:hover {
        background-color: black;
        transition: all 0.3s ease-in-out;
        scale: 0.95;
    }

    .socialMedia li:hover a {
        color: white;
    }

    .socialMedia li a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-decoration: none;
        font-size: 20px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    form > input{
        background-color: #eeeeee;
        width: 350px;
        height: 40px;
        padding: 0 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
    }

    button{
        transition: all 0.2s ease-out;
        scale: 0.90;
        cursor: pointer;
        width: 200px;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 700;

        &:hover{
            scale: 1;
            transition: all 0.2s ease-in;
        }

    }
`;

const SignIN = styled.div`



    position: absolute;
    left: 2px;
    top: 85px;
    background-color: whitesmoke;
    border-radius: 100px 100px 30px 30px;
    z-index: 5;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    transform: translateY(${props => props.upDown ? "0%" : "77%"});
    transition: all 0.5s;

    h1{
        cursor: pointer;
        color: ${props => props.upDown ? "black" : "#727272"};
        font-size: 40px;
        font-weight: 800;
    }

    p{
        font-size: 14px;
        text-align: center;
        color: #363636;
        font-weight: 600;
    }

    .socialMedia{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        list-style: none;
    }

    .socialMedia li{
        transition: all 0.3s ease-in-out;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 2px solid black;
        cursor: pointer;
        &:hover{
            background-color: black;
        }
    }

    .socialMedia li:hover {
        background-color: black;
        transition: all 0.3s ease-in-out;
        scale: 0.95;
    }

    .socialMedia li:hover a {
        color: white;
    }

    .socialMedia li a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-decoration: none;
        font-size: 20px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    form > input{
        background-color: #eeeeee;
        width: 350px;
        max-width: 350px;
        height: 40px;
        padding: 0 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
    }

    button{
        transition: all 0.2s ease-out;
        scale: 0.90;
        cursor: pointer;
        width: 200px;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 100px;

        &:hover{
            scale: 1;
            transition: all 0.2s ease-in;
        }
    }
`