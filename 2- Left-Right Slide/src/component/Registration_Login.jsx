import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFacebookF } from "react-icons/fa6";
import { RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Registration_Login = () => {

    const [slidChanger, setSlidChanger] = useState(false)

    return (
        <Main>
            <Container>

                <div className={`shadowLeft ${slidChanger ? "" : "shadowRight"} `}>

                    {slidChanger ? (
                        <>
                            <h1>WELLCOME BACK FRIEND!😀</h1>
                            <p>Enter Your Correct Credential to Access Account.</p>
                            <button onClick={() => setSlidChanger(!slidChanger)}>SIGN UP</button>
                        </>
                    ) : (
                        <>
                            <h1>HELLO FRIEND!😀</h1>
                            <p>Register with Your Personal Detail to use all of site features</p>
                            <button onClick={() => setSlidChanger(!slidChanger)}>SIGN IN</button>
                        </>
                    )}


                </div>

                <LeftContainer>

                    <h1>SIGN UP</h1>

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

                </LeftContainer>

                <RightContainer>
                    <h1>SIGN IN</h1>

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
                </RightContainer>

            </Container>
        </Main>
    )
}

export default Registration_Login


const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    gap: 50px;
    padding: 20px;
    width: 1000px;
    height: 500px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0 0 10px black;

    .shadowLeft{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 50%;
    padding: 20px;
    height: 500px;
    background-color: black;
    border-radius: 0px 200px 200px 0px;
    transition: all 0.6s;
}


.shadowRight{
    transform: translateX(90%);
    border-radius:200px 0px 0px 200px;
    transition: all 0.6s;
}

.shadowLeft > h1{
    transition: all 0.2s ease-out;
    color: white;
}

.shadowLeft > p{
    color: white;
}

button{
        transition: all 0.2s ease-out;
        scale: 0.90;
        cursor: pointer;
        width: 200px;
        height: 40px;
        border-radius: 20px;
        border: 2px solid white;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 700;

        &:hover{
            background-color: white;
            color: black;
            scale: 1;
            transition: all 0.2s ease-in;
        }

    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        gap: 20px;
    }

    `;




const LeftContainer = styled.div`
    position: relative;
    z-index: 5;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;

    h1{
        font-size: 50px;
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

const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;

    h1{
        font-size: 50px;
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
