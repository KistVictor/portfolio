import { ReactNode } from "react"
import Footer from "../Footer/Index"

import KSlogo from '../../assets/images/KVlogo.svg'

import "./styles.scss"

type layoutType = {
    children: ReactNode
}

export default function Layout ( {children} : layoutType ) {

    return (
        <>
            <header className="header">
                <div>
                    <img src={KSlogo} alt="kist's logo"></img>
                    <nav className="navBar">
                        <ul>
                            <li><a href="#about">about</a></li>
                            <li><a href="#portfolio">portfolio</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </nav>
                <hr />
                </div>
            </header>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}