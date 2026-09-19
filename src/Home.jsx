import { useState } from 'react'
import { Link } from 'react-router-dom'
import CatAvatar from './components/CatAvatar'


function Home () {
    const [count, setCount] = useState(0)

    return (
    <>
        <section id="welcome-section" className="relative h-screen bg-gradient-to-b from-blue-300 to-black font-mono pre-wrap">
            <div className="absolute inset-x-0 top-50 text-center text-fuchsia-200">
            <div className="text-5xl font-bold animate-[wiggle_1s_ease-in-out_infinite] ...">
                <h1>- Shin's Gallery -</h1>
            </div>
            <div className="mt-4 text-gray-300 animate-pulse">
                <pre>
                +------------------------------------------------------------+<br/>
                | Welcome to my 5-9 space!                                   |<br/>
                | I'm Shin, a 9-5 data engineer and 5-9 artist (kinda).      |<br/>
                | This is my personal exhibition of my artworks and poems    |<br/>
                | --basically everything I do outside of werkkkk.            |<br/>
                |                                                            |<br/>
                | Enjoy your stay! ^^                                        |<br/>
                |============================================================|<br/>
                | p.s.                                                       |<br/>
                |    This page is handcrafted (not vibe-coded)               |<br/>
                |    Please be kind :)                                       |<br/>
                +------------------------------------------------------------+<br/>
                </pre>
            </div>
            <Link className="m-1 border-2 border-fuchsia-200 hover:bg-sky-100 rounded" to="/about">
                about me﹥
            </Link>
            </div>
            <div className="absolute inset-x-0 bottom-20 ...">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 col-start-4 txt-center text-white animate-wiggle">
                <pre id="intro-text">
                    +---------------------------------+<br/>
                    | Click me to explore the Gallery |<br/>
                    +-   -----------------------------+<br/>
                    <pre>  //</pre>
                    <pre> //</pre>
                </pre>
                </div>
                <div className="col-span-2 col-start-3 justify-center text-center animate-bounce">
                    <Link to='/exhibition'>
                        <CatAvatar id="intro-avatar" className="text-sky-300 hover:text-fuchsia-300 font-bold text-3xl hover:text-5xl cursor-pointer"/>
                    </Link>
                </div>
            </div>
            </div>
        </section>
    </>
    )
}

export default Home;