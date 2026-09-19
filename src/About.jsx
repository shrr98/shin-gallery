import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CatAvatar from './components/CatAvatar'


function About () {
    return (
    <>
        <section id="welcome-section" className="relative h-screen bg-gradient-to-b from-fuchsia-300 to-black font-mono pre-wrap">
            <div className="absolute inset-x-0 top-50 text-center text-fuchsia-100">
                <div className="text-center flex justify-center animate-bounce">
                    <Link to="/">
                        <CatAvatar id="intro-avatar" className="h-25 w-50 text-sky-300 hover:text-fuchsia-300 font-bold text-3xl hover:text-5xl cursor-pointer"/>
                    </Link>
                </div>
                <div className="text-3xl font-bold">
                    <h1>- Shin's Gallery -</h1>
                </div>
                <div className="font-bold animate-[wiggle_1s_ease-in-out_infinite] ...">
                    <h2>- about me -</h2>
                </div>
                <div className="mt-4 text-gray-300 animate-pulse">
                    <pre>
                    +------------------------------------------------------------+<br/>
                    | Hi! ^^                                                     |<br/>
                    | I'm Shin, a 9-5 data engineer with tens of hobbies         |<br/>
                    | --non of them I master, cause hobby is supposed to be fun! |<br/>
                    | I like:                                                    |<br/>
                    | + reading                                                  |<br/>
                    | + writing poems                                            |<br/>
                    | + drawing                                                  |<br/>
                    | + crocheting                                               |<br/>
                    | + crafting beads art                                       |<br/>
                    | + singing + playing guitar                                 |<br/>
                    | + making freestyle music (very rarely)                     |<br/>
                    +------------------------------------------------------------+<br/>
                    </pre>
                </div>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-6 w-1/5 py-3 text-sky-200">
                        <div className="col-span-3 text-base">
                            <h2>.: find me on :.</h2>
                        </div>
                        <Link className="social-btn px-3 text-bold text-xs hover:zoom-150 hover:border-2 border-fuchsia-300 hover:bg-gray-800 rounded hover:animate-wiggle ..." to="https://github.com/shrr98">
                            <pre>
                                ^,,,^<br/>
                               ( . )<br/>
                               <br/>
                            </pre>
                        </Link>
                        <Link className="social-btn px-3 text-bold text-xs hover:zoom-150 hover:border-2 border-fuchsia-300 hover:bg-gray-800 rounded hover:animate-wiggle ..." to="https://www.instagram.com/0shinrezky0">
                            <pre>
                                +---+<br/>
                                | o |<br/>
                                +---+
                            </pre>
                        </Link>
                        <Link className="social-btn px-3 text-bold text-xs hover:zoom-150 hover:border-2 border-fuchsia-300 hover:bg-gray-800 rounded hover:animate-wiggle ..." to="https://www.linkedin.com/in/shintya-rezky/">
                            <pre>
                                +---+<br/>
                                | L |<br/>
                                +---+
                            </pre>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default About;