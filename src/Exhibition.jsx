import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CatAvatar from './components/CatAvatar'


function Exhibition () {
    const [count, setCount] = useState(0)

    return (
    <>
        <section id="welcome-section" className="relative bg-gradient-to-b from-mauve-500 to-blue-950 font-mono ">
            <div className="relative px-20 text-left text-fuchsia-100">
                <div className="fixed py-20 right-10 text-3xl font-bold text-center">
                    <h1>- Shin's Gallery -</h1>
                    <Link className="m-1 text-base border-2 border-fuchsia-200 hover:bg-sky-100 rounded" to="/about">
                        about me﹥
                    </Link>
                </div>
                <div className="snap-y snap-center snap-always scroll-smooth ...">
                    <div className="content break-after-page">
                        <h2 className="content-header">drawings - paintings</h2>
                    </div>

                    <div className="content break-after-page">
                        <h2 className="content-header">beads art</h2>
                    </div>

                    <div className="content break-after-page">
                        <h2 className="content-header">crochet</h2>
                    </div>

                    <div className="content break-after-page">
                        <h2 className="content-header">poems</h2>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-20 right-20 ...">
            <div className="grid grid-rows-2 gap-4">
                <div className="text-center text-white animate-wiggle ...">
                <pre id="intro-text">
                    +----------------------------+<br/>
                    | Welcome to Shin's Gallery! |<br/>
                    | Back to home?              |<br/>
                    +--------------------   -----+<br/>
                    <pre>                //</pre>
                    <pre>               //</pre>
                </pre>
                </div>
                <div className="text-center animate-bounce ...">
                <Link to='/'>
                    <CatAvatar id="intro-avatar" className="text-sky-300 hover:text-fuchsia-300 font-bold text-3xl hover:text-5xl cursor-pointer"/>
                </Link>
                </div>
            </div>
            </div>
        </section>
    </>
    )
}

export default Exhibition;