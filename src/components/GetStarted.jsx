import React from 'react'
import { FaReact, FaGithub } from 'react-icons/fa';

const GetStarted = () => {
    return (
        <>
            <div className="Getstarted-container">
                <div className="main-text">
                    <div className="text">
                        <h1>Develop your skills <br />
                            without diligence</h1>
                        <p>A good example of a paragraph contains a topic sentence, details and a <br />conclusion. There are many different kinds of animals that live in China.</p>
                    </div>
                    <div className="fashion">
                        <img src="/assets/undraw.png" alt="" />
                    </div>
                </div>
                <div className='get-dis'>
                    <button className='get'><a href=""><strong>Get Started</strong></a></button>
                    <button className="dis"><a href=""><strong>Discount</strong></a></button>
                </div>
            </div>

        </>
    )
}

export default GetStarted
