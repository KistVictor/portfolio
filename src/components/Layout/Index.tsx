import { ReactNode } from "react"
import Footer from "../Footer/Index"

import KSlogo from '../../assets/images/KVlogo.svg'

type layoutType = {
    children: ReactNode
}

export default function Layout ( {children} : layoutType ) {

    return (
        <>
            <header className="navBar">
                <img src={KSlogo} alt="kist's logo"></img>
                <nav>
                    <ul>
                        <li><a href="#about">about</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}