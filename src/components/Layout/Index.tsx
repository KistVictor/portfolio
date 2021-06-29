import { ReactNode } from "react"
import Footer from "../Footer/Index"

type layoutType = {
    children: ReactNode
}

export default function Layout ( {children}: layoutType ) {

    return (
        <>
            <header>
                <a href="https://www.figma.com/proto/GaWrskdfgs1vCu9sSKPLQD/Layout-portfolio?node-id=55%3A38&scaling=min-zoom&page-id=0%3A1"><h1>Figma's layout</h1></a>
                <img alt="kist's logo"></img>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
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