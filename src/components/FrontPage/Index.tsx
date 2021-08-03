import KScomputer from '../../assets/images/computer.svg'

import "./styles.scss"

export default function FrontPage () {

    return (
        <section className="frontPage">
            <h1>Front End Developer</h1>
            <p>I create and style responsive pages, and I love it</p>
            <img src={KScomputer} alt="kist on computer" />
        </section>
    )
}